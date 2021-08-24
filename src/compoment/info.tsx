import { Link } from "react-router-dom";
import { FlexBox } from "react-styled-flex";
import styled from "styled-components";
import config from "../config";

export default function UserInfo() {
  return (
    <FlexBox column alignItems="center" as="header">
      <Name to="/">{config.blogName}</Name>
      <Description>{config.description ?? ""}</Description>,
      <FlexBox marginTop="8px" gap="8px">
        <a href={config.sourceUrl}>Github</a>
      </FlexBox>
      <Divider />,
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
