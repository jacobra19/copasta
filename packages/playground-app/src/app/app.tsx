import '@mantine/core/styles.css';
import { createTheme, MantineProvider, AppShell } from '@mantine/core';
import logo from '/copasta.svg';

const theme = createTheme({
  /** Put your mantine theme override here */
});

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 80 }} padding='md'>
        <AppShell.Header p={'10px'}>
          <img
            src={logo}
            alt='Copasta logo'
            style={{ width: 60, height: 60 }}
          />
        </AppShell.Header>

        <AppShell.Main>Main</AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
};
