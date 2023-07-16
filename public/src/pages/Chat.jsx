import React from 'react'
import styled from 'styled-components';

function Chat() {
  return (
    <Container>
      <div className='container'>

      </div>
    </Container>
  )
}

const Container = styled.div`{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items:center ;
  background-color: #131314;
  .container{
      height: 90vh;
      width: 90vw;
      background-color: #000078;
      display: grid;
      grid-template-columns: 20% 80%;
      @media screen and (min-width:720px) and (max-width:1080px){
          grid-template-columns: 35% 65%;
      }
  }
}
`;

export default Chat
