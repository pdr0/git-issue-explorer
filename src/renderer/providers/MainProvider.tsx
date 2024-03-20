import { useReducer } from 'react';
import { GitHubReducer } from '../reducers/GitHubReducer';
import {
  GitHubStateContext,
  GitHubDispatchContext,
} from '../contexts/MainContext';

const init = {
  name: '',
  owner: '',
  url: '',
};

export function MainProvider({ children }: any) {
  const [state, dispatch] = useReducer(GitHubReducer, init);

  return (
    <GitHubStateContext.Provider value={state}>
      <GitHubDispatchContext.Provider value={dispatch}>
        {children}
      </GitHubDispatchContext.Provider>
    </GitHubStateContext.Provider>
  );
}

export default MainProvider;
