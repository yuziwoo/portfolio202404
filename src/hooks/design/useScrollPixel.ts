import { useEffect, useState } from 'react';

export const useScrollPixel = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  /**
   * 요소가 화면에서 사라지는 순간부터 몇 pixel이 스크롤 되었는지 반환합니다.
   */

  const [pixel, setPixel] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!(element instanceof HTMLDivElement) || element === null) return;

    const getScrollPixel = () => {
      const top = element.getBoundingClientRect().top;
      if (top > 0) return;

      setPixel(-top);
    };

    window.addEventListener('scroll', getScrollPixel);

    return () => {
      window.removeEventListener('scroll', getScrollPixel);
    };
  }, [ref]);

  return { pixel };
};
