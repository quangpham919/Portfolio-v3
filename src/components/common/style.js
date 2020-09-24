import styled from "styled-components";

export const Toggle = styled.div`
    display:none;
    @media screen and (max-width: 768px){
      display: flex;
      cursor:pointer;
    }
`

export const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  transform: translateX(100%);
  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 50%;
    min-height:100vh;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #14213D;
    transition: all 0.3s ease-in;
    top: 0vh;
    transform: ${({open}) => (open ? " translateX(-80%);" : " translateX(100%);")};
  }
`

export const StyledBurger = styled.button`
  color: #111;
  padding: 20px;
  margin-right:5px;
  margin-bottom:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }

  div{
    width: 2rem;
    height: 0.25rem;
    width: 2rem;
    height: 0.25rem;
    background: #000000;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    background: ${({  open }) => open ? '#FFFFFF' : '#000000'};
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
  `;
  