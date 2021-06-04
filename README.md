# 👩🏻‍💻 Slack 클론 코딩 [실시간 채팅 with React + TS]
<br>

## 🧀 사용 기술 스택
- React
- SWR
- Socket.io
- Emotion
- TypeScript
- Webpack + Babel


<br>
<br>

## 🧀 실행 방법 및 의존성 모듈 설치
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

## 🧀 학습 내용 (updating...🐭)
### 1. SPA 애플리케이션에서의 a태그와 Link태그 차이점
- 페이지 이동할때는 a 태그가 아닌 리액트 라우터의 Link를 사용한다.
  - 이는 SPA 애플리케이션에서 a태그를 사용하게되면 새로고침이 되기 때문이다.

<br>

### 2. swr로 상태관리
- swr은 get요청만 된다.
  - 이는 get요청만 된다는 뜻이 아니라, post, delete 등 fetcher함수에서 구현할 수 있지만 결국엔 data를 반환한다는 뜻이다.
- swr은 주기적으로 api를 호출한다.
  - 장점: 실시간 채팅을 볼 수 있다.
  - 단점: api의 잦은 호출로 성능이 저하될 수 있다.

- useSWR: 첫번째 매개변수인 url 주소값이 두번째 매개변수인 함수의 매개변수로 들어가서 반환값을 반환한다.

- swr 내가 원할 때 호출하기
	- revalidate: swr api 호출
    - 서버로 다시 요청을 보내서 데이터를 가져온다.
  - **mutate**
    - 서버로 요청을 안보내고 데이터를 수정한다.
      - `mutate(data, false)`
    - ✨**OPTIMISTIC UI** 구현 가능
      - 서버로 요청이 가기도 전에 실제 데이터를 바꾸고, 실제 데이터는 추후에 보낸다. 이는 사용자 사용성 좋아진다
      - `mutate(data, true)`
      - ex. 인스타그램 좋아요💕
  - **dedupingInterval**: 주기적으로 호출은 되지만, dedupingInterval 기간 내에서는 캐시에서 불러온다.

[💁🏻‍♀️ swr 공식문서에서 option 더 알아보기](https://swr.vercel.app/docs/options)

<br>

### 3. 타입스크립트
- children을 갖고있는 컴포넌트의 경우 **FC**를 리액트에서 가져와서 적용한다.
`const Workspace: FC = ({ children }) => {}`
- children을 갖고있지 않는 컴포넌트의 경우 **VFC**를 리액트에서 가져와서 적용한다.
`const Workspace: VFC = () => {}`