import React from 'react';

interface TileProps {
  icon?: React.ReactNode;
  label?: string;
  size?: '1x1' | '2x2';
  color?: string;
  link?: string;
  className?: string;
  children?: React.ReactNode;
  image?: string;
  onClick?: () => void;
}

export function Tile({ 
  icon,
  label,
  size = '1x1',
  color = 'bg-gray-200',
  link,
  className = '',
  children,
  image,
  onClick
}: TileProps) {

  const sizeClasses = {
    '1x1': 'col-span-1 row-span-1',
    '2x2': 'col-span-2 row-span-2',
  };

  const content = (
    <div
      className={`${sizeClasses[size]} ${color} rounded-2xl p-4 flex flex-col items-start justify-between text-white transition-transform hover:scale-105 shadow-lg ${className} relative overflow-hidden`}
      onClick={onClick}
    >
      {image && (
        <img src={image} alt={label || ''} className="absolute inset-0 w-full h-full object-cover"/>
      )}
      <div className="relative z-10 flex flex-col justify-between h-full w-full">
        {children ? children : (
          <>
            {icon && <div className="mb-auto">{icon}</div>}
            {label && <p className={`font-semibold text-base ${image ? 'bg-black bg-opacity-50 p-1 rounded' : ''}`}>{label}</p>}
          </>
        )}
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
}
