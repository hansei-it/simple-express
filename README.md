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

