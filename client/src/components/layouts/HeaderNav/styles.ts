
import styled from "@emotion/styled";
import Link from "next/link";

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    gap:20px;
    justify-content: left;
    list-style: none;
    align-items: center;

`;

export const NavLink = styled(Link)`
    svg {
    margin-right: 8px;
  }
    display: flex;
    align-items: center;
    font: ${({ theme }) => theme.fonts.bodyMiddleReg} ;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease;
    color: ${({ theme }) => theme.colors.white};
    text-transform: none;


`;