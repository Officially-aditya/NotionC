import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic to handle SSR
import "@excalidraw/excalidraw/index.css";

// Dynamically import Excalidraw to prevent SSR issues
const Excalidraw = dynamic(() => import('@excalidraw/excalidraw').then(mod => mod.Excalidraw), {
  ssr: false, // Disable SSR for this component
});

const Canvas = () => {
  return (
    <div style={{ height: "1000px" }}>
      <Excalidraw />
    </div>
  );
};

export default Canvas;
