import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/Transaction';
import { Home } from './pages/Home';
import { GlobalStyles } from './styles/globals';
import { defaultTheme } from './styles/themes/default';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Home />
      </TransactionsProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}
