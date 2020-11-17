import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem'

const TodoListWrap = styled.div`
    flex: 1;
    padding-top: 2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 4.8rem;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListWrap>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="컴포넌트 스타일링 하기" done={true} />
            <TodoItem text="holiday code" done={false} />
            <TodoItem text="mobile shop" done={false} />
        </TodoListWrap>
    );
}

export default TodoList;