import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0px;
  background-color: white;
  z-index: 2;
  display: flex;
  padding: 0 20px;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    border-radius: 15px;
  }
`

export const Logo = styled.p`
  margin-left: 10px;
  margin-right: 20px;
  font-weight: bold;
  font-size: 25px;
  font-family: 'Supermercado One', cursive;
`

export const PageSelector = styled.div`
  background-color: ${props => props.isCurrentPage ? "#dbdbdb" : "#fff"};
  color: #000;
  font-size: 20px;
  font-weight: bold;
  height: 70px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dbdbdb;
    transition: 0.2s;
  }
`
