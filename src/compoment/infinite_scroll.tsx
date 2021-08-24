import useIntersectionObserver from "@react-hook/intersection-observer";
import { useEffect, useRef } from "react";
import { FlexBox } from "react-styled-flex";

export default function InfiniteScroll({ children, disabled, onIntersect }: { children: React.ReactNode; disabled: boolean; onIntersect: () => void }) {
  const ref = useRef(null);
  const isBottomVisible = useIntersectionObserver(ref, { initialIsIntersecting : true});

  useEffect(() => {
    if (disabled) return;
    if (!isBottomVisible) return;
    onIntersect();
  }, [disabled, isBottomVisible, onIntersect]);

  return (
    <FlexBox column>
      {children}
      <div ref={ref} />
    </FlexBox>
  );
}

