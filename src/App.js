import React from 'react';
import { GlobalStyle } from './style';
import { TodoTemplate } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Hello Todo list!</TodoTemplate>
    </>
  );
}

export default App;
