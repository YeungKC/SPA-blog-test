import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./compoment/not_found";
import Post from "./compoment/post";
import Home from "./compoment/home";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { FlexBox } from "react-styled-flex";
import UserInfo from "./compoment/info";
import Footer from "./compoment/footer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <FlexBox justifyContent="center" height="100%">
        <Router>
          <FlexBox column width="100%" marginTop="32px" maxWidth="700px" padding="0 20px">
            <UserInfo />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/post/:id(\d+)">
                <Post />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
            <Footer />
          </FlexBox>
        </Router>
      </FlexBox>
    </QueryClientProvider>
  );
}

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
