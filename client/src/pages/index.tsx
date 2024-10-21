import { ButtonCustom, ButtonCustomGroup, Card, Container, Line, Title2, Title3 } from "@/components/shared/styles/components";
import { Button, ButtonGroup } from "@mui/material";
import { MainWrapper, TitleContainer } from "./styles";
import { LineAxis } from "@mui/icons-material";

import { useState } from "react";
import { TaskCard } from "@/components/entities/Task/ui/TasksCard";

export default function Main() {


  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
    return now.toLocaleDateString('ru-RU', options);
  };

  const getGreeting = () => {
    const now = new Date();
    const hours = now.getHours();
    if (hours < 12) {
      return 'Доброе утро';
    } else if (hours < 18) {
      return 'Добрый день';
    } else {
      return 'Добрый вечер';
    }
  };

  const currentDate = getCurrentDate();
  const greeting = getGreeting();

  return (

    <MainWrapper>
      <Container>
        <TitleContainer>
          <Title3>{currentDate}</Title3>
          <Title2>{greeting}, Александра</Title2>
        </TitleContainer>
        <TaskCard />
        <Card>
          <h3>My Projects</h3>
          <ButtonCustomGroup >
            <ButtonCustom>предстоит</ButtonCustom>
            <ButtonCustom>просрочено</ButtonCustom>
            <ButtonCustom>выполнено</ButtonCustom>
          </ButtonCustomGroup>
          <Line></Line>
          {/*    <TaskList>

          </TaskList> */}
        </Card>
      </Container>
    </MainWrapper>

  );
}
