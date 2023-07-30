// import { useLayoutEffect } from "react";

// useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const ctx = gsap.context(() => {
//       ScrollTrigger.create({
//         trigger: ".box",
//         //第一个值是触发器，第二个值是视口
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         animation: gsap.from("h1", {
//           y: "100vh",
//         }),
//         onEnter: () => {
//           console.log("enter");
//         },
//         onLeave: () => {
//           console.log("leave");
//         },
//       });
//     });

//     return () => ctx.revert();
//   });