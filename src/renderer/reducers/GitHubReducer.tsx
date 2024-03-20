import { GitHubState, GitHubAction } from '../../definitions';

export const GitHubActionTypes = {
  SET_GITHUB_DATA: 'SET_GITHUB_DATA',
  SET_ISSUE_NUMBER: 'SET_ISSUE_NUMBER',
};

export const GitHubReducer = (state: GitHubState, action: GitHubAction) => {
  switch (action.type) {
    case GitHubActionTypes.SET_GITHUB_DATA: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }

    case GitHubActionTypes.SET_ISSUE_NUMBER: {
      const { payload } = action;
      return {
        ...state,
        ...payload,
      };
    }

    default: {
      return { ...state };
    }
  }
};
