import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: Rotate(0deg)
  }

  to {
    transform: Rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  padding: 0 15px;
  border: 1px solid #7159c1;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 2px solid #eee;
    }
  }

  a:link,
  a:visited {
    background: #eee;
    border: 1px solid #7159c1;
    border-radius: 7px;
    padding: 10px 7px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    color: #7159c1;
  }

  a:hover,
  a:active {
    background-color: #7159c1;
    color: #eee;
  }
`;
