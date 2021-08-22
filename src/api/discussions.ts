import { useInfiniteQuery } from "react-query";
import config from "../config";
import { DiscussionOrderField, OrderDirection, useDiscussionsQuery } from "./types-and-hooks";

const cacheTime = 1000 * 60 * 60;

export default function useDiscussions() {
  return useInfiniteQuery(
    "posts",
    (params) => {
      return useDiscussionsQuery.fetcher({
        owner: config.user,
        name: config.repository,
        categoryId: config.postCategoryId,
        first: config.perpage,
        after: params.pageParam,
        orderBy: {
          field: config.orderBy === "UPDATED_AT" ? DiscussionOrderField.UpdatedAt : DiscussionOrderField.CreatedAt,
          direction: OrderDirection.Desc,
        },
        labelsCount: config.labelsCount,
      })();
    },
    {
      staleTime: cacheTime,
      cacheTime,
      getNextPageParam: (lastPage) => {
        const pageInfo = lastPage.repository?.discussions.pageInfo;
        return pageInfo?.hasNextPage && pageInfo?.endCursor;
      },
    }
  );
}
