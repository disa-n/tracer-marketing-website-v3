import React from 'react';
import Image from 'next/image';

interface AuthorDisplayProps {
  author: string;
}

export default function AuthorDisplay({ author }: AuthorDisplayProps) {
  if (author === 'Laura') {
    return (
      <div className="flex items-center">
        <span>Laura</span>
        <div className="w-6 h-6 rounded-full overflow-hidden ml-2 inline-block">
          <div className="relative w-full h-full">
            <Image
              src="/Blog/Laura-DP.webp"
              alt="Laura"
              fill
              sizes="24px"
              className="object-cover"
              style={{
                objectPosition: '50% 30%',
                transform: 'scale(1.2)' // Scale the image up within the container
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (author === 'Isolde') {
    return (
      <div className="flex items-center">
        <span>Isolde</span>
        <div className="w-6 h-6 rounded-full overflow-hidden ml-2 inline-block">
          <div className="relative w-full h-full">
            <Image
              src="/Blog/Isolde-DP.webp"
              alt="Isolde"
              fill
              sizes="24px"
              className="object-cover"
              style={{
                objectPosition: '50% 30%',
                transform: 'scale(1.2)' // Scale the image up within the container
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (author === 'Paul') {
    return (
      <div className="flex items-center">
        <span>Paul</span>
        <div className="w-6 h-6 rounded-full overflow-hidden ml-2 inline-block">
          <div className="relative w-full h-full">
            <Image
              src="/Blog/Paul-DP.jpg"
              alt="Paul"
              fill
              sizes="24px"
              className="object-cover"
              style={{
                objectPosition: '50% 30%',
                transform: 'scale(1.2)' // Scale the image up within the container
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // For other authors, show their name with a placeholder icon
  return (
    <div className="flex items-center">
      <span>{author}</span>
      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium ml-2">
        {author.charAt(0)}
      </div>
    </div>
  );
}
