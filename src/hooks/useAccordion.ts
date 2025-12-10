import { useState, useCallback } from 'react';

export const useAccordion = () => {
    const [openIds, setOpenIds] = useState<number[]>([]);

    const toggle = useCallback((id: number) => {
        setOpenIds((prevIds) => {
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId) => prevId !== id);
            }
            return [...prevIds, id];
        });
    }, []);

    const isOpen = useCallback((id: number) => openIds.includes(id), [openIds]);

    return { openIds, toggle, isOpen };
};