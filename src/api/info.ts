import config from "../config";
import { useUserQuery } from "./types-and-hooks";

const cacheTime = 1000 * 60 * 60 * 24;

export default function useInfo() {
  return useUserQuery(
    { user: config.user },
    {
      staleTime: cacheTime,
      cacheTime,
    }
  );
}
