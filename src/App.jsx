import Navbar from '../src/modules/NavBar/NavBar';
import UserRoutes from './UserRoutes.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthLayout from './modules/AuthLayout/AuthLayout';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter>
            <Navbar />
            <UserRoutes />
            <div
              style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 40,
                color: '#010101',
              }}
            ></div>
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  );
};

export default App;
