### forder structure + Atomic Design

    * assets
        css, js,  <br>

    * components
        * _Atoms
        * _Molecules
        * _Organisms
        * _Templates


    * context

    * hooks

    * pages

    * services

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
