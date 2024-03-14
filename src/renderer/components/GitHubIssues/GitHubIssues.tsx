import { useGitHubStateContext, GitHubState } from '../../contexts/MainContext';

type GitHubIssue = {
  id: string,
  html_url: string,
  title: string
}

const GitHubIssues = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  
  return (
      <ul>
        {gitHubState.issues?.map((issue: GitHubIssue) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">{issue.title}</a>
          </li>
        ))}
      </ul>    
  );
};

export default GitHubIssues;
