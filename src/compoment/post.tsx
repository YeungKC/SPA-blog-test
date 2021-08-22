import "github-markdown-css";
import { useParams } from "react-router-dom";
import { Box, FlexBox } from "react-styled-flex";
import styled from "styled-components";
import useDiscussion from "../api/discussion";
import NotFound from "./not_found";
import { PostInfo } from "./post_info";

export default function Post() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, isError } = useDiscussion(id);

  if (isLoading) {
    return <div></div>;
  }

  if (isError) {
    return <NotFound />;
  }

  const discussion = data?.repository?.discussion;
  const labels = discussion?.labels?.nodes ?? [];

  return (
    <FlexBox column>
      <Title>{discussion?.title}</Title>
      <Box margin="8px 0 48px 0">
        <PostInfo time={discussion!.updatedAt} labels={labels} />
      </Box>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html: discussion?.bodyHTML }} />
    </FlexBox>
  );
}

const Title = styled.div`
  font-size: 24px;
`;
