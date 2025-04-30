export const setupAnimations = (setAnimationStage) => {
    // Hide all stages initially
    gsap.set(['.stage-1', '.stage-2', '.stage-3', '.stage-4', '.stage-5'], { autoAlpha: 0 });
  
    const master = gsap.timeline();
  
    // Stage 1
    master.set('.stage-1', { autoAlpha: 1 })
      .fromTo('.stage-1 img',
        { scale: 0.8, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 2, ease: 'power2.out' }
      )
      .add(() => setAnimationStage(1))
      .to('.stage-1', { autoAlpha: 0, duration: 1 }, "+=2");
  
    // Stage 2
    master.set('.stage-2', { autoAlpha: 1 })
      .fromTo('.stage-2',
        { scale: 0.9, autoAlpha: 0 },
        { scale: 1, autoAlpha: 1, duration: 2, ease: 'power2.out' }
      )
      .add(() => setAnimationStage(2))
      .to('.stage-2', { autoAlpha: 0, duration: 1 }, "+=2");
  
    // Stage 3
    master.set('.stage-3', { autoAlpha: 1 })
      .fromTo('.stage-3',
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 2, ease: 'power2.out' }
      )
      .add(() => setAnimationStage(3))
      .to('.stage-3', { autoAlpha: 0, duration: 1 }, "+=2");
  
    // Stage 4
    master.set('.stage-4', { autoAlpha: 1 })
      .fromTo('.stage-4',
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 2, ease: 'power2.out' }
      )
      .add(() => setAnimationStage(4))
      .to('.stage-4', { autoAlpha: 0, duration: 1 }, "+=2");
  
    // Stage 5
    master.set('.stage-5', { autoAlpha: 1 })
      .fromTo('.stage-5',
        { y: 50, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 2, ease: 'power2.out' }
      )
      .add(() => setAnimationStage(5));
      
    // Cleanup function
    return () => {
      master.kill();
      gsap.getAll().forEach(trigger => trigger.kill());
    };
  };
  