import { GitHubState, GitHubAction, GitHubActionTypes } from "../contexts/MainContext";

export const GitHubReducer = (state: GitHubState, action: GitHubAction) => {
    switch (action.type) {
    case GitHubActionTypes.SET_GITHUB_DATA: {
      const {payload}  = action 
      return {
        ...state,
        ...payload
      };
    }
  }
};