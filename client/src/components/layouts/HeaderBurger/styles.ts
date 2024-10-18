import styled from "@emotion/styled";

export const HeaderWrapper = styled.div`
    background: ${({ theme }) => theme.background.primary};
    padding: 0 20px 0 20px
`

export const HeaderContainer = styled.header`
  height: 50px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  align-items: center;
`;

export const HeaderNavWrapper = styled.div`
    grid-column: span 6;
    margin: 0;
    padding: 0;
`;

/* export const HeaderContent = styled.div`
    grid-column: 6 / 13;
    display: flex;
    gap: 24px;
    justify-content: space-between;
    align-items: center;
`; */
export const HeaderAccount = styled.div`
    color: ${({ theme }) => theme.colors.white};
    grid-column: 8 / 13;
    display: flex;
    gap: 24px;
    justify-content: end;
    align-items: center;
    

`;
