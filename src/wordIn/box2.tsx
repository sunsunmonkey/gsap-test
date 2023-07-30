import "./box2.css";
import { useScrollAnimate } from "./useScrollAnimate";

export default function Box2() {
  const { ref } = useScrollAnimate(".box2");
  return (
    <div className="main" ref={ref}>
      <div className="box2">
        <div className="title">产品sss</div>
        <div className="paragraph">
          上述代码中，动画将在元素的顶部与视口中心对齐时触发，也就是当元素的顶部进入到视口中心的位置时开始播放动画。
          ScrollTrigger的start属性是一个非常有用的选项，它允许你根据具体的需求来定义动画触发的位置，使得你可以在滚动过程中实现更精确的动画效果
        </div>
        <h1 className="abbreviation">PM</h1>
      </div>
    </div>
  );
}
