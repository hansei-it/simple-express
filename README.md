10. 로그인 사용자만 권한 패스 접근 확인

server.js 파일 수정( 패스 /data 의 로그인 사용자만 허용하도록 수정 )
const { isLoggedIn, isNotLoggedIn } = require('./lib/middlewares');
app.use('/data', isLoggedIn, dataRouter);

라우트 로그아웃 기능을 위한
/routes/auth.js 파일의 router.get('/logout') 라우트 수정.
  req.logout(()=>{
    res.send('logout ok');
  });  

postman 사용 테스트
회원 가입:  POST (/auth/join) userkey = a password = a
로그인: POST (/auth/login) userkey = a password = a
로그아웃: GET (/auth/logout)

로그인시에만 /data 패스, /data/a1, /data/a2패스 허용

9. 회원등록 및 로그인 처리를 위한 passport 모듈 추가 및 구현

npm install passport passport-local bcrypt 설치
passport 폴더 생성.
/passport/localStrategy.js, /passport/index.js 생성 및 구현.
/routes/auth.js 생성, 구현(회원 가입, 로그인, 로그아웃 라우터)
/lib/middlewares.js  생성, 구현(로그인 권한 체킹을 위한 미들웨어.  DB의 user.js 모델 userkey와 password를 포함하도록 수정)

DB ORM 모델인 /models/user.js모듈의 User 모델에 password를 추가하도록 수정 및 name의 allowNull: true 변경,  age의 allowNull: true, nuique 옵션 제거.
     password: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      name: {
        type: Sequelize.STRING(20),
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true,
      },

server.js 수정(passport모듈 추가, 설정 + auth모듈 및 auth 라우트 추가)

========= 
로그인 확인을 위한 "Postman 테스트" (localhost:5000)
회원 가입:  POST (/auth/join) userkey = aaaa password = aaa 
로그인: POST (/auth/login) userkey = aaaa password = aaa 
로그아웃: GET (/auth/logout)


8. sequelize 이용한 CRUD ORM 모델 파일 생성(user.js, comment.js)과 ORM 관계 설정(index.js)

유정정보(user.js) ORM과 댓글 정보(comment.js) ORM 모듈 생성및 작성.
index.js 관계 설정.
화면 및 mysql 상의 테이블 생성 확인.

7. nunjucks 템플릿 엔진 추가 및 테스트

views 폴더 생성
템플릿 data.html, viewa1.html, viewa2.html 생성

data/index.js
data/a1.js
data/a2.js 파일 랜더링 코드로 변경(res.render('data', { title: '/data root', data:'data 패스의 html을 랜더링 합니다.' });)

server.js 파일에 
app.set('view engine', 'html');
nunjucks.configure('views',{
  express:app,
  watch: true
}); 을 확인


6. 라우트 추가하기 (/routes/data, /routes/data/a1.js, /routes/data/a2.js) 폴더와 파일 추가

각 라우터 파일(/routes/data/index.js, /routes/data/a1.js, /routes/data/a2.js)에 
get()과 post() 예제 코드 파일 작성.
server.js 파일 수정(라우터 모듈 추가 및 미들웨어 설치)

http://localhost:5000/data 실행확인
http://localhost:5000/data/a1 실행확인
http://localhost:5000/data/a2 실행확인
post()는 postman으로 실행확인

5. 라우트 테스트하기
5-1.
라우트 테스트 추가. 
/backend/routes 디렉토리 생성 및 index.js 파일 생성 작성.
/backend/routes/test1.js 파일 생성 작성.
/backend/routes/test2.js 파일 생성 작성.

5-2.
/(루트) 패스의 express.static 모듈 index.html 정적파일을 /routes/index.js로 대체할 예정.
/test1 패스의 라우트는 /routes/test1.js의 get()과 post()로 구현( postman 사용하여 코드 테스트)
/test2 패스의 라우트는 /routes/test2.js의 get()과 post()로 구현( postman 사용하여 코드 테스트)
server.js 파일에 라우트 모듈 로드와 라우트 미들웨어 설정

5-3. 
에러 발생시 에러 send() 할 수 있도록 코드 변경.
.env 파일의 COOKIE_SECRET=first_cookie_secret 추가.(세션 모듈에서 사용하므로..)

4. 더 많은 로그 정보 출력을 위한 morgan 모듈 설치+mysql 설치, sequelize 설정
4-1.
/backend> npm install morgan
설치 완료.

4-2. mysql 설치 및 express_db DB 생성
mysql 접속 및 express_db 생성.
/models/index.js 파일 변경(sequelize 객체 생성을 위한)
/config/config.json 파일 수정(development에 DB 이름, user 이름, user pw 저장 )

4-3. morgan 미들웨어 + sequelize 초기화를 위한 server.js 파일 수정
/backend/server.js 파일 수정

4-4. 실행 확인.
/backend> npm start
실행 및 DB 생성 확인.


3. express 프레임워크에 필요한 기본 모듈 설치
3-1.
/backend> npm install express cookie-parser express-session dotenv nunjucks
/backend> npm install -D nodemon
설치 완료.

3-2.
/backend/publicdir 에 index.html 파일 생성 및 기본 코드 작성
/backend에 server.js 파일 새성 및 express 기본 코드 작성
/backend> npm start 
( 5000포트 기본 동작 확인 )

2. DB 구축을 위한 sequelize 모듈 설치 
2-1.
/backend> npm install mysql2 sequelize-cli sequelize
설치 완료.

2-2.
sequelize 모듈을 이용한 기본 설정 파일 생성 및 모델, 디렉토리 생성 
/backend> npx sequelize init
생성 완료.
불필요 파일 /migrations, /seeders 두 폴더 삭제.

1.
1-1.
frontend/ 디렉토리와
backend/ 디렉토리 생성
.gitignore 파일 생성,
README.md
simple-express.code-workspace 파일 생성

1-2.
backend/ 디렉토리 내에서
npm init 명령으로 package.json 생성

Press ^C at any time to quit.
package name: (backend)
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)
About to write to F:\Projects\back-end\simple-express\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)

