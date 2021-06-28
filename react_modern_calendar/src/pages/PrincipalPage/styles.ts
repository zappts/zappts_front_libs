import styled from 'styled-components';
import { Theme } from '../../styles/Theme';

export const Container = styled.div`
  position: relative;
  padding: 5vh 5vw;
  min-height: 100vh;
`;

export const PageTitle = styled.h1`
  position: relative;

  font-weight: 300;
  font-size: 32px;
  
  color: ${Theme.colors.principalBlack};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 2px;

    height: 2px;
    width: 81px;

    background-color: ${Theme.colors.secondaryBlack};
  }
`;

export const Content = styled.main`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const JustificationOfUse = styled.div`
  width: 70vw;
  padding: 10px 15px 15px;
  margin-bottom: 40px;

  color: ${Theme.colors.principalBlack};
  background-color: ${Theme.colors.lightGray};
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  border-radius: 4px;

  h2 {
    position: relative;
    margin-bottom: 15px;

    font-size: 18px;
    font-weight: 300;
    color: ${Theme.colors.secondaryBlack};

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: -1px;

      height: 1px;
      width: 81px;

      background-color: ${Theme.colors.gray};
    }
  }

  p {
    font-size: 14px;
    color: ${Theme.colors.principalBlack};
  }

  span {
    display: block;
    margin-top: 14px;
    font-size: 13px;
    color: ${Theme.colors.secondaryBlack}
  }
`;

export const Divider = styled.div`
  width: 70vw;
  height: 1px;
  background-color: ${Theme.colors.gray};
  margin-bottom: 30px;
`;

export const Footer = styled.footer`
  position: absolute;
  top: 95vh;
  left: 0;

  width: 100%;

  display: flex;
  justify-content: center;

  font-size: 15px;

  p {
    color: ${Theme.colors.tertiaryBlack};

    a {
      text-decoration: none;
      color: ${Theme.colors.principalBlack};
    }
  }
`;