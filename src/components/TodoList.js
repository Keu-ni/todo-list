import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListWrap = styled.div`
    flex: 1;
    padding-top: 2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 4.8rem;
    overflow-y: auto;
`;

function TodoList() {
    const todoMocks = useTodoState();

    return (
        <TodoListWrap>
            {todoMocks.map(list => (
                <TodoItem 
                    key={list.id}
                    id={list.id}
                    text={list.text}
                    done={list.done}
                />
            ))};
        </TodoListWrap>
    );
}

export default TodoList;