import React, { useEffect, useRef, useState, ReactNode } from 'react';

interface LazyLoaderProps {
    children: ReactNode;
    threshold?: number;
    className?: string; // To add min-height or structural styles
}

const LazyLoader: React.FC<LazyLoaderProps> = ({
    children,
    threshold = 0.1,
    className = "min-h-[50vh]" // Default min-height to prevent complete collapse
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If IntersectionObserver is not supported, just render immediately
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Once visible, we don't need to observe anymore
                    if (ref.current) {
                        observer.unobserve(ref.current);
                    }
                }
            },
            {
                root: null, // viewport
                rootMargin: '100px', // Preload slightly before it enters content
                threshold,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [threshold]);

    return (
        <div ref={ref} className={className}>
            {isVisible ? children : null}
        </div>
    );
};

export default LazyLoader;
