import AppRouter from './AppRouter';
import Header from './components/Header';
import { AuthProvider } from './contexts/Auth';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
