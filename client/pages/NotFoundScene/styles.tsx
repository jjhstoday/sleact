import styled from '@emotion/styled';

export const Container = styled.div`
  font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
  margin: 10% 0 0 10%;

  span {
    font-size: 45px;
    font-weight: 700;
  }

  span + span {
    font-size: 30px;
    font-weight: 500;
    display: block;
    margin-top: 40px;
  }

  img {
    position: absolute;
    top: 27%;
    right: 13%;
  }

  & a {
    color: #1264a3;
    text-decoration: none;
    font-weight: 500;
    font-size: 30px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
