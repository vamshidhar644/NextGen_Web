import { useAuthContext } from './AuthContext';

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });

  };
  return { logout };
};
