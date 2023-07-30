import gsap from "gsap";

 export function movePage(id: string) {
    gsap.to(window, {
      scrollTo: id,
    });
  }