import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updatePassword: (newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Carregar usuário do localStorage ao iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem('guardiao-user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        localStorage.removeItem('guardiao-user');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<void> => {
    // Simulação de login - em produção, chamar API real
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificar se usuário existe no localStorage
        const storedUsers = localStorage.getItem('guardiao-users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const foundUser = users.find(
          (u: any) => u.email === email && u.password === password
        );

        if (foundUser) {
          const userData: User = {
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
          };
          setUser(userData);
          localStorage.setItem('guardiao-user', JSON.stringify(userData));
          resolve();
        } else {
          reject(new Error('Email ou senha incorretos'));
        }
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, password: string): Promise<void> => {
    // Simulação de cadastro - em produção, chamar API real
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificar se email já existe
        const storedUsers = localStorage.getItem('guardiao-users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const emailExists = users.some((u: any) => u.email === email);

        if (emailExists) {
          reject(new Error('Este email já está cadastrado'));
          return;
        }

        // Criar novo usuário
        const newUser = {
          id: Date.now().toString(),
          name,
          email,
          password // Em produção, NUNCA armazenar senha em plain text!
        };

        users.push(newUser);
        localStorage.setItem('guardiao-users', JSON.stringify(users));

        const userData: User = {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email
        };

        setUser(userData);
        localStorage.setItem('guardiao-user', JSON.stringify(userData));
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('guardiao-user');
  };

  const updatePassword = async (newPassword: string): Promise<void> => {
    // Simulação de atualização de senha
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user) {
          reject(new Error('Usuário não autenticado'));
          return;
        }

        const storedUsers = localStorage.getItem('guardiao-users');
        const users = storedUsers ? JSON.parse(storedUsers) : [];

        const userIndex = users.findIndex((u: any) => u.email === user.email);

        if (userIndex !== -1) {
          users[userIndex].password = newPassword;
          localStorage.setItem('guardiao-users', JSON.stringify(users));
          resolve();
        } else {
          reject(new Error('Usuário não encontrado'));
        }
      }, 1000);
    });
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout,
    updatePassword
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
