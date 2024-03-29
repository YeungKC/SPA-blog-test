import { FC } from "react";
import { FlexBox } from "react-styled-flex";
import styled from "styled-components";
import { LabelItemFragment, Maybe } from "../api/types-and-hooks";
import config from "../config";
import formatTime from "../hepler/time";

const PostInfo: FC<{ time: string; labels: Maybe<LabelItemFragment>[] }> = ({ time, labels }) => {
  return (
    <Wrapper wrap gap="4px 8px" alignItems="stretch">
      {formatTime(time)}
      {labels.length && <Divider />}
      {[labels.map((label) => <Label data={label!} />)]}
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  color: #999;
`;

const Divider = styled.div`
  margin: 2px 0;
  width: 1px;
  background-color: #999;
`;

function Label({ data }: { data: LabelItemFragment }) {
  return (
    <LabelWrapper href={`https://github.com/${config.user}/${config.repository}/discussions?discussions_q=label%3A${data.name}`} color={data.color}>
      #{data.name}
    </LabelWrapper>
  );
}

function Time({ time }: { time: string }) {
  return <Wrapper>{formatTime(time)}</Wrapper>;
}

const LabelWrapper = styled.a`
  padding: 1px 6px 2px 6px;
  background-color: ${({ color }) => `#${color}4D`};
  border-radius: 4px;
  font-size: 13px;
  color: #666;
  &:hover {
    text-decoration: none};
  }
`;

export { PostInfo, Label, Time };
