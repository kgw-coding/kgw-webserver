// Express 모듈을 불러옵니다.
const express = require('express');

// Express 애플리케이션을 생성합니다.
const app = express();

// 기본 포트를 설정하거나 3000 포트를 사용합니다.
const PORT = process.env.PORT || 3000;

// public 폴더를 정적 파일 제공 폴더로 설정하고 /static 경로에 연결
app.use('/static', express.static('public'))

// 루트 경로 ('/')에 대한 GET 요청을 처리합니다.
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// localhost뒤에 /test작성하여 테스트로 실행시
app.get('/test', (req, res) => {
    res.send('테스트로 들어왔어요');
  });

// 서버를 설정한 포트에서 실행합니다.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const: 상수 (바꿀 수 x)
// let, var: 변수 (변경 가능)
// const 와 let 만 사용 (var는 사용하지 x) 