import { MantineProvider } from '@mantine/core';
import MainLayout from './components/MainLayout';
import TodoLayout from './components/TodoLayout';
import AppContextProvider from './context';
import './index.css';
import "@fontsource/nunito-sans";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS
      theme={{
        fontFamily: 'Nunito Sans, sans-serif',
      }}
    >
      <AppContextProvider>
        <MainLayout>
          <TodoLayout />
        </MainLayout>
      </AppContextProvider>
    </MantineProvider>
  );
}
