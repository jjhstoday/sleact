# 👩🏻‍💻 Slack 클론 코딩 [실시간 채팅 with React + TS]
<br>

## 사용 기술 스택
- React
- SWR
- Socket.io
- Emotion
- TypeScript
- Webpack + Babel


<br>
<br>

## 실행 방법 및 의존성 모듈 설치
- 클라이언트
  - 경로 `./client`
  - 터미널
    ```
    $npm install
    $npm run dev
    ```
<br> 

- 서버
  - 경로 `./server`
  - 터미널
    ```
    // 1. db 생성
    $ npm install
    $ npx sequelize db:create // .env 생성 후 실행
    $ npm run dev

    // 서버 종료
    control + c 

    // 2. workspace & channel 데이터 생성
    $ npx sequelize db:seed:all
    $ npm run dev
    ```



<br>
<br>
