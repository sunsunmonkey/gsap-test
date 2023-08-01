import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

interface IProps {
  content: string;
  color: string;
  id: string;
  index: number;
  setSelect: React.Dispatch<React.SetStateAction<number>>;
}

export default function Page({ content, color, id, index, setSelect }: IProps) {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(".text", {
        x: 100,

        scrollTrigger: {
          trigger: ".wrapper",
          start: "top top",
          end: "bottom top ",
          markers: true,
          scrub: true,
          onEnter: () => {
            setSelect(index);
            console.log("enter");
          },
          onEnterBack: () => {
            setSelect(index);
            console.log("enterBack");
          },
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [index, setSelect, targetRef]);

  return (
    <div className="main" ref={targetRef}>
      <div className="wrapper" style={{ backgroundColor: color }}>
        <div className="content" id={id}>
          <div className="text">{content}</div>
        </div>
      </div>
    </div>
  );
}
