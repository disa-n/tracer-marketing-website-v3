'use client';

import { useEffect, useState } from 'react';

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

export default function VideoPlayer({ src, width = "100%", height = "400" }: VideoPlayerProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div 
        style={{
          width,
          height: `${height}px`,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      >
        <span style={{ color: '#666' }}>Loading video...</span>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <video width={width} height={height} controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
