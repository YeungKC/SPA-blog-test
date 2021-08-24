import { FC, useMemo } from "react";
import useDiscussions from "../api/discussions";
import InfiniteScroll from "./infinite_scroll";
import { PostItem } from "./post_item";
import { Loading } from "./loading";

export const Posts: FC = ()=> {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useDiscussions();
  const discussions = useMemo(
    () => data?.pages.map((item) => item.repository?.discussions.nodes).reduce((previousValue, currentValue = []) => [...(previousValue ?? []), ...(currentValue ?? [])], []) ?? [],
    // eslint-disable-next-line
    [data?.pageParams]
  );

  return (
    <InfiniteScroll disabled={isLoading || isFetchingNextPage || !hasNextPage} onIntersect={fetchNextPage}>
      {discussions.map((discussion) => (
        <PostItem key={discussion?.number} data={discussion!} />
      ))}
      {(isLoading || isFetchingNextPage) && <Loading />}
    </InfiniteScroll>
  );
}
