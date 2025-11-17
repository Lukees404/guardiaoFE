
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import LogoIcon from '../components/icons/LogoIcon';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-guardiao-cinza-claro font-sans p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
            <Link to="/" className="inline-flex items-center gap-2">
                <LogoIcon className="h-10 w-10 text-guardiao-cinza-escuro" />
                <span className="text-3xl font-bold text-guardiao-cinza-escuro">Guardião Senior</span>
            </Link>
        </div>
        <div className="bg-guardiao-branco p-8 rounded-xl shadow-soft">
            <Outlet />
        </div>
      </div>
    </div>
  );
}
