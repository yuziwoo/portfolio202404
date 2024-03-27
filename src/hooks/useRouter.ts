import { NavigateOptions, To, useNavigate } from 'react-router-dom';

export const useRouter = () => {
  /**
   * Router 통합 관리 훅
   * useNavigate의 preventScrollReset이 정상적으로 작동하지 않는 경우 방지용
   */

  const navigater = useNavigate();

  const navigate = (to: To | number, options?: NavigateOptions | undefined) => {
    if (typeof to === 'number') {
      navigater(to);
    } else {
      if (options) {
        navigater(to, { ...options, preventScrollReset: true });
        return;
      }
      navigater(to, { preventScrollReset: true });
      window.scrollTo({ left: 0, top: 0 });
    }
  };

  return { navigate };
};
