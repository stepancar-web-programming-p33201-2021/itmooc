# ITMOOC

## Overview

Мы хотим разработать веб-сайт с викториной, который будет использоваться в **интерактивном классе**. 

Игроки будут использовать свое устройство (смартфон, ноутбук и т. Д.), чтобы отвечать на вопросы учителя. Эти вопросы оцениться, и игрок получит бонусные баллы за время ответов на вопросы и точность. Результаты будут отображаться в таблице лидеров после каждого вопроса.

Игроки входят в игровую комнату с 8-значным кодом, затем вводит свое имя.

✨Типы вопросов: ✨
- Множественный выбор;
- Верно / Неверно;
- Несколько ответов; 

### Student-paced
Подходит для выполнения домашних заданий, осмотра.

Студенты отвечают на каждый вопрос. После каждого вопроса отобразите ответ и количество баллов, которые получил ученик, рассчитанное по _правильному ответу_ и _времени для ответа_.
>Здесь ученики не будут знать результатов и успеваемости своих одноклассников.

> Студенты могут выполнять в любое время.
> 
Вопросы и ответы отображаются на устройстве игрока. После ответа на все вопросы игрок получит уведомление о результате или сообщение от host. 

_Если у учащегося есть учетная запись, он может сохранять процесс работы в режиме **Student-paced**._

## Technical tools

Для frontend:
- ReactJS (с ES2020);
- MUI library с настройкой от Minimal UI;
- Redux и Axios.
- Yup и Formik для форм;

Для backend:
- NodeJS;
- ExpressJS;
- MongoDB.

Другой:
- ESlint и Prettier для linting;
- Jest для тестирования;
- BabelJS.

## Timeline

- 22.09.2021: Выбрали тему проекта.
- 02.10.2021: Выпустили [первый дизайн](https://vk.com/doc510323435_616974949?hash=aeec6d882ac6b65bec&dl=53953ba96f696f54ed) (использовать дизайн colorblock).
- 12.10.2021: Решили переключиться на Material UI для Web и на Material You для Mobile (на случай, если мы создадим мобильное приложение). 
- 22.10.2021: Выпустили template проекта.
