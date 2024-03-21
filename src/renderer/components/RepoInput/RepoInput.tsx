/* eslint-disable promise/catch-or-return */
import { useState, useEffect } from 'react';
import {
  useGitHubDispatchContext,
  GitHubActionTypes,
  useGitHubStateContext,
} from '../../contexts/MainContext';
import { GitHubState, GitIssue } from '../../../definitions';
import { fetchIssues } from '../../data-provider';

import './RepoInput.scss';

function RepoInput() {
  const [url, setUrl] = useState('');
  const gitHubDispatch = useGitHubDispatchContext();
  const gitHubState: GitHubState = useGitHubStateContext();
  useEffect(() => {
    // Ensure is a a github repository
    const regex = /https?:\/\/github\.com\/([^/]+)\/([^/]+)(?:\.git)?/;
    const match = url.match(regex);
    if (match) {
      const owner = match[1];
      const name = match[2];

      fetchIssues(owner, name).then((issues: GitIssue[]) =>
        gitHubDispatch({
          type: GitHubActionTypes.SET_GITHUB_DATA,
          payload: {
            issues,
            url,
            owner: match[1],
            name: match[2],
          },
        }),
      );
    }
  }, [url, gitHubDispatch]);

  return (
    <div className="{repo-input}" aria-label="GitHub Repository Input">
      <label htmlFor="github-url">
        Enter GitHub Repository URL below
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="e.g., https://github.com/owner/repository"
        />
      </label>

      {gitHubState.owner !== '' && gitHubState.name !== '' && (
        <div>
          <p aria-label="Owner">Owner: {gitHubState.owner}</p>
          <p aria-label="Name">Name: {gitHubState.name}</p>
        </div>
      )}
    </div>
  );
}

export default RepoInput;
