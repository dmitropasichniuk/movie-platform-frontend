let navigateFunction: ((path: string) => void) | null = null;

export const setNavigate = (navFn: (path: string) => void) => {
  navigateFunction = navFn;
};

export const globalNavigate = (path: string) => {
  if (navigateFunction) {
    navigateFunction(path);
  } else {
    console.warn("Navigate function not set!");
  }
};
