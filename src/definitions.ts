export interface GitIssue {
  number: number;
  state: 'open' | 'closed' | string;
  title: string;
}

export interface GitHubRepo {
  name: string;
  owner: string;
  url: string;
}

export interface GitHubState {
  respositoryUrl: string;
  owner: string;
  name: string;
  issues: GitIssue[];
  issueNumber: number;
}

export interface GitHubData {
  respositoryUrl: string;
  owner: string;
  name: string;
}

export interface GitHubAction {
  type: string;
  payload?: any;
}
