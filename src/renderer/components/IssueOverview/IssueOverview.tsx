import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { GitHubState, useGitHubStateContext } from '../../contexts/MainContext';
import { fetchIssue } from '../../data-provider';

import './IssueOverview.scss';

const IssueOverview = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  const [issue, setIssue] = useState('empty');
  let issueNumber = 0;
  console.log('STATE',gitHubState)

  useEffect(() => {  
    if(gitHubState.issueNumber !== issueNumber){
      const result = fetchIssue(gitHubState.owner, gitHubState.name, gitHubState.issueNumber)
      result.then(setIssue)
      } },[gitHubState.issueNumber]);
    
    
  return (
      <div className='repo-input'>
        <Link to={'/'}>HOME</Link>
        <ul>
        {Object.entries(issue).map(([key, value]) => (
          <p key={key}>{`${key}: ${value}`}</p>
        ))}
        </ul>
      </div>    
  );
};

export default IssueOverview;
