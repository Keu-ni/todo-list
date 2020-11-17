import React from 'react';
import { GlobalStyle } from './style';
import { TodoTemplate, Header, TodoList } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Header />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
