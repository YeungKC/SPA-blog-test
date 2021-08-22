import { Link } from "react-router-dom";
import { Box, FlexBox } from "react-styled-flex";
import styled from "styled-components";
import useInfo from "../api/info";

export default function UserInfo() {
  const { isLoading, data } = useInfo();
  const info = data?.data;

  if (isLoading || !info) {
    return <div></div>;
  }

  return (
    <FlexBox column alignItems="center" as="header">
      <Name to="/">{info.name}'s Blog</Name>
      <Description>{info.description}</Description>
      <FlexBox marginTop="8px">
        <a href={info.url}>GitHub</a>
        {info.websiteUrl && [<Box width="8px" />, <a href={info.websiteUrl}>Home</a>]}
      </FlexBox>
      <Divider />
    </FlexBox>
  );
}

const Name = styled(Link)`
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 8px;
`;

const Divider = styled.div`
  width: 50%;
  height: 1px;
  background-color: #eee;
  margin: 32px 0;
`;
