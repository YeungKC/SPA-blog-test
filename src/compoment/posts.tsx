import {  useMemo,  } from "react";
import { FlexBox } from "react-styled-flex";
import styled from "styled-components";
import useDiscussions from "../api/discussions";
import InfiniteScroll from "./infinite_scroll";
import PostItem from "./post_item";

export default function Posts() {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useDiscussions();
  const discussions = useMemo(
    () => data?.pages.map((item) => item.repository?.discussions.nodes).reduce((previousValue, currentValue = []) => [...(previousValue ?? []), ...(currentValue ?? [])], []) ?? [],
    // eslint-disable-next-line
    [data?.pageParams]
  );

  return (
    <InfiniteScroll disabled={isLoading || isFetchingNextPage || !hasNextPage } onIntersect={fetchNextPage}>
      <Wrapper column width="100%">
        {discussions.map((node, index) => (
          <PostItem key={node?.number} data={node!} />
        ))}
      </Wrapper>
    </InfiniteScroll>
  );
}

const Wrapper = styled(FlexBox)`
  transition: ".25s all";
`;
