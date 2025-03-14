import Mirror from '@mockingmirror/components/Mirror';
import DarkModeProvider from '@app/providers/DarkMode';
import ThemeProvider from '@app/providers/Theme';

const App = () => {
  return (
    <DarkModeProvider>
      <ThemeProvider>
        <Mirror />
      </ThemeProvider>
    </DarkModeProvider>
  );
};

export default App;
