import React from 'react';

export default function ScreenLoader() {
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <span class="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-black opacity-75"></span>
        <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-black opacity-75"></span>
        <span class="animate-ping absolute inline-flex h-1 w-1 rounded-full bg-black opacity-75"></span>
      </div>
    </>
  );
}
