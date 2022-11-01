# react-typescript-etc-basic

react, typescirpt, 전체 폴더구조, MUI, redux 등 전체 코드 정리

### 사용

- react-router v6

### forder structure + Atomic Design

    * @types
      type interface 등 정의

    * assets
        css, js,  <br>

    * components
        * _Atoms
        * _Molecules
        * _Organisms
        * _Templates


    * context
      useContext를 사용하기 때문에 우리 프로젝트에서 사용할 context를 정의해 놓았다.


    * hooks

    * pages

    * services
      axios를 이용해 api를 호출하는 파일을 서비스 별로 나눠놓았고 hook으로 나머지 작업들을 처리하기 때문에 서비스 단에서는 호출만 한다.

    * api

    * routes
      Route할 페이지의 주소 파일과, route를 정의해놓은 파일



    * store

    * utils

### setting

1. react with typescript

   ```
   $ npx create-react-app project-name --template typescript
   ```

2. router

   ```
   $ npm install react-router-dom
   ```

3. Material UI (MUI)

   - 리액트 UI라이브러리 <br>

   ```
    $ npm i @mui/material @emotion/react @emotion/styled

    // styled-components 사용시
    $ npm install @mui/material @mui/styled-engine-sc styled-components

    // mui icons 사용시
    $ npm i @mui/icons-material
   ```

### 404 page

```javascript
// App.tsx
<Route
  path="*"
  element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here</p>
    </main>
  }
/>
```

### 사용

#### typescript

- type VS interface
  interface: 클래스 같이 상속이 일어날 수 있는 부분.
  type: 매개 변수 스펙 등과 같이 형태를 표현 하는 부분.
