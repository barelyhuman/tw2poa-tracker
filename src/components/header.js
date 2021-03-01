import React from 'react';

export default function Header({ ...props }) {
  return (
    <>
      <header>
        <h2 className="text-4xl py-2 text-gray-600 text-center">TillWhen</h2>
        <p className="text-center">
          <small class="text-xl text-gray-600">Mark II - Plan of Action</small>
        </p>
      </header>
    </>
  );
}
