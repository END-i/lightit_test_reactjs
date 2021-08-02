import { useState } from 'react';
import styled from 'styled-components';

const MAX_RATE = 5;

const Star = styled.div<{ marked: boolean; selection: boolean }>`
  cursor: pointer;
  color: ${({ selection, marked }) => (selection ? '#ce6203' : marked ? '#ff9933' : '#ddd')};
  &::after {
    font-size: 20px;
    content: '\u2605';
  }
`;
const CountRate = styled.span<{ show: boolean }>`
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  & > span {
    margin-left: 10px;
  }
`;

interface Props {
  changeRate: (rate: number) => void;
  rating: number;
}
const Rate = ({ changeRate, rating }: Props) => {
  const [selection, setSelection] = useState(0);

  return (
    <>
      <Wrapper>
        {Array.from(Array(MAX_RATE).keys()).map((idx) => {
          return (
            <Star
              key={idx}
              marked={rating > idx}
              selection={selection > idx}
              onClick={() => changeRate(idx + 1)}
              onMouseOver={() => setSelection(idx + 1)}
              onMouseOut={() => setSelection(0)}
            />
          );
        })}
        <CountRate show={Boolean(rating)}>{`${rating} stars`}</CountRate>
      </Wrapper>
    </>
  );
};

export default Rate;
