import { useEffect, useState } from 'react';

export const useScrollTrigger = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
  /**
   * 요소가 스크롤 화면의 일정 영역에 도달하면 isActive가 true로 바뀝니다.
   */
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;

    const handleScrollTrigger = () => {
      const top = ref.current?.getBoundingClientRect().top
        ? ref.current?.getBoundingClientRect().top
        : window.innerHeight;
      if (top < window.innerHeight * 0.7) {
        setIsActive(true);
        window.removeEventListener('scroll', handleScrollTrigger);
      }
    };

    window.addEventListener('scroll', handleScrollTrigger);

    return () => {
      window.removeEventListener('scroll', handleScrollTrigger);
    };
  }, [ref]);

  return { isActive };
};
