import { createContext, useContext } from 'react';
import { GitHubState, GitHubAction } from '../../definitions';

type MainContextType = {
  name: string;
  owner: string;
  url: string;
};
type Dispatch = (action: GitHubAction) => void;

export const GitHubActionTypes = {
  SET_GITHUB_DATA: 'SET_GITHUB_DATA',
  SET_ISSUE_NUMBER: 'SET_ISSUE_NUMBER',
};

const defaultMainContext: MainContextType = { name: '', owner: '', url: '' };

export const MainContext = createContext(defaultMainContext);
export const MainDispatchContext = createContext(defaultMainContext);

export const GitHubStateContext = createContext<GitHubState | undefined>(
  undefined,
);
export const GitHubDispatchContext = createContext<Dispatch | undefined>(
  undefined,
);

export const useGitHubStateContext = () => {
  const context = useContext(GitHubStateContext);
  if (context === undefined) {
    throw new Error(
      'useGitHubStateContext must be used within a GitHubStateContext.Provider',
    );
  }
  return context;
};

export const useGitHubDispatchContext = () => {
  const context = useContext(GitHubDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useGitHubDispatchContext must be used within a GitHubDispatchContext.Provider',
    );
  }
  return context;
};
