import useIntersectionObserver from "@react-hook/intersection-observer";
import { useEffect, useMemo, useRef } from "react";
import { FlexBox } from "react-styled-flex";
import useDiscussions from "../api/discussions";
import PostItem from "./post_item";

export default function Posts() {
  const { data, isLoading, hasNextPage, fetchNextPage } = useDiscussions();
  const discussions = useMemo(
    () => data?.pages.map((item) => item.repository?.discussions.nodes).reduce((previousValue, currentValue = []) => [...(previousValue ?? []), ...(currentValue ?? [])], []) ?? [],
    // eslint-disable-next-line
    [data?.pageParams]
  );
  const ref = useRef(null);
  const isBottomVisible = useIntersectionObserver(ref);

  useEffect(() => {
    if (isLoading) return;
    if (!hasNextPage) return;
    if (!isBottomVisible) return;
    fetchNextPage();
    // eslint-disable-next-line
  }, [isLoading, hasNextPage, isBottomVisible, data?.pageParams]);

  return (
    <FlexBox column width="100%">
      {discussions.map((node, index) => (
        <PostItem key={node?.number} data={node!} />
      ))}
      <div ref={ref} />
    </FlexBox>
  );
}
