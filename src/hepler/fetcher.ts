import config from "../config";
import { decode } from "./caesar_cipher";

const token = decode(config.encryptedToken);

export const fetchData =
  <TData, TVariables>(query: string, variables?: TVariables): (() => Promise<TData>) =>
  async () => {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0] || "Error..";
      throw new Error(message);
    }

    return json.data;
  };
