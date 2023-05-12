import './App.css';
import ErrorBoundary from './ErrorBoundary';
import { BrowserRouter as Router } from "react-router-dom";
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Router>
          <Main />
        </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;
