import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { GitHubState, useGitHubStateContext } from '../../contexts/MainContext';
import { fetchIssue } from '../../data-provider';

import './IssueOverview.scss';

const IssueOverview = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  const [issue, setIssue] = useState();
  let issueNumber = 0;
  console.log('STATE',gitHubState)

  useEffect(() => {  
    if(gitHubState.issueNumber !== issueNumber){
      const result = fetchIssue(gitHubState.owner, gitHubState.name, gitHubState.issueNumber)
      result.then(setIssue)
      } },[gitHubState.issueNumber]);
    
    
  return (
      <div className='repo-input'>
        {issue && (<ul>
        {Object.entries(issue).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>)}
        <Link to={'/'}>Back</Link>
      </div>    
  );
};

export default IssueOverview;
