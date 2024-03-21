import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGitHubStateContext } from '../../contexts/MainContext';
import { GitHubState } from '../../../definitions';
import { fetchIssue } from '../../data-provider';

import './IssueOverview.scss';

function IssueOverview() {
  const gitHubState: GitHubState = useGitHubStateContext();
  const [issue, setIssue] = useState();
  const [user, setUser] = useState();
  const issueNumber = 0;

  useEffect(() => {
    if (gitHubState.issueNumber !== issueNumber) {
      const result = fetchIssue(
        gitHubState.owner,
        gitHubState.name,
        gitHubState.issueNumber,
      );
      result.then((issue) => {
        setUser(issue.user);
        delete issue.user;
        setIssue(issue);
        /* TODO: Create components for the given info to show
        - User, Labels, Asignees, etc.. and apply WAI-ARIA guidelines
        */
      });
    }
  }, [gitHubState]);

  return (
    <div className="issue-overview">
      {issue && <Link to="/">Back</Link>}
      {issue && (
        <ul>
          {Object.entries(issue).map(([key, value]) => (
            <li key={key}>
              <span>{key}</span>
              {`: ${value}`}
            </li>
          ))}
        </ul>
      )}
      {user && (
        <ul>
          {Object.entries(user).map(([key, value]) => (
            <li key={key}>{`${key}: ${value}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IssueOverview;
