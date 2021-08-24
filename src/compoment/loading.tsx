import { FC } from "react";
import { FlexBox } from "react-styled-flex";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
   0% { transform: rotate(0deg); }
   100% { transform: rotate(360deg); }
`;

const LoadingCircularProgress = styled.div`
  border: 2px solid #eee;
  border-top: 2px solid #333;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite;
`;

export const Loading: FC = () => {
  return (
    <Wrapper justifyContent="center" alignItems="center" gap="16px">
      <LoadingCircularProgress />
      Loading...
    </Wrapper>
  );
};


const Wrapper = styled(FlexBox)`
margin: 56px 0;
font-size: 16px;
`;