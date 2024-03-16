import { GitIssue } from "../../definitions";


export const fetchIssues = async (repositoryOwner: string, repositoryName: string ) => {
    try {
      const url = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/issues`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub issues');
      }
      const data = await response.json();
      const issues = data.map((issue: GitIssue) => {
        const {title, number, state} = issue;
        return {title, number, state};
      })
      
      return issues
    } catch (error) {
    }
  };


  export const fetchIssue = async (repositoryOwner: string, repositoryName: string, issueNumber : number ) => {
    try {
      const url = `https://api.github.com/repos/${repositoryOwner}/${repositoryName}/issues/${issueNumber}`
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub issues');
      }
      const issue = await response.json();
      // Maybe some transformation goes here
      return issue
    } catch (error) {
    }
  };
