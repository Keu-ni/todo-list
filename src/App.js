import React from 'react';
import { GlobalStyle } from './style';
import { TodoTemplate, Header, TodoList, TodoCreate } from './components';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <Header />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
