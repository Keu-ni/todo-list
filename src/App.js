import React from 'react';
import { GlobalStyle } from './style';
import { TodoTemplate, Header, TodoList, TodoCreate } from './components';

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <Header />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
