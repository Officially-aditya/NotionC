import React, { useState } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic to handle SSR
import "@excalidraw/excalidraw/index.css";

const Excalidraw = dynamic(() => import('@excalidraw/excalidraw').then(mod => mod.Excalidraw), {
  ssr: false,
});

const Canvas = () => {
  return (
    <div style={{ height: "1000px" }}>
      <Excalidraw />
    </div>
  );
};

export default Canvas;
