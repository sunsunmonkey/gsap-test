import { useEffect } from "react";
import "./index.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".wrapper",
        start: "top top", // 触发动画的位置
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true,
        animation: gsap.to(".ball", {
          // duration: 2,
          scale: 1.8,
          perspective: 120,
          opacity: 0.2,
        }),
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <div className="wrapper">
        <div className="ball">
          <div className="circle-line1"></div>
        </div>
      </div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div> <div className="h2">11</div>
      <div className="h2">11</div>
    </>
  );
}

export default App;
