import React, {useState} from 'react';
import { AuthProvider } from './context/AuthProvider/AuthProvider';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from  'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout/ProtectedLayout';
import { Login } from './components/Login/Login';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/profile' element={
              <ProtectedLayout>
                <h1> Teste </h1>
              </ProtectedLayout>
            }>
            </Route>

            <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
