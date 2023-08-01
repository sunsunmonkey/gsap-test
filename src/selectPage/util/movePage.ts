import gsap from "gsap";

import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

export function movePage(id: string) {
  gsap.registerPlugin(ScrollToPlugin);
  gsap.to(window, {
    scrollTo: id,
  });
}
