import { useMemo } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createAppRouter } from './routes/router';
import useTheme from './hooks/useTheme';
import LoadingSpinner from './components/LoadingSpinner';

/**
 * Root application component
 * Manages theme state and provides router
 */
function App() {
  const { isDark, toggleTheme } = useTheme();

  // Recreate router when theme changes so all pages get updated props
  const router = useMemo(
    () => createAppRouter(isDark, toggleTheme),
    [isDark, toggleTheme]
  );

  return (
    <RouterProvider
      router={router}
      fallbackElement={<LoadingSpinner isDark={isDark} />}
    />
  );
}

export default App;
