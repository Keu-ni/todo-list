import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 51.2rem;
    height: 76.8rem;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 0 .8rem 0 rgba(0, 0, 0, 0.04);
    margin: 0 auto;
    margin-top: 9.6rem;
    margin-bottom: 3.2rem;
`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate;