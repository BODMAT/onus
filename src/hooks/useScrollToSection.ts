import { useCallback } from "react";

export const useScrollToSection = (offset: number = 0) => {
    const scrollTo = useCallback((sectionId: string) => {
        const targetElement = document.getElementById(sectionId);

        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        } else {
            console.warn(`Element with ID '${sectionId}' not found.`);
        }
    }, [offset]);

    return scrollTo;
};