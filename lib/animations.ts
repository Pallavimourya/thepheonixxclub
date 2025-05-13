import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
  // Hero section animations
  gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    delay: 0.5
  });

  gsap.from('.hero-buttons', {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: 'power3.out',
    delay: 0.8
  });

  // Features section animations
  gsap.utils.toArray<HTMLElement>('.feature-card').forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top bottom-=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.2,
      ease: 'power3.out'
    });
  });

  // Gallery section animations
  gsap.utils.toArray<HTMLElement>('.gallery-item').forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top bottom-=50',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.9,
      duration: 0.6,
      delay: i * 0.1,
      ease: 'power2.out'
    });
  });

  // Membership section animations
  gsap.from('.membership-card', {
    scrollTrigger: {
      trigger: '.membership-card',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out'
  });

  // Community section animations
  gsap.from('.community-stats', {
    scrollTrigger: {
      trigger: '.community-stats',
      start: 'top bottom-=100',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });

  // Footer animations
  gsap.from('.footer-content', {
    scrollTrigger: {
      trigger: '.footer-content',
      start: 'top bottom-=50',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
  });
}; 