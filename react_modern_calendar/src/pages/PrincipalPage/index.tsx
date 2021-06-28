import React from 'react';

import {
  Container,
  PageTitle,
  Content,
  JustificationOfUse,
  Divider,
  Footer,
} from './styles';
import Calendar from '../../components/Calendar';

const PrincipalPage: React.FC = () => {
  return (
    <Container>
      <header>
        <PageTitle>React Modern Calendar</PageTitle>
      </header>

      <Content>
        <JustificationOfUse>
          <h2>Justification of use</h2>
          
          <p>
            There was the need to create a calendar so that our user could 
            select a start and end date for the search to be made according to 
            the selected range. However, creating the entire component from 
            scratch could be very time-consuming and that's why we chose to use 
            the lib.
          </p>

          <span>
            This is just a little to help when you had the same problem. Feel 
            free to contribute with this implementation :)
          </span>
        </JustificationOfUse>

        <Divider />

        <Calendar />
      </Content>

      <Footer>
        <p>
          developed by&nbsp;
          <a href="https://linkedin.com/in/ccastrojr" target="blank">ccastrojr ;)</a>
        </p>
      </Footer>
    </Container>
  );
};

export default PrincipalPage;