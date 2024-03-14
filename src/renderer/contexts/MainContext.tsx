import { createContext, useReducer, useContext } from "react";
import { GitHubReducer } from "../reducers/GitHubReducer";

type MainContext = {
    name: string, owner: string, url: string
}

const defaultMainContext: MainContext = {name: '', owner: '', url: ''}

export const MainContext = createContext(defaultMainContext);

export const MainDispatchContext = createContext(defaultMainContext);


export const GitHubActionTypes = {
    SET_GITHUB_DATA: 'SET_GITHUB_DATA'
}

// Action 
export interface GitHubAction {
  type: string;
  payload?: any;
}

// Payload
interface GitHubData {
    respositoryUrl: string,
    owner: string,
    name: string
}

//State
export interface GitHubState {
  respositoryUrl: string,
  owner: string,
  name: string,
  issues: any // TODO Create a Record
}

type Dispatch = (action: GitHubAction) => void;

const GitHubStateContext = createContext<GitHubState | undefined>(undefined);
const GitHubDispatchContext = createContext<Dispatch | undefined>(undefined);

export const useGitHubStateContext = () => {
  const context = useContext(GitHubStateContext);
  if (context === undefined) {
    throw new Error("useGitHubStateContext must be used within a GitHubStateContext.Provider");
  }
  return context;
};

export const useGitHubDispatchContext = () => {
  const context = useContext(GitHubDispatchContext);
  if (context === undefined) {
    throw new Error("useGitHubDispatchContext must be used within a GitHubDispatchContext.Provider");
  }
  return context;
};

const init = {
    name: 'foo0', owner:'foo1', url:'foo2'
  }

export const MainProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(GitHubReducer, init);

  return (
    <GitHubStateContext.Provider value={state}>
      <GitHubDispatchContext.Provider value={dispatch}>{children}</GitHubDispatchContext.Provider>
    </GitHubStateContext.Provider>
  );
};