import {
  CommentActions,
  CommentAvailableActions,
  CommentsState,
} from "./types";

export const initialCommentsState: CommentsState = {
  comments: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const reducer = (
  state: CommentsState,
  action: CommentActions
): CommentsState => {
  switch (action.type) {
    case CommentAvailableActions.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        comments: [],
        isLoading: true,
      };
    case CommentAvailableActions.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.payload,
      };
    case CommentAvailableActions.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case CommentAvailableActions.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
  }
};
