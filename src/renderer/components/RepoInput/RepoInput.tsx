import { useState, useContext } from 'react';
import { useGitHubDispatchContext, GitHubActionTypes, GitHubState, useGitHubStateContext } from '../../contexts/MainContext';
import { fetchIssues } from '../../data-provider';

import './RepoInput.scss';

const RepoInput = () => {
    const [url, setUrl] = useState('');
    const gitHubDispatch = useGitHubDispatchContext();
    const gitHubState: GitHubState = useGitHubStateContext();

    const parseRepository = () => {
        // Ensure is a a github repository
        const regex = /https?:\/\/github\.com\/([^/]+)\/([^/]+)(?:\.git)?/;
        const match = url.match(regex);
        if (match) {
            const owner = match[1]
            const name = match[2]

            fetchIssues(owner, name).then((issues)=> 
              gitHubDispatch({
                type: GitHubActionTypes.SET_GITHUB_DATA,
                payload: {
                  issues, url, owner: match[1], name: match[2]
                },
            }))
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
      {gitHubState.owner !== '' && gitHubState.name !== '' && (
        <div>
          <h3>Parsed Repository Details:</h3>
          <p>Owner: {gitHubState.owner}</p>
          <p>Name: {gitHubState.name}</p>
        </div>
      )}
    </div>
  );
};

export default RepoInput;
