import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-guardiao-cinza-claro font-sans p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 flex justify-center">
            <Link to="/" className="inline-block">
                <Logo />
            </Link>
        </div>
        <div className="bg-guardiao-branco p-8 rounded-xl shadow-soft">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
