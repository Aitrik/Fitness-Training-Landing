import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${sizeClasses[size]} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Wings Left */}
      <path
        d="M10 45 L30 45 M10 50 L35 50 M10 55 L30 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Wings Right */}
      <path
        d="M90 45 L70 45 M90 50 L65 50 M90 55 L70 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Central S Shield */}
      <path
        d="M50 15 L70 30 L70 55 L50 85 L30 55 L30 30 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Inner S Pattern */}
      <path
        d="M40 35 L60 35 M40 45 L60 45 M40 55 L60 55 M40 65 L60 65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* S Letter */}
      <path
        d="M42 38 C42 32, 58 32, 58 38 C58 44, 42 46, 42 52 C42 58, 58 58, 58 52"
        stroke="currentColor"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default Logo;
