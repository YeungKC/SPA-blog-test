import config from "../config";
import { useDiscussionCategoriesQuery } from "./types-and-hooks";

export default async function printDiscussionCategories(count = 10) {
  const categories = await useDiscussionCategoriesQuery.fetcher({ owner: config.user, name: config.repository, count: count })();
  console.log(categories);
}
