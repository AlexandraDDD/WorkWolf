import { CardProps } from "@/types/shared/Card";
import styled from "@emotion/styled";


export const Container = styled.div`
    box-sizing: content-box;
    margin: 0 auto;
    padding: 0 32px;
    max-width: 1400px;
   
    @media ${({ theme }) => theme.media.medium} {
        padding: 0 20px;
    }
`;
export const Card = styled.div<CardProps>`
 margin-bottom: ${({ marginb = "20px" }) => marginb};
color: ${({ theme }) => theme.colors.white};
padding: ${({ padding = "20px" }) => padding};
border: 1px solid ${({ theme }) => theme.colors.grey};
border-radius: 10px;
 min-height: 25vh;
    background:  ${({ theme }) => theme.background.primary};
    transition: 300ms;
 &:hover{
  border: 1px solid  ${({ theme }) => theme.colors.secondWhite};
 }
`;
export const ButtonCustomGroup = styled.div`
  display: flex;
  gap: 30px;
  
`;
export const ButtonCustom = styled.div`
text-transform: capitalize;
cursor: pointer;
  font: ${({ theme }) => theme.fonts.bodypresmallReg};
  padding:10px 0px;
  border-bottom: 2px solid  transparent;
  &:hover{
    border-bottom: 2px solid  ${({ theme }) => theme.colors.secondWhite}
  }

`;

export const Line = styled.div`
height: 1px;
width: 100%;
background: ${({ theme }) => theme.colors.grey};
`;

export const Title3 = styled.h3`
text-transform: capitalize;
font: ${({ theme }) => theme.fonts.titleH3Reg};
color: ${({ theme }) => theme.colors.white};
margin-bottom:10px;
`;
export const Title2 = styled.h2`
text-transform: capitalize;
font: ${({ theme }) => theme.fonts.titleH2Reg};
color: ${({ theme }) => theme.colors.white};
margin-bottom:10px;
`;


