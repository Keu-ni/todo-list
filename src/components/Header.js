import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';


const HeaderWrap = styled.div`
    border-bottom: 1px solid #e9ecef;
    padding-top: 4.8rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-bottom: 3.2rem;
    h1 {
        font-size: 3.6rem;
        color: #343a40;
        margin: 0;
    }
    .day{
        font-size: 2.1rem;
        color: #868e96;
        margin-top: 4px;
    }
    p {
        font-size: 1.8rem;
        font-weight: 700;
        color: #20c997;
        margin-top: 40px;
    }
`;

function Header() {
    const todoMocks = useTodoState();
    const undoneTasks = todoMocks.filter(todo => !todo.done);

    const today = new Date();
    const dayString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return (
        <HeaderWrap>
            <h1>{dayString}</h1>
            <div className="day">{dayName}</div>
            <p>할 일 {undoneTasks.length}개 남음</p>
        </HeaderWrap>
    );
}

export default Header;