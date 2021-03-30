// import logo from './logo.svg';
import './App.css';
// import NutriportApp from './components/NutriportApp';
import './styles/styles.scss';
import { ThemeProvider } from '@material-ui/core';
import { theme } from './styles/base/theme';
import AppRouter from './routers/AppRouter';

function App() {
  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
    <ThemeProvider theme={theme}>
        <AppRouter />
    </ThemeProvider>
  );
}

export default App;
