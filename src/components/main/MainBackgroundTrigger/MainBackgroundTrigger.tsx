import { elementClassName } from '../../../constants/elementClassName';

const MainBackgroundTrigger = ({ style }: { style?: React.CSSProperties }) => {
  /**
   * MainBackground의 배경이 바뀌는 트리거 포인트인 엘리먼트입니다.
   * className의 순서대로 index값에 따라 바뀌기 때문에 유연성이 부족하여 수정 예정입니다.
   */

  return <div style={style} className={elementClassName.BACKGROUND_TRIGGER}></div>;
};

export default MainBackgroundTrigger;
