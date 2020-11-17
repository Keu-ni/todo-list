import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';

const CircleBtn = styled.button`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 50%);
    display: flex;
    align-items: center;
    justify-content: center;

    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #38d9a9;
    &:hover {
        background-color: #63e6be;
    }
    &:active {
        background-color: #20c997;
    }

    font-size: 6rem;
    color: #fff;

    z-index: 5;
    cursor: pointer;

    transition: 0.125s all ease-in;
    ${props => props.open && css`
        background-color: #ff6b6b;
        &:hover {
            background-color: #ff8787;
        }
        &:active {
            background-color: #fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`;

const InsertForm = styled.form`
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
    background-color: #f8f9fa;
    padding: 3.2rem 3.2rem 7.2rem 3.2rem;
`;

const Input = styled.input`
    width: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    outline: none;
    font-size: 1.8rem;
    padding: 1.2rem;

`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('');

    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = () => setOpen(!open);
    const onChange = (e) => setValue(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: nextId.current,
                text: value,
                done: false
            }
        });
        setValue('');
        setOpen(false);
        nextId.current += 1;
    }

    return (
        <>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input 
                            autoFocus 
                            placeholder="할 일을 입력 후, Enter 를 눌러요"
                            onChange={onChange}
                            value={value}
                        />
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleBtn onClick={onToggle} open={open}>
                <MdAdd />
            </CircleBtn>

        </>
    );
}

export default React.memo(TodoCreate);