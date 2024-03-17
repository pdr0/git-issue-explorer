import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GitHubState, useGitHubStateContext } from '../../contexts/MainContext';
import { fetchIssue } from '../../data-provider';

import './IssueOverview.scss';

const IssueOverview = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  const [issue, setIssue] = useState();
  const [user, setUser] = useState();
  let issueNumber = 0;

  useEffect(() => {  
    if(gitHubState.issueNumber !== issueNumber){
      const result = fetchIssue(gitHubState.owner, gitHubState.name, gitHubState.issueNumber)
      result.then((issue)=> {
        setUser(issue.user)
        delete issue.user;
        setIssue(issue);
        /* TODO: Create components for the given info to show
        - User, Labels, Asignees, etc.. and apply WAI-ARIA guidelines
        */

      })
      } },[gitHubState.issueNumber])
    
    
  return (
      <div className='issue-overview'>
        {issue && (<Link to={'/'}>Back</Link>)}
        {issue && (
        <ul>
        {Object.entries(issue).map(([key, value]) => (
          <li key={key}><span>{key}</span>{`: ${value}`}</li>
          ))}
        </ul>)}
        {user && (<ul>
        {Object.entries(user).map(([key, value]) => (
          <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>)}
      </div>    
  );
};

export default IssueOverview;
