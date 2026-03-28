"use client";

import { useEffect, useRef } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

type Props = {
    children: React.ReactNode;
    className?: string;
    variant?: RevealVariant;
    delay?: number;
    threshold?: number;
    as?: keyof React.JSX.IntrinsicElements;
};

const variantClass: Record<RevealVariant, string> = {
    up: "reveal",
    left: "reveal-left reveal",
    right: "reveal-right reveal",
    scale: "reveal-scale reveal",
};

export function RevealSection({
    children,
    className = "",
    variant = "up",
    delay = 0,
    threshold = 0.12,
    as: Tag = "div",
}: Props) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        if (delay) el.style.animationDelay = `${delay}ms`;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("revealed");
                    observer.disconnect();
                }
            },
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [delay, threshold]);

    const Comp = Tag as React.ElementType;

    return (
        <Comp
            ref={ref}
            className={`${variantClass[variant]} ${className}`}
        >
            {children}
        </Comp>
    );
}
