import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    
    // Fade in animation for elements with animate-fade-in class
    gsap.utils.toArray('.animate-fade-in').forEach((element: any) => {
      gsap.fromTo(element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Add more animations as needed
  }
}; 