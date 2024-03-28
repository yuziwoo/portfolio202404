import { useCallback, useEffect, useState } from 'react';

export const useObserver = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  /**
   * 스크롤에 반응하는 옵저버를 적용하여 0~1 스크롤된 비율를 전달합니다.
   *
   * @return
   * ratio : 화면에 요소가 보여지고 있는 height 비율 (0 ~ 1)
   * viewHeight : 화면에 요소가 보여지고 있는 height (px)
   * isDisappearing : 요소의 top이 0보다 작아서 화면에서 사라지고 있는 경우 true를 반환 
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
