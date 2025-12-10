import { useState, useEffect, useRef, useCallback } from 'react';

interface MotionValues {
    x: number;
    y: number;
}

export const useParallaxMotion = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const motion = useRef<MotionValues>({ x: 0, y: 0 });

    const latestMousePosition = useRef({ clientX: 0, clientY: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.1, //10% елемента у viewport
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);


    const animate = useCallback(() => {
        if (!containerRef.current || !isVisible) {
            return;
        }

        const container = containerRef.current;
        const rect = container.getBoundingClientRect();

        const mouseX = latestMousePosition.current.clientX;
        const mouseY = latestMousePosition.current.clientY;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (mouseX - centerX) / (rect.width / 2);
        const deltaY = (mouseY - centerY) / (rect.height / 2);

        const parallaxStrength = 20; // Максимальне зміщення в пікселях

        const targetX = deltaX * parallaxStrength * -1;
        const targetY = deltaY * parallaxStrength * -1;

        const smoothing = 0.1;
        motion.current.x += (targetX - motion.current.x) * smoothing;
        motion.current.y += (targetY - motion.current.y) * smoothing;

        requestAnimationFrame(animate);
    }, [isVisible]);

    useEffect(() => {
        let animationFrameId = 0;

        const handleMouseMove = (event: MouseEvent) => {
            latestMousePosition.current = {
                clientX: event.clientX,
                clientY: event.clientY,
            };

            if (!animationFrameId) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        if (isVisible) {
            document.addEventListener('mousemove', handleMouseMove);
            animationFrameId = requestAnimationFrame(animate);
        } else {
            motion.current = { x: 0, y: 0 };
            cancelAnimationFrame(animationFrameId);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isVisible, animate]);

    return { containerRef, motion: motion.current, isVisible };
};