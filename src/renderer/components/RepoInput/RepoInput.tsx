import { useState, useContext } from 'react';
import { useGitHubDispatchContext, GitHubActionTypes, MainContext } from '../../contexts/MainContext';
import './RepoInput.css';

const RepoInput = () => {
    const [url, setUrl] = useState('');
    const gitHubDispatch = useGitHubDispatchContext();

    const {name, owner } = useContext(MainContext);

    const fetchIssues = async (repositoryOwner: string, repositoryName: string) => {
        try {
          const response = await fetch(`https://api.github.com/repos/${repositoryOwner}/${repositoryName}/issues`);
          if (!response.ok) {
            throw new Error('Failed to fetch GitHub issues');
          }
          const data = await response.json();
          return data
        } catch (error) {
        }
      };

    const parseRepository = () => {
        // Ensure is a a github repository
        const regex = /https?:\/\/github\.com\/([^/]+)\/([^/]+)(?:\.git)?/;
        const match = url.match(regex);
        if (match) {
            const owner = match[1]
            const name = match[2]
            fetchIssues(owner, name).then(issues => {
                gitHubDispatch({
                    type: GitHubActionTypes.SET_GITHUB_DATA,
                    payload: {
                    issues, url, owner: match[1], name: match[2]
                    },
                });
            })
            
        } else {
        alert('Invalid GitHub repository URL');
        }
  };

  return (
    <div className='repo-input'>
      <label>
        Enter GitHub Repository URL:
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="e.g., https://github.com/owner/repository"
        />
      </label>
      <button onClick={parseRepository}>Get Issues</button>
      {owner && name && (
        <div>
          <h3>Parsed Repository Details:</h3>
          <p>Owner: {owner}</p>
          <p>Name: {name}</p>
        </div>
      )}
    </div>
  );
};

export default RepoInput;
