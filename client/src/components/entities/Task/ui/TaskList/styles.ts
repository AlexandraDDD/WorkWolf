import styled from "@emotion/styled";

export const TaskListContainer = styled.div`
   font: ${({ theme }) => theme.fonts.bodypresmallReg};
`;

export const TaskItem = styled.div`
  display: flex;
  align-items: center;
  /* padding: 5px 0; */

  border-top: 1px solid ${({ theme }) => theme.colors.grey};;

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};; 

  }
`;

export const TaskDeadline = styled.div<{overdue: boolean}>`
   color: ${({ overdue, theme }) => (overdue? theme.colors.error :  theme.colors.white)};
  margin-left: auto;
  margin-right: 10px;

`;
export const TaskCheckbox = styled.input`
  margin-right: 10px;
  width: 16px;
  height: 16px;
`;

export const TaskLabel = styled.label`
  cursor: pointer;
`;
