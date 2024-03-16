import { useEffect } from 'react';
import { useGitHubStateContext, GitHubState, GitHubActionTypes, useGitHubDispatchContext } from '../../contexts/MainContext';
import { Link } from 'react-router-dom';
import { GitIssue } from '../../../definitions';


const GitHubIssues = () => {
  const gitHubState: GitHubState = useGitHubStateContext();
  const gitHubDispatch = useGitHubDispatchContext();
  useEffect(()=> {console.log('STATE',gitHubState)}, [gitHubState])

  const handleClick = (issueNumber: number) => {
    gitHubDispatch({
      type: GitHubActionTypes.SET_ISSUE_NUMBER,
      payload: {
        issueNumber
      },
    })
  }
  
  return (
      <ul>
        {gitHubState.issues?.map((issue: GitIssue) => (
          <li key={issue.number}>
            <Link to={'/issue'} onClick={()=> handleClick(issue.number)}>{issue.title}</Link>
          </li>
        ))}
      </ul>    
  );
};

export default GitHubIssues;
