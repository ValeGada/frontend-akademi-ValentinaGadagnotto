import { Link } from "react-router-dom";
import styled from "styled-components";

// App
export const AppContainer = styled.div`
  width: 100%;
  heigth: 100%;
  margin: 0;
  padding: 0;
  top:0;
  font-family: Helvetica, sans-serif;
  font-weight: 400;
  background-size: contain;
  background-repeat: no-repeat;
  background: url(${(props)=>props.imgurl});
`

// NavBar
export const NavBarMenu = styled.div`
    top: 0;
    position: fixed;
    font-size: 16px;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 45px;
    background:rgb(114, 114, 114); 
    z-index: 1000;   
`
export const ListLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: #f1f1f1;
    margin: 12.5px;
    float: left;
    
    &:hover {
        color: #f1f1f1;
        text-decoration: underline;
    }
`
export const AddButton = styled.button`
    float: right;
    background: #e0e1e2;
    color: #555555;
    cursor: pointer;
    margin: 10px;
    padding: 4px 12px;
    border: 1px solid #e0e1e2;
    border-radius: 5px;
    transition: all .3s ease;

    &:hover {
        color: #f1f1f1;
        background: #555555;
        border: 1px solid #555555;
    }
`

// Modal
export const OverlayDiv = styled.div`
    background: rgba(49, 49, 49, 0.92);
    width: 100vw;
    heigth: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`

export const ContentDiv = styled.div`
    min-width: 500px;
    min-heigth: 300px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    line-heigth: 1.4;
    text-align: center;
    position: absolute;
`

// List
export const ListDiv = styled.div`
    top: 0;
    padding-top: 50px;
    height: 110vh;
    margin: 1.5em 5em;
`
export const SearchInput = styled.input`
    border-radius: 3px;
    border: 1px solid #f1f1f1;
    border: none;
    padding: 5px 100px 5px 5px;
`

export const BarDiv = styled.div`
    margin-left: 25%;
    display: flex;
    align-items: center;  
`
export const FilterDiv = styled.div`
    margin-right: 4em;
`

export const FilterSelect = styled.select`
    margin-left: 10px;
    border-radius: 3px;
    border: 1px solid #f1f1f1;
    border: none;
    color: #000000;
    padding: 5px 30px 5px 12px;
`

export const OrderButton = styled.button`
    margin: 3px;
    padding: 3px 10px;
    cursor: pointer;
    background: #e0e1e2;
    color: #555555;
    transition: all .3s ease;
    border: 3px solid #e0e1e2;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #f1f1f1;
    background: #555555;
    border: 3px solid #555555;
    }
`

export const NumbersSpan = styled.span`
    cursor: pointer;
    padding: 0 5px;
    color: #000000;
    transition: all .3s ease;

    &:hover{
    text-decoration: none;
    color: #4183c4;
    }
`
export const Paging = styled.div`
    padding: 10px;
    justify-self: center;
`

export const PageButton = styled.button`
    padding: 5px 12px;
    margin: 2px;
    cursor: pointer;
    background: #e0e1e2;
    color: #555555;
    transition: all .3s ease;
    border: 1px solid #e0e1e2;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #f1f1f1;
    background: #555555;
    border: 1px solid #555555;
    }
`

// Form
export const StyledForm = styled.form`
    align-content: top;
    margin: 2em 0;
    grid-row: 2/4;
`

export const StyledLabel= styled.label`
    font-weight: bold;
`

export const StyledInput = styled.input`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 0 3px 5px;
    width: 350px;
    margin-bottom: 10px;
`

export const StyledImgInput = styled.input`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 0 3px 5px;
    width: 350px;
    margin-bottom: 10px;
`

export const StyledTextarea = styled.textarea`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    padding: 3px 0 3px 5px;
    width: 350px;
    margin-bottom: 10px;
`

export const StyledErrorDiv = styled.div`
    padding: 3px 2px 3px 5px;
    color: red;
    font-size: 16px;
`

export const StyledSelect = styled.select`
    background:rgba(250, 252, 255, 0.65);
    border: none;
    font-size: 16px;
    color: black;
    padding: 3px 0;
    width: 350px;
    margin-bottom: 10px;
    align-self: center;
    justify-self: center;
`
export const ButtonsDiv = styled.div`
    display: grid;
    grid-template-columns: 30% 30%;
    gap: 20px;
    justify-content: center;
`

export const ConfirmButton = styled.button`
    margin: 0 1em;
    padding: 5px 12px;
    width: 100px;
    cursor: pointer;
    background: #4183c4;
    color: #e0e1e2;
    transition: all .3s ease;
    border: 1px solid #4183c4;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #555555;
    background:rgb(175, 176, 177);
    border: 1px solid #e0e1e2;
    }
`

export const CancelButton = styled.button`
    margin: 0 1em;
    padding: 5px 12px;
    width: 100px;
    cursor: pointer;
    background: #555555;
    color: #e0e1e2;
    transition: all .3s ease;
    border: 1px solid #555555;
    border-radius: 5px;

    &:hover{
    text-decoration: none;
    color: #555555;
    background:rgb(175, 176, 177);
    border: 1px solid #e0e1e2;
    }
`

// Detail/Edit/Add
export const Card = styled.div`
    top: 0;
    height: 100vh;
    padding-top: 60px;
    display: grid;
    grid-template-columns: 340px 350px;
    grid-template-rows: 5% 70% 5%;
    justify-content: center;
`

export const AddProductCard = styled.div`
    top: 0;
    height: 100vh;
    padding-top: 60px;
    display: grid;
    grid-template-rows: 5% 70% 5%;
    justify-content: center;
`

export const StyledImageGrid = styled.div`
    grid-row: 2;
    align-content: center;
    justify-content: center;
`

export const StyledHeader = styled.div`
    grid-column: 1/3;
    grid-row: 1;
    justify-self: center;
    align-content: center;
    max-heigth: 14px;
`

export const FlexGap = styled.div`
    gap: 15px;
    display: flex;
`

export const BackIcon = styled.i`
    cursor: pointer;
    color: #555555;
    transition: all .3s ease;

    &:hover{
    text-decoration: none;
    color: #4183c4;
    }
`

export const EditIcon = styled.i`
    cursor: pointer;
    color: #555555;
    transition: all .3s ease;

    &:hover{
    text-decoration: none;
    color: #4183c4;
    }
`

export const EmptyDiv = styled.div`
    justify-self: center;
    padding: 3px 10px;
    grid-column: 2/3;
`