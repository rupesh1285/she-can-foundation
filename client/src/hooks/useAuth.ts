import { useState } from 'react';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(localStorage.getItem('adminToken'));
  const [role, setRole] = useState<string | null>(localStorage.getItem('adminRole'));

  const login = (newToken: string, newRole: string) => {
    localStorage.setItem('adminToken', newToken);
    localStorage.setItem('adminRole', newRole);
    setToken(newToken);
    setRole(newRole);
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminRole');
    setToken(null);
    setRole(null);
  };

  return { token, role, login, logout, isAuthenticated: !!token };
};
