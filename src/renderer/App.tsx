import RepoInput from './components/RepoInput/RepoInput';
import GitHubIssues from './components/GitHubIssues/GitHubIssues';

import './App.scss';

import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { MainProvider } from './contexts/MainContext';
import IssueOverview from './components/IssueOverview/IssueOverview';
import { GitHubRepo } from '../definitions';

const init: GitHubRepo = {
  name: '', owner:'', url:''
}

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
    <MainProvider value={init}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/issue' element={<IssueOverview />} />
        </Routes>
      </Router>
    </MainProvider>
  );
}


