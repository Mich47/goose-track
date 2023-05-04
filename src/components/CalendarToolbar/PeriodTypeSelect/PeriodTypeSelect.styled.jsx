import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 76px;
  height: 34px;

  background: var(--button-period-type);

  font-family: var(--primary-font);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29px;

  color: var(--color-button-period-type);
&:hover,
:focus {
  background-color: var(--active-button-period-type);
}

  &.active {
    background: var(--active-button-period-type);
    color: var(--accent-text-color);
  }
  @media (min-width: 768px) {
    width: 82px;

    font-size: 16px;
    line-height: 1.12;
  }
`;

export const StyledLinkMonth = styled(StyledLink)`
  padding: 8px 16px;

  border: none;
  border-right: var(--border-calendar-period-type);
  border-radius: 8px 0px 0px 8px;
`;

export const LinkActiveMonth = styled(StyledLinkMonth)`
  background: var(--active-button-period-type);
  color: var(--accent-text-color);
`;

export const StyledLinkDay = styled(StyledLink)`
  padding: 8px 25px;
  border: none;
  border-radius: 0px 8px 8px 0px;
  @media (min-width: 768px) {
    padding: 8px 26px;
  }
`;

export const LinkActiveDay = styled(StyledLinkDay)`
  background: var(--active-button-period-type);
  color: var(--accent-text-color);
`;
