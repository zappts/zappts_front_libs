import styled, { css } from 'styled-components';
import { Theme } from '../../styles/Theme';

interface CalendarWrapperProps {
  invisible: boolean;
}

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// I used this component customize some CSS rules of library
export const CalendarWrapper = styled.div<CalendarWrapperProps>`
  margin-top: 20px;

  ${props => props.invisible && 
    css`
      display: none;`
    }

  /* Customize background for a selected day */
  .Calendar__day.-selected,
  .Calendar__day.-selectedStart,
  .Calendar__day.-selectedEnd {
    background-color: ${Theme.colors.secondaryBlack};
  }

  /* Customize background between the range */
  .Calendar__day.-selectedBetween {
    color: ${Theme.colors.white};
    background-color: rgba(0, 0, 0, .2);
  }

  /* Customize the selected month or year selected */
  .Calendar__monthSelectorItem.-active .Calendar__monthSelectorItemText,
  .Calendar__yearSelectorItem.-active .Calendar__yearSelectorText {
    background-color: ${Theme.colors.secondaryBlack};
  }

  /* Fixes a height when the year or month container selector is open */
  .Calendar__monthSelectorAnimationWrapper,
  .Calendar__yearSelectorAnimationWrapper {
    height: 85%;
  }
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 18px;
  padding: 10px 20px;
  
  background-color: ${props => props.active ? Theme.colors.light : Theme.colors.gray};
  
  transition: all .35s ease-in-out;
  color: ${props => props.active ? Theme.colors.secondaryBlack : Theme.colors.lightGray};
  font-size: 14px;

  &:hover {
    background-color: ${props => props.active ? Theme.colors.gray : Theme.colors.light};
    color: ${props => props.active ? Theme.colors.lightGray : Theme.colors.secondaryBlack};
  }
`;

export const CalendarFooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;

  height: 2em;
`;

export const ButtonActionCalendar = styled.button`
  padding: 7px 27px;
  border-radius: 15px;
  border: none;

  & + button {
    margin-left: 20px;
  }

  &.applyButton {
    background-color: ${Theme.colors.tertiaryBlack};
    color: ${Theme.colors.white};
  }
`;

export const DayRangeLabel = styled.span`
  display: block;
  margin-bottom: 15px;
`;