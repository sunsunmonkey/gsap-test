import { useLayoutEffect } from "react";
import gsap from 'gsap'

export function useGsap(fn:gsap.ContextFunc,scope?: gsap.Context ,array?:React.DependencyList | undefined) {
  useLayoutEffect(() => {
    const context = gsap.context(fn,scope);
    return () => context.revert();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, array);
}
