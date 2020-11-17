import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'

const RemoveIcon = styled.i`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4rem;
    color: #dee2e6;
    cursor: pointer;
    &:hover {
        color: ff6b6b;
    }
    display: none;
`;

const TodoItemWrap = styled.div`
    display: flex;
    align-items: center;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    &:hover {
        ${RemoveIcon} {
            display: initial;
        }
    }
`;

const CheckCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2.4rem;
    border-radius: 16px;
    border: 1px solid #ced4da;
    margin-right: 2rem;
    cursor: pointer;

    ${props => props.done &&
        css`
            border: 1px solid #38d9a9;
            color: #38d9a9;
        `}
`;

const Text = styled.p`
    flex: 1;
    font-size: 2.1rem;
    color: #495057;
    ${props => props.don &&
        css`
            color: #ced4da;
        `}
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemWrap>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <RemoveIcon>
                <MdDelete />
            </RemoveIcon>
        </TodoItemWrap>
    );
}

export default TodoItem;