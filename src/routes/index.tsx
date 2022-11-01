import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn2";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 인증여부 상관X 페이지 */}
        <Route path="/" element={<Home />} />

        <Route path="login" element={<SignIn />} />
        {/* 인증을 하지 않아야만 접속가능 페이지 */}
        {/* <Route element={<PrivateRoute authentication={false} />}>
          <Route
            path="/login"
            element={
              <DefaultLayout>
                <SignIn />
              </DefaultLayout>
            }
          />
        </Route> */}

        {/* 인증을 해야 접속가능 페이지 */}
        {/* <Route element={<PrivateRoute authentication={true} />}>
          <Route
            path="/mypage"
            element={
              <DefaultLayout>
                <MyPage />
              </DefaultLayout>
            }
          /> */}
        {/* 권한 체크 필요 페이지 */}
        {/* ProtectRoute는 반드시 로그인한 사용자의 한해서만 되도록 구현되어 PrivateRoute안에 종속되어야한다. */}
        {/* <Route element={<ProtectRoute />}>
            <Route element={<AdminDefaultLayout />}>
              <Route path="/admin" element={<AdminMainPage />} />
              <Route path="/admin/member" element={<MemberManageMainPage />} />
            </Route>
          </Route>
        </Route> */}

        {/* 인증/권한 여부와 상관 없이 접근 가능한 Error 페이지 */}
        {/* <Route path="/*" element={<Error404 />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
