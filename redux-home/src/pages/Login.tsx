import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { login, clearError } from '../store/userSlice';

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated, error } = useAppSelector(state => state.user);
  const [loginValue, setLoginValue] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(login({ login: loginValue, password }));
  };

  React.useEffect(() => {
    dispatch(clearError());
  }, [loginValue, password, dispatch]);

  return (
    <Box maxWidth={400} mx="auto" mt={4}>
      <Typography variant="h4" component="h2" gutterBottom>Вход</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Логин"
          value={loginValue}
          onChange={e => setLoginValue(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Пароль"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {error && <Typography color="error" variant="body2">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Войти
        </Button>
      </form>
      <Box mt={2}>
        <Typography variant="body2" color="textSecondary">
          Фейковый аккаунт: <b>testuser</b> / <b>testpass</b>
        </Typography>
        {isAuthenticated && (
          <Typography color="success.main" variant="body1" mt={2}>
            Вход выполнен успешно!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Login;