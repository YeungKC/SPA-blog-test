import config from "../config";
import { useDiscussionQuery } from "./types-and-hooks";

const cacheTime = 1000 * 60 * 60;

export default function useDiscussion(number: string) {
  return useDiscussionQuery(
    {
      owner: config.user,
      name: config.repository,
      number: Number(number),
      labelsCount: config.labelsCount,
    },
    {
      staleTime: cacheTime,
      cacheTime,
    }
  );
}
