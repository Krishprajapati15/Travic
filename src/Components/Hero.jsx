import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import 'tailwindcss/tailwind.css';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);
  const sloganRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true,
      },
    });

    // Initial slogan display
    tl.fromTo(sloganRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Image scale down
    tl.fromTo(imageRef.current, { scale: 3 }, { scale: 1, duration: 1 });

    // Overlay black circle and "TRAVIC" text appearance
    tl.fromTo(circleRef.current, { scale: 0 }, { scale: 1, duration: 1 }, '-=0.5');
    tl.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

    // Scroll-triggered animations
    tl.to(circleRef.current, { y: '100%', duration: 2 }); // Move circle down
    tl.to(textRef.current, {
      text: '',
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        // Implement letter-by-letter removal here if needed
      },
    }, '-=2');

    // Image resize and move to the left
    tl.to(imageRef.current, { x: '-50%', scale: 0.5, duration: 2 });

    return () => {
      tl.kill();
    };
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center bg-black">
      <div ref={sloganRef} className="absolute top-1/4 text-white text-xl">
        related to some traffic
      </div>
      <div ref={imageRef} className="relative w-52 h-52">
        <img src="/path-to-your-image.jpg" alt="Hero" className="w-full h-full object-cover" />
        <div ref={circleRef} className="absolute top-0 left-0 w-full h-full bg-black rounded-full"></div>
      </div>
      <div ref={textRef} className="absolute text-white text-4xl top-1/2">
        TRAVIC
      </div>
    </section>
  );
};

export default Hero;
