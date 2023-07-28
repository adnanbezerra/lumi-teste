import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: #93b9a7;
  border-radius: 5px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  box-sizing: border-box;
`

export const InsertDoc = styled.input`
  display: none;
`

export const Label = styled.label`
  color: #05493a;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  &:hover {
    background-color: #4b5c54;
    transition: 0.2s;
    cursor: pointer;
  }
`
