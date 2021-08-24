interface Config {
  caesarOffset: number;
  encryptedToken: string;
  user: string;
  repository: string;
  perpage: number;
  orderBy: string | null;
  postCategoryId: string;
  labelsCount: number;
  blogName: string;
  description: string;
  sourceUrl: string;
}
const config: Config = {
  caesarOffset: 4,
  encryptedToken: "kltcRpokQ[xi\\tSjj}6TEt8GtG~{{oG9hz7]UO~P",
  user: "YeungKC",
  repository: "YeungKC.github.io",
  perpage: 10,
  orderBy: "CREATED_AT",
  postCategoryId: "DIC_kwDOF8LZSc4B-xAD",
  labelsCount: 64,
  blogName: "YeungKC's Blog",
  description: "One day we will die, Life is a journey.",
  sourceUrl: "https://github.com/YeungKC/YeungKC.github.io",
};
export default config;
