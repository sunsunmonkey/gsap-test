import gsap from "gsap";

export function gsapRotate(
  timeline: React.MutableRefObject<gsap.core.Timeline | null>,
  start: string,
  end: string,
  index: number,
  src: string
) {
  timeline.current = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main",
        start,
        end,
        markers: true,
        pin: true,
        onEnter: () => {
          // 滚动进入触发点时播放动画正向效果
          timeline.current?.play();
        },
        onLeaveBack: () => {
          // 滚动回滚时播放动画倒转效果
          timeline.current?.reverse();
        },
      },
    })
    .to(".container", {
      rotate: 180 * index,
    });
  if (index % 2 == 0) {
    timeline.current.to(".bottom", {
      backgroundImage: `url(${src})`,
    });
  } else {
    timeline.current.to(".top", {
      backgroundImage: `url(${src})`,
    });
  }
}
