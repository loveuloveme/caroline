export const pageVariants = {
    initial: {
        opacity: 0,
    },
    in: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1,
        },
    },
    out: {
        opacity: 0,
    },
};

export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
};