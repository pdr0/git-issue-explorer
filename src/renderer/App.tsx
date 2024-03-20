import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import RepoInput from './components/RepoInput/RepoInput';
import GitHubIssues from './components/GitHubIssues/GitHubIssues';
import { MainProvider } from './providers/MainProvider';

import './App.scss';

import IssueOverview from './components/IssueOverview/IssueOverview';

function Home() {
  return (
    <div>
      <h1>Welcome to issue explorer!</h1>
      <RepoInput />
      <GitHubIssues />
    </div>
  );
}

export default function App() {
  return (
    <MainProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/issue" element={<IssueOverview />} />
        </Routes>
      </Router>
    </MainProvider>
  );
}
