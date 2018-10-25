import React from 'react';
// import styled from 'styled-components';
// import style from '../dist/style.css';
import styled from 'styled-components';

const AppComponent = styled.div `
  background-color: #44014C;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppComponent>
        <div>
          <h1>Booking Module</h1>
        </div>
      </AppComponent>
   
    )
  }
}

export default App;

//how many components do I need?
  //Price per night + number of reviews + star rating
  //Dates picker - stateful
  //Guests picker - stateful
  //Book button - stateless