import RepoInput from './components/RepoInput/RepoInput';
import GitHubIssues from './components/GitHubIssues/GitHubIssues';

import './App.css';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { MainProvider } from './contexts/MainContext';

type GitHubRepo = {
  name: string, owner: string, url: string
}

const init: GitHubRepo = {
  name: '', owner:'', url:''
}

function Home() {
  return (
    <div>
      <h1>Welcome to issue explorer!</h1>
        <MainProvider value={init}>
          <RepoInput />
          <GitHubIssues />
        </MainProvider>
      </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}


