import { Link } from "react-router-dom";
import { Box, FlexBox } from "react-styled-flex";
import styled from "styled-components";
import { PostItemFragment } from "../api/types-and-hooks";
import { Label, Time } from "./post_info";

export default function PostItem({ data }: { data: PostItemFragment }) {
  return (
    <Wrapper to={`/post/${data?.number}`}>
      <FlexBox column key={data!.number} padding="20px 10px">
        <Title>{data?.title}</Title>
        <FlexBox marginTop="12px" justifyContent="space-between">
          <Box>
            {data?.labels?.nodes?.map((label) => (
              <Label data={label!} />
            ))}
          </Box>
          <Time time={data!.createdAt} />
        </FlexBox>
      </FlexBox>
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  width="100%";
  &:hover {
    background-color: #f5f5f5;
    border-radius: 8px;
    text-decoration: none;
  }
  color: inherit;
`;

const Title = styled.div`
  font-size: 17px;
`;
