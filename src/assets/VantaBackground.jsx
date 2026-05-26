import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function VantaBackground({ children }) {
  const vantaRef = useRef(null);

  useEffect(() => {
    const effect = NET.default({
      el: vantaRef.current,
      THREE: THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 500,
      minWidth: 300,

      scale: 0.5,
      scaleMobile: 0.3,

      color: 0xff3f81,
      backgroundColor: 0x23153c,
    });

    return () => {
      if (effect) effect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      style={{
        width: "100dvw",
        height: "100dvh",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          color: "white",
        }}
      >
      </div>
      {children}
    </div>
  );
}