import React from 'react';
import './index.scss';

export default function Loading() {
  return (
    <div className="loading-content">
      <em className="fad fa-spinner" />
      <span>Loading...</span>
    </div>
  );
}
