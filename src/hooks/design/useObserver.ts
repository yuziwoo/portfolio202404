import { useCallback, useEffect, useState } from 'react';

export const useObserver = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  /**
   * 스크롤에 반응하는 옵저버를 적용하여 0~1 스크롤된 비율를 전달합니다.
   */

  const [isObserving, setIsObserving] = useState(false);
  const [ratio, setRatio] = useState(0);
  const [viewHeight, setViewHeight] = useState(0);
  const [isDisappearing, setIsDisappearing] = useState(false);

  const getScrollRatio = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        setRatio(Math.floor(entry.intersectionRatio * 100) * 0.01);
        setViewHeight(entry.intersectionRect.height);

        if (entry.intersectionRect.y <= 0 && !isDisappearing) {
          setIsDisappearing(true);
          return;
        }

        if (entry.intersectionRect.y > 0 && isDisappearing) {
          setIsDisappearing(false);
        }
      });
    },
    [isDisappearing]
  );

  useEffect(() => {
    if (ref.current === null || isObserving) return;

    setIsObserving(true);
    const threshold = Array.from({ length: 100 }, (_, idx) => idx * 0.01);
    const observer = new IntersectionObserver(getScrollRatio, { threshold });
    observer.observe(ref.current);
  }, [ref, isObserving, getScrollRatio]);

  return { ratio, viewHeight, isDisappearing };
};
