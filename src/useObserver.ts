import { RefObject, useEffect, useState } from "react";

const useObserver = (userRef: RefObject<HTMLElement>, threshold: number) => {
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    if (!userRef.current) return;

    const observerCb = (entry: any) => {
      if (entry[0].isIntersecting) return setIsView(true);
      return setIsView(false);
    };

    const option = {
      root: null,
      rootMargin: "0px",
      threshold: threshold,
    };

    const observer = new IntersectionObserver(observerCb, option);

    observer.observe(userRef.current);

    return () => {
      observer.disconnect();
    };
  }, [userRef, threshold]);

  return { isView };
};

export default useObserver;
