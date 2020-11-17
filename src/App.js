import React from 'react';
import { GlobalStyle } from './style';
import { TodoTemplate, Header } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Header />
      </TodoTemplate>
    </>
  );
}

export default App;
