export interface GitIssue  {
    number: number,
    state: 'open' | 'closed' | string,
    title: string
  }

  export interface GitHubRepo {
    name: string, owner: string, url: string
  }