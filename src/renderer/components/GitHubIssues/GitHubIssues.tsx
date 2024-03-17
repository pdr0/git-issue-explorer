import { useEffect } from 'react';
import { useGitHubStateContext, GitHubState, GitHubActionTypes, useGitHubDispatchContext } from '../../contexts/MainContext';
import { Link } from 'react-router-dom';
import { GitIssue } from '../../../definitions';

import './GitHubIssues.scss'

const GitHubIssues = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  const gitHubDispatch = useGitHubDispatchContext();

  const handleClick = (issueNumber: number) => {
    gitHubDispatch({
      type: GitHubActionTypes.SET_ISSUE_NUMBER,
      payload: {
        issueNumber
      },
    })
  }
  
  return (
      <ul className='git-hub-issues'>
        {gitHubState.issues?.map((issue: GitIssue) => (
          <li key={issue.number}>
            <span>{issue.state}</span>
            <Link to={'/issue'} onClick={()=> handleClick(issue.number)}>{issue.title}</Link>
          </li>
        ))}
      </ul>    
  );
};

export default GitHubIssues;
