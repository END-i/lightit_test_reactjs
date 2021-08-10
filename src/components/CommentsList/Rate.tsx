import { useState } from 'react';
import styled from 'styled-components';

const MAX_RATE = 5;

const Star = styled.div<{ marked: boolean; selection: boolean; disabled: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'inherit' : 'pointer')};
  color: ${({ selection, marked }) => (selection ? '#ce6203' : marked ? '#ff9933' : '#ddd')};
  &::after {
    font-size: 20px;
    content: '\u2605';
  }
`;
const CountRate = styled.span<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
const Wrapper = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  margin: 10px 0;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  & > span {
    margin-left: 10px;
  }
`;

interface Props {
  changeRate: (rate: number) => void;
  rate: number;
  disabled: boolean;
}
const Rate = ({ changeRate, rate, disabled }: Props) => {
  const [selection, setSelection] = useState(0);

  return (
    <>
      <Wrapper disabled={disabled}>
        {Array.from(Array(MAX_RATE).keys()).map((idx) => {
          return (
            <Star
              key={idx}
              marked={rate > idx}
              selection={selection > idx}
              onClick={() => changeRate(idx + 1)}
              onMouseOver={() => (disabled ? null : setSelection(idx + 1))}
              onMouseOut={() => setSelection(0)}
              disabled={disabled}
            />
          );
        })}
        <CountRate show={Boolean(rate)}>{`${rate} stars`}</CountRate>
      </Wrapper>
    </>
  );
};

export default Rate;
