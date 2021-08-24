import { FC } from "react";
import { useLocation } from "react-router-dom";
import { FlexBox } from "react-styled-flex";

export const NotFound: FC = () => {
  const location = useLocation();
  return (
    <FlexBox justifyContent="center" alignItems="center" gap="16px">
      No found for <code>{location.pathname}</code>
    </FlexBox>
  );
};
