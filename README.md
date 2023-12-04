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

