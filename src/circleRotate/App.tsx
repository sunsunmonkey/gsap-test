import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./index.css";
import { useLayoutEffect, useRef } from "react";
import src from "../assets/img/testb.jpg";
import src1 from "../assets/img/testa.jpg";
import { gsapRotate } from "./util/gsapRotate";
function App() {
  const tl = useRef<gsap.core.Timeline | null>(null);
  const t2 = useRef<gsap.core.Timeline | null>(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsapRotate(tl, 1, 1000, 1, src);
      gsapRotate(t2, 1000,2000, 2, src1);
      // tl.current = gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".main",
      //       start: "top top",
      //       end: "20% top ",
      //       markers: true,
      //       pin: true,
      //       onEnter: () => {
      //         // 滚动进入触发点时播放动画正向效果
      //         tl.current?.play();
      //       },
      //       onLeaveBack: () => {
      //         // 滚动回滚时播放动画倒转效果
      //         tl.current?.reverse();
      //       },
      //     },
      //   })
      //   .to(".container", {
      //     rotate: 180,
      //   })
      //   .to(".top", {
      //     backgroundImage: `url(${src})`,
      //   });

      // t2.current = gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".main",
      //       start: "1% top",
      //       end: "25% top ",
      //       markers: true,
      //       pin: true,
      //       onEnter: () => {
      //         // 滚动进入触发点时播放动画正向效果
      //         t2.current?.play();
      //       },
      //       onLeaveBack: () => {
      //         // 滚动回滚时播放动画倒转效果
      //         t2.current?.reverse();
      //       },
      //     },
      //   })
      //   .to(".container", {
      //     rotate: 360,
      //   })
      //   .to(".bottom", {
      //     backgroundImage: `url(${src1})`,
      //   });
    });

    return () => ctx.revert();
  });

  return (
    <>
      <div className="cover"></div>
      <div className="main">
        <div className="container">
          <div className="top "></div>
          <div className="bottom "></div>
        </div>
      </div>
      <div className="page">111</div>
      <div className="cover">111</div>{" "}
    </>
  );
}

export default App;
