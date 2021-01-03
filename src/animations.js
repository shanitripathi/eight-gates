export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.25,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export const bounce = {
  show: {
    scale: [1, 0.3],
    transition: {
      scale: {
        yoyo: Infinity,
        duration: 1,
      },
    },
  },
};
