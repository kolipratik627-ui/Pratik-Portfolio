import React, { useRef, useEffect, useState } from 'react';
import localHeroImage from '../assets/images/hero_character.png';

interface HeroCharacterProps {
  imageUrl?: string;
  alt?: string;
  className?: string;
}

export const HeroCharacter: React.FC<HeroCharacterProps> = ({
  imageUrl,
  alt = 'Pratik Koli - 3D Sales Character',
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const characterRef = useRef<HTMLDivElement>(null);
  const leftPupilRef = useRef<HTMLDivElement>(null);
  const rightPupilRef = useRef<HTMLDivElement>(null);

  // Fallback to local downloaded asset if imageUrl isn't specified
  const characterSrc = imageUrl || localHeroImage;

  useEffect(() => {
    // Respect user's reduced-motion preference
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      return;
    }

    // Target animation values
    let targetRotY = 0;
    let targetRotX = 0;
    let targetRotZ = 0;
    let targetTransX = 0;
    let targetTransY = 0;
    let targetPupilX = 0;
    let targetPupilY = 0;

    // Current interpolated values (smooth lerp)
    let curRotY = 0;
    let curRotX = 0;
    let curRotZ = 0;
    let curTransX = 0;
    let curTransY = 0;
    let curPupilX = 0;
    let curPupilY = 0;

    let rafId: number;
    let isWindowFocused = true;

    const handlePointerMove = (e: MouseEvent | PointerEvent) => {
      // Ignore touch events on mobile devices or small screens
      if ('pointerType' in e && (e as PointerEvent).pointerType === 'touch') return;
      if (typeof window !== 'undefined' && window.innerWidth < 640) return;
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // Head & eye center of the 3D character (x: ~49%, y: ~15% of character height)
      const headCenterX = rect.left + rect.width * 0.49;
      const headCenterY = rect.top + rect.height * 0.15;

      const deltaX = e.clientX - headCenterX;
      const deltaY = e.clientY - headCenterY;
      const dist = Math.hypot(deltaX, deltaY);

      // Max angles for natural 3D head and eye motion
      const maxRotY = 14;  // degrees horizontal head turn
      const maxRotX = 9;   // degrees vertical head tilt
      const maxRotZ = 2.2; // organic head roll tilt

      // Responsive normalized offsets with non-linear softening
      const softX = deltaX / (Math.abs(deltaX) + 200);
      const softY = deltaY / (Math.abs(deltaY) + 180);

      // Near cursor = stronger direction; far cursor = calm focused direction
      const distanceFactor = Math.min(1.3, Math.max(0.75, 420 / (dist + 220)));

      // 1. Cursor Left (deltaX < 0)  -> head turns left (rotY < 0), pupils look left (pupilX < 0)
      //    Cursor Right (deltaX > 0) -> head turns right (rotY > 0), pupils look right (pupilX > 0)
      targetRotY = softX * maxRotY * distanceFactor;

      // 2. Cursor Above (deltaY < 0) -> head tilts up (rotX < 0), pupils look up (pupilY < 0)
      //    Cursor Below (deltaY > 0) -> head tilts down (rotX > 0), pupils look down (pupilY > 0)
      targetRotX = softY * maxRotX * distanceFactor;

      // 3. Subtle natural head roll
      targetRotZ = -softX * maxRotZ;

      // 4. Subtle head translation lean toward cursor
      targetTransX = softX * 8 * distanceFactor;
      targetTransY = softY * 6 * distanceFactor;

      // 5. True Eye / Pupil Gaze displacement inside the eye sockets (in pixels)
      // Scaled proportionally to container width
      const scaleFactor = Math.min(1.2, Math.max(0.65, rect.width / 440));
      targetPupilX = softX * 5.5 * scaleFactor * distanceFactor;
      targetPupilY = softY * 3.8 * scaleFactor * distanceFactor;
    };

    const handleMouseLeave = () => {
      // Smoothly return character to neutral resting pose
      targetRotY = 0;
      targetRotX = 0;
      targetRotZ = 0;
      targetTransX = 0;
      targetTransY = 0;
      targetPupilX = 0;
      targetPupilY = 0;
    };

    const handleVisibilityChange = () => {
      isWindowFocused = !document.hidden;
    };

    let startTime = performance.now();

    const animate = (now: number) => {
      if (!isWindowFocused) {
        rafId = requestAnimationFrame(animate);
        return;
      }

      const elapsed = (now - startTime) * 0.001;
      // Lifelike micro-breathing idle motion (amplitude < 0.3deg)
      const idleBreathingX = Math.sin(elapsed * 1.2) * 0.3;
      const idleBreathingY = Math.cos(elapsed * 0.9) * 0.2;

      // Interpolation factors (Head: 0.08, Pupils: 0.12)
      const lerpHead = 0.08;
      const lerpPupil = 0.12;

      curRotY += (targetRotY + idleBreathingY - curRotY) * lerpHead;
      curRotX += (targetRotX + idleBreathingX - curRotX) * lerpHead;
      curRotZ += (targetRotZ - curRotZ) * lerpHead;

      curTransX += (targetTransX - curTransX) * lerpHead;
      curTransY += (targetTransY - curTransY) * lerpHead;

      curPupilX += (targetPupilX - curPupilX) * lerpPupil;
      curPupilY += (targetPupilY - curPupilY) * lerpPupil;

      // Apply 3D Head and Body transforms
      if (characterRef.current) {
        characterRef.current.style.transform = `translate3d(${curTransX.toFixed(2)}px, ${curTransY.toFixed(2)}px, 0px) rotateX(${curRotX.toFixed(2)}deg) rotateY(${curRotY.toFixed(2)}deg) rotateZ(${curRotZ.toFixed(2)}deg)`;
      }

      // Apply pupil movements inside eye sockets
      const pupilTransform = `translate3d(${curPupilX.toFixed(2)}px, ${curPupilY.toFixed(2)}px, 0px)`;
      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = pupilTransform;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = pupilTransform;
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative select-none ${className}`}
      style={{
        perspective: '1000px',
        perspectiveOrigin: '50% 25%',
      }}
    >
      {/* 3D Character Model Container */}
      <div
        ref={characterRef}
        className="relative w-full h-auto"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: '49% 32%', // Pivots naturally around the neck and collar
          willChange: 'transform',
        }}
      >
        {/* Ambient backglow with subtle 3D depth */}
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-t from-[#B600A8]/25 via-[#7621B0]/15 to-transparent blur-3xl -z-10 transform scale-110 pointer-events-none"
          style={{ transform: 'translateZ(-30px)' }}
        />

        {/* 3D Character Base Render */}
        <img
          src={characterSrc}
          alt={alt}
          className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter contrast-105 pointer-events-none"
          loading="eager"
        />

        {/* Left Eye Tracking Socket (Viewer's Left) */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            left: '38.6%',
            top: '13.2%',
            width: '4.1%',
            height: '3.1%',
            borderRadius: '45% 55% 50% 50%',
            transform: 'rotate(-3deg) translateZ(1px)',
            background: 'linear-gradient(180deg, #e2e8f0 0%, #ffffff 60%, #cbd5e1 100%)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)',
          }}
        >
          {/* Left Pupil / Iris */}
          <div
            ref={leftPupilRef}
            className="absolute"
            style={{
              left: '18%',
              top: '12%',
              width: '64%',
              height: '76%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #334155 0%, #0f172a 60%, #020617 100%)',
              boxShadow: '0 0 2px rgba(0,0,0,0.8)',
              willChange: 'transform',
            }}
          >
            {/* Corneal reflection highlight */}
            <span
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: '20%',
                left: '25%',
                boxShadow: '0 0 1px rgba(255,255,255,0.8)',
              }}
            />
          </div>
          {/* Upper Eyelash Shadow */}
          <div
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0f172a]/70 to-transparent pointer-events-none"
          />
        </div>

        {/* Right Eye Tracking Socket (Viewer's Right) */}
        <div
          className="absolute pointer-events-none overflow-hidden"
          style={{
            left: '54.5%',
            top: '12.4%',
            width: '4.8%',
            height: '2.1%',
            borderRadius: '50% 50% 45% 55%',
            transform: 'rotate(5deg) translateZ(1px)',
            background: 'linear-gradient(180deg, #e2e8f0 0%, #ffffff 60%, #cbd5e1 100%)',
            boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.4)',
          }}
        >
          {/* Right Pupil / Iris */}
          <div
            ref={rightPupilRef}
            className="absolute"
            style={{
              left: '18%',
              top: '10%',
              width: '64%',
              height: '78%',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 35%, #334155 0%, #0f172a 60%, #020617 100%)',
              boxShadow: '0 0 2px rgba(0,0,0,0.8)',
              willChange: 'transform',
            }}
          >
            {/* Corneal reflection highlight */}
            <span
              className="absolute w-1 h-1 rounded-full bg-white"
              style={{
                top: '20%',
                left: '25%',
                boxShadow: '0 0 1px rgba(255,255,255,0.8)',
              }}
            />
          </div>
          {/* Upper Eyelash Shadow */}
          <div
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-[#0f172a]/70 to-transparent pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};
