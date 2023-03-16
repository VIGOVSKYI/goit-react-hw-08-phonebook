import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PrivateRoute from './modules/PrivateRoute/PrivateRoute';
import PublicRoute from './modules/PublicRoute/PublicRoute';

const LoginPage = lazy(() => import('./page/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('./page/RegisterPage/RegisterPage'));
const MyContactsPage = lazy(() =>
  import('./page/MyContactsPage/MyContactsPage')
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/contacts" element={<MyContactsPage />} />
        </Route>
        <Route path="*" element={<MyContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
