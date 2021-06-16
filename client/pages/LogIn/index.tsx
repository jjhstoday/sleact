import React, { useCallback, useState } from 'react';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from '@pages/SignUp/styles';
import useInput from '@hooks/useInput';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import Loading from '../../assets/loading.svg';

export default function LogIn() {
  // useSWR: 첫번째 매개변수인 url 주소값이 두번째 매개변수인 함수의 매개변수로 들어가서 반환값을 반환한다.
  // swr에서 data가 undefined이면 로딩중이다.
  const { data, error, revalidate, mutate } = useSWR('/api/users', fetcher);
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  // withCredentials: 쿠키 생성 → post에서는 세번째 매개변수로, get에서는 두번째 매개변수로
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          // response.data를 data에 저장함 (서버에 재요청하지 않고!!) + 두번째 변수에 false를 넣어주어야 함!!!!
          revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.data);
        });
    },
    [email, password],
  );

  if (data === undefined) {
    return <Loading />;
  }

  if (data) {
    return <Redirect to="/workspace/sleact/channel/일반" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>{logInError}</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
}
