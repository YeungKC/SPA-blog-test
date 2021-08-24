import { FC } from "react";
import { Link } from "react-router-dom";
import { FlexBox } from "react-styled-flex";
import styled from "styled-components";
import { PostItemFragment } from "../api/types-and-hooks";
import { Label, Time } from "./post_info";

export const PostItem: FC<{ data: PostItemFragment }> = ({ data }) => {
  return (
    <Wrapper>
      <Link to={`/post/${data?.number}`}>
        <FlexBox column key={data!.number} padding="20px 10px">
          <Title>{data?.title}</Title>
          <FlexBox marginTop="12px" justifyContent="space-between">
            <FlexBox gap="4px 8px">
              {data?.labels?.nodes?.map((label) => (
                <Label data={label!} />
              ))}
            </FlexBox>
            <Time time={data!.createdAt} />
          </FlexBox>
        </FlexBox>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &:hover {
    background-color: #f5f5f5;
    border-radius: 8px;
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
`;

const Title = styled.div`
  font-size: 17px;
`;
