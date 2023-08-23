import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 1420px;

  /* width: 1200px; */
  /* не задаємо фіксовану ширину щоб контейнер був гумовим  */
  margin: auto;
  padding: 10px;
  outline: 2px solid red;
  display: flex;
  justify-content: space-between;
`;

export const Stylednav = styled.nav`
  width: 446px;
  height: 450px;
  margin: auto;
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content:center;
  outline: 2px solid green;
`;
