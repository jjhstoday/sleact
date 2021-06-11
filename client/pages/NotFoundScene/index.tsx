import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import { Header } from '@pages/SignUp/styles';

export default function NotFoundScene() {
  return (
    <>
      <Header>Sleact</Header>
      <Container>
        <span>해당 페이지를 찾지 못했습니다.</span>
        <span>주소가 잘못되었거나 더 이상 제공하지 않는 페이지입니다.</span>
        <img src="../../assets/notFoundCat.webp" alt="유효하지 않는 페이지입니다." />
        <Link to="/login">로그인 하러가기</Link>
      </Container>
    </>
  );
}
