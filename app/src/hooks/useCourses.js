import { useState, useEffect } from 'react';

// Constants
import { builtURL } from '../constants';

export function useCourses() {
  const [name, setName] = useState('');
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [offset, setOffset] = useState(0);
  const [next, setNext] = useState(null);

  const handleName = newName => {
    setName(newName);
    setOffset(0);
  };

  const handleOffset = () => {
    const newOffset = Number.parseInt(next.split('&')[1].split('=')[1]);
    if (offset !== newOffset) {
      setOffset(newOffset);
    }
  };

  const getCoursesFetch = async (innerName, innerOffset, callback) => {
    try {
      const resp = await fetch('http://localhost:3001/test', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ url: builtURL(innerName || name, innerOffset) }),
      });
      const data = await resp.json();
      setNext(data.next);
      callback(data);
      setLoading(false);
    } catch (_) {
      setError('There was a problem. Please try again later');
      setCourses([]);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCoursesFetch(name, offset, data => {
      setCourses(prevCourses =>
        offset === 0 ? data.items : prevCourses.concat(data.items),
      );
    });
  }, [name, offset]);

  return {
    courses,
    error,
    loading,
    name,
    next,
    setName: handleName,
    setOffset: handleOffset,
  };
}
