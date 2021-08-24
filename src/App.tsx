import React from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import NotFound from "./compoment/not_found";
import Post from "./compoment/post";
import styled, { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { FlexBox } from "react-styled-flex";
import UserInfo from "./compoment/info";
import Posts from "./compoment/posts";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <FlexBox justifyContent="center" height="100%">
        <HashRouter>
          <FlexBox column width="100%" marginTop="32px" maxWidth="800px" padding="0 20px" sizing="border-box">
            <UserInfo />
            <Switch>
              <Route exact path="/" children={<Posts />} />
              <Route path="/post/:id(\d+)" children={<Post />} />
              <Route path="*" children={<NotFound />} />
            </Switch>
            <Footer />
          </FlexBox>
        </HashRouter>
      </FlexBox>
    </QueryClientProvider>
  );
}

const Footer = styled(FlexBox)`
  flex: 1;
  color: #999;
  justify-content: center;
  align-items: flex-end;
  min-height: 128px;
`;

const GlobalStyle = createGlobalStyle`
html, body {
  background-color: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  font-family: apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, PingFang SC, Microsoft YaHei, sans-serif;
  font-size: 14px;
  line-height: 1;
  color: #333;
  position: relative;
  word-wrap: break-word;
  overflow: auto;
}
body,
h1,
h2,
h3,
h4,
ul,
li,
p {
  margin: 0;
  padding: 0;
  font-weight: normal;
}
button {
  appearance: none;
  cursor: pointer;
  outline: none;
  border: none;
}
a {
  color: inherit;
  cursor: pointer;
}
a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
#root {
  height: 100%;
}
`;
