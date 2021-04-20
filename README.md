### redux-toolkit, redux-saga 연습용 레포

ui 구성 참고: https://material-ui.com/store/previews/devias-kit/

- main: redux toolkit & redux saga 테스트 페이지
- test1: material ui 테스트 페이지
- test2: antd & styled components 테스트 페이지
- test3: tailwind css 테스트 페이지

**redux toolkit**

- 기존 리덕스의 액션, 리듀서 정의 부분의 길고 반복되는 코드를 slice라는 개념으로 많이 줄일 수 있음
- 내장 selector 메소드가 메모이제이션 캐싱을 지원해 기존 useSelector를 사용했을 때에 비해 리렌더링을 줄일 수 있음
- 리덕스를 사용할 줄 안다면 러닝커브가 낮고 직관적임
- saga 코드는 줄여주지 못함 (내장 미들웨어가 redux thunk임)
- 기존에 결과페이지에서 사용된 자체제작 라이브러리보다는 사용할 때의 코드량, 반복되는 부분이 많음
