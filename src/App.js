import store from './redux/Store';
import React from 'react';
import { Route, Routes, BrowserRouter, Navigate  } from 'react-router-dom';

import './App.css';
import Registration from './components/Registration/Registration';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <React.Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
              <Route path="/" element={<Navigate to={`/registration`} />} />
              <Route path='/registration/' element={<Registration text={'форма регистрации!'} />} />
              <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
        </React.Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
