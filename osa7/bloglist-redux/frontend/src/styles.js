import styled, { createGlobalStyle } from 'styled-components'
import { NavLink } from 'react-router-dom'

export const GlobalStyle = createGlobalStyle`
  body {
    background: #2e2c2d;
  }
`
export const Container = styled.div`
    background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
    color: #fff;
    padding: 1em;
    border: 10px solid #262b33;
    ul {
        padding-inline-start: 0px;
        list-style: none;
    }
`
export const Navigation = styled.div`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    font-size: 20px;
    font-weight: bold;
    color: orange;
    padding: 1em;
`

export const Toolbar = styled.div`
    background: #283048;
    padding: 2em;
`

export const ContentArea = styled.div`
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    padding: 2em;
    margin-top: 10px;
`

export const StyledLink = styled(NavLink)`
    color: #fff;
    text-decoration: none;
    margin: 1rem;
`

export const BlogStyle = styled.div`
    background-color: #537895;
    background-image: linear-gradient(270deg, orange 20%, #09203f 0%);
    color: #fff;
    width: 400px;
    height: auto;
    border: 1px solid;
    padding: 2px;
    padding-left: 10px;
    margin-bottom: 8px;
`
export const InfoStyle = styled.div`
    background: #011c47;
    width: 50%;
    padding: 15px;
    border: 1px solid #fff;
`

export const UserList = styled.div`
    width: '40%';
    text-align: left;
`

export const Comments = styled.div`
    background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
    color: #fff;
    padding: 20px;
    margin-top: 30px;
    margin-bottom: 15px;
    border: 1px solid #fff;
`

export const Toggle = styled.div`
    background-color: #ffffff;
    background-image: linear-gradient(270deg, #ffffff 0%, #335c81 50%);
    padding-bottom: 15px;
`

export const Form = styled.form`
    background-color: #ffffff;
    background-image: linear-gradient(270deg, #ffffff 0%, #335c81 50%);
    color: #fff;
    margin-top: 10px;
    padding: 15px;
`

export const Input = styled.input`
    display: block;
    padding: 5px;
`

export const Button = styled.button`
    display: inline;
    background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);
    color: #fff;
    width: 110px;
    height: 30px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 10px;
`

export const DeleteButton = styled(Button)`
    background: red;
`

export const CloseButton = styled(Button)`
    width: auto;
    opacity: 90%;
    float: right;
`

export const Error = styled.div`
    background: red;
    max-width: 100%;
    padding: 10px;
`

export const Success = styled.div`
    background: green;
    max-width: 100%;
    padding: 10px;
`
