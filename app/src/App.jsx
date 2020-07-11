/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import './App.scss';

// Hooks
import { useCourses } from './hooks/useCourses';

// @Components
import Header from './components/header';
import Course from './components/course-card';
import Search from './components/search';
import Loading from './components/loading/';

function App() {
  const { courses, error, loading, next, setName, setOffset } = useCourses();
  const viewerRef = useRef();

  let scrollObserver = null;

  useEffect(() => {
    const options = {};
    const scrollCallback = (entries, observer) => {
      const entry = entries[0];
      if (entry.isIntersecting && !!next) {
        setOffset();
      }
    };
    scrollObserver = new IntersectionObserver(scrollCallback, options);
    scrollObserver.observe(viewerRef.current);
  });

  useEffect(() => {
    return () => {
      if (scrollObserver) {
        scrollObserver.disconnect();
      }
    };
  }, []);

  return (
    <div className="App">
      {!loading && !error && (
        <>
          <Header />
          <Search onSearch={setName} />
          <section className="content">
            {courses.map(({ id, ...course }) => (
              <Course key={id} course={course} />
            ))}
          </section>
        </>
      )}
      {loading && <Loading />}
      {error && !loading && <p>{error}</p>}
      <div className="viewer" ref={viewerRef} />
    </div>
  );
}

export default App;
