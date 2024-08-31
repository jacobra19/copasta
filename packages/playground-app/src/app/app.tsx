import '@mantine/core/styles.css';
import { createTheme, MantineProvider, AppShell } from '@mantine/core';
import { Header } from './header/header';
import { Main } from './playground/playground';
import { PlaygroundContextProvider } from './playground/playground.context';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding='md'>
        <Header />
        <PlaygroundContextProvider>
          <Main />
        </PlaygroundContextProvider>
      </AppShell>
    </MantineProvider>
  );
};
