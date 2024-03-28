import { useEffect, useState } from 'react';

export const useScrollRatio = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  /**
   * 요소가 화면에 보이기 시작한 순간부터 화면에서 사라지는 순간까지를 ratio 값으로 반환합니다. (0~ 100)
   */

  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!(element instanceof HTMLDivElement) || element === null) return;

    const getPosBottom = () => {
      const windowHeight = window.innerHeight;
      const top = element.getBoundingClientRect().top;
      const bottom = element?.getBoundingClientRect().bottom;
      if (top > windowHeight || bottom < 0) return;

      const range = element.offsetHeight + window.innerHeight;
      const ratio = Math.floor(((range - bottom) / range) * 100);

      setRatio(ratio);
    };

    window.addEventListener('scroll', getPosBottom);

    return () => {
      window.removeEventListener('scroll', getPosBottom);
    };
  }, [ref]);

  return { ratio };
};
