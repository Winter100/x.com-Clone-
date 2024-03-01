
# 트위터 클론

## 소개
- 트위터를 클론해서 만들어본 사이트
- 무한 스크롤과 zustand의 기초를 배울수 있었던 클론 코딩
- next.js의 패러렐 라우트와 인터셉터 기능을 처음으로 사용해봄

[트위터 클론](https://x-com-clone-neon.vercel.app/)

[깃허브](https://github.com/Winter100/x.com-Clone-)

## 사용 기술
***프론트*** : Next.js(app), typescript, module.css, tanstack-query, axios, zustand
***배포***: Vercel

## 프로젝트 사진
- 메인 페이지
![클론](https://velog.velcdn.com/images/winter109/post/3ec484d7-2173-442d-b574-9e62626b79ef/image.png)

<hr>

- 로그인 후 홈페이지
![로그인 후 홈](https://velog.velcdn.com/images/winter109/post/6848d971-ab4a-4bcb-9d8a-38bed2b0d070/image.png)

<hr>

- 검색페이지
![검색](https://velog.velcdn.com/images/winter109/post/e0116ea4-5f46-42f3-9f5b-5cd053f6c78e/image.png)

- 페이지 로딩시 
![로딩](https://velog.velcdn.com/images/winter109/post/a5212f59-3690-4e33-b2d7-13632f93cd2b/image.png)

<hr>

- 검색 기능
![검색](https://velog.velcdn.com/images/winter109/post/4757177a-1689-4135-93bf-e2bb96990f43/image.png)

<hr>

## 프로젝트 하며 느낀점
>1. CSS가 재밌어진 나
- ##### flex와 grid를 사용하는 방법을 많이 배웠고 원하는 곳에 배치하는건 이제 무리가 없어졌다.
- ##### 조건에따라 css를 다르게 바꾸는 것도 재밌었고 무엇보다 module로 css를 관리하니 정돈된 파일구조를 가진거같아 재밌었다.
2. 전역 상태 관리! zustand가 쉽고 편하다
- ##### 전역 상태 관리 라이브러리로 zustand를 처음으로 사용해봤다. 공식 문서만 봐도 배우 쉽게 적용할 수 있었고 컴포넌트를 감싸줄 필요없이 바로 선언하고 사용할 수 있어서 굉장히 좋았다.
- ##### 이번에는 조건부 렌더링에 zustand를 이용했지만 확실히 쉽고 편해서 응용하기도 좋다는 느낌을 받았다.
3. 폴더와 파일구조를 잘 정하자
- ##### 공통적으로 사용하는 컴포넌트를 폴더에 모아두고 나름 이름을 신경써서 지어줬지만 항상 필요할때 바로 찾지 못하고 일정 시간을 소요했다.
- ##### 보다 명확하게 이름을 지어주고 관리해줄 패턴을 정해야 할 것 같다.
4. 컴포넌트에 관한 디자인 패턴이 필요하다!
- ##### 위와 관련된 얘기지만 분명 여러곳에 사용하는 컴포넌트라고 생각되어 만들어두었는데 page컴포넌트와 강하게 종속되어 다시 한번 분리해서 만들어 버리는 경우가 많았다.
- ##### 컴포넌트를 만들때는 목적성을 갖고 한가지 일만하는 컴포넌트로 만들어야 할 것같다. 하나의 컴포넌트가 2~3가지 일을 하게 된다면 그건 재사용 가능성이 매우 낮아지므로 잘 분리하자!
5. 커스텀 훅을 잘 만들어 사용하자!
- ##### 각 page마다 useState라던지 여러 훅을 가져다 쓰니 너무 지저분하고 관리도 힘들어졌다. 
- ##### 해당 페이지마다 커스텀 훅을 만들어 필요한 것 들만 모아 사용하니 꽤나 편리해지고 가독성이 올라갔다. 
