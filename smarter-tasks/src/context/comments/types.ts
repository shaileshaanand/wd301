import React from "react";

export enum CommentAvailableActions {
  FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
  FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
  FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",
  ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
}

export type CommentActions =
  | { type: CommentAvailableActions.FETCH_COMMENTS_REQUEST }
  | { type: CommentAvailableActions.FETCH_COMMENTS_SUCCESS; payload: Comment[] }
  | { type: CommentAvailableActions.FETCH_COMMENTS_FAILURE; payload: string }
  | { type: CommentAvailableActions.ADD_COMMENT_SUCCESS; payload: Comment };

export type CommentsDispatch = React.Dispatch<CommentActions>;

export interface Comment {
  id: number;
  description: string;
  owner: number;
  createdAt: string;
}

export interface CommentsState {
  comments: Comment[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
