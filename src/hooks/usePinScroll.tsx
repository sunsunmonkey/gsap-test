import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export function usePinScroll(triggerId: string) {
  const targetRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      //时间线
      tl.current = gsap.timeline();
      //注册ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      //当卷轴触发开始位置（scroller-start）
      //触碰到物件触发开始位置（start）时就会执行设定动画，

      ScrollTrigger.create({
        //物件開始位置>卷軸開始位置
        trigger: triggerId,
        markers: true,
        start: "top top", // (物件開始位置, 卷軸開始位置)
        end: "+=50%",
        scrub:true,
        pin: true,
        animation: tl.current.to(".box", { scale: 1.2 }),
        // .from(".paragraph", { y: "20vh" })
        // .from(".abbreviation", { y: "10vh", duration: 1, scale: 2 }),

        onEnter: () => {
          console.log("open");
        },
        onLeave: () => {
          console.log("leave");
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [triggerId, targetRef]);

  return { ref: targetRef };
}
