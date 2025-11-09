import React from 'react';

export default function WatalappanSVG() {
  return (
    <svg viewBox="0 0 200 140" className="w-64 h-44">
      <defs>
        <linearGradient id="jaggery" x1="0" x2="1">
          <stop offset="0" stopColor="#8B5E34" />
          <stop offset="1" stopColor="#C17A2C" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="78" ry="18" fill="rgba(0,0,0,0.06)" />
      <g transform="translate(100,60)">
        <path d="M-70,20 C-60,-30 60,-30 70,20 C70,48 -70,48 -70,20 Z" fill="url(#jaggery)" stroke="#6a3f22" strokeOpacity="0.2" />
        <path d="M-52,-4 C-0,-18 28,-12 52,-4 C28,8 0,14 -52,-4 Z" fill="rgba(255,255,255,0.18)" />
      </g>
    </svg>
  );
}
