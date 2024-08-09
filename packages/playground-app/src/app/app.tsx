import '@mantine/core/styles.css';
import { createTheme, MantineProvider, AppShell } from '@mantine/core';
import { Header } from './header/header';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding='md'>
        <Header />
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
