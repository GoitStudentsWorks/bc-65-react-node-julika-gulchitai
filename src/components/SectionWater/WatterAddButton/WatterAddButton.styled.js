import styled from 'styled-components';

export const StyledWatterAddBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  color: var(--accentPrimari);
  line-height: 1.25;
  border: none;
  background-color: transparent;

  font-size: 16px;
  font-weight: 500;

  & svg {
    width: 16px;
    height: 16px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
