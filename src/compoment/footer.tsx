import { FlexBox } from "react-styled-flex";
import styled from "styled-components";
import config from "../config";

export default function Footer() {
  return (
    <Wrapper as="footer" justifyContent="center" alignItems="flex-end" padding="128px 0 24px 0">
      Copyright © 2021 {config.user}
    </Wrapper>
  );
}

const Wrapper = styled(FlexBox)`
  flex: 1;
  color: #999;
`;
