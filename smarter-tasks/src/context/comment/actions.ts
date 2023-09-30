import { API_ENDPOINT } from "../../config/constants";

import { Comment, CommentAvailableActions, CommentsDispatch } from "./types";

export const fetchComments = async (
  dispatch: CommentsDispatch,
  taskId: string,
  projectId: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: CommentAvailableActions.FETCH_COMMENTS_REQUEST });
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch comments");
    }
    const data = (await response.json()) as Comment[];
    dispatch({
      type: CommentAvailableActions.FETCH_COMMENTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
    dispatch({
      type: CommentAvailableActions.FETCH_COMMENTS_FAILURE,
      payload: `Unable to load comments for task ${taskId}`,
    });
  }
};

export const addComment = async (
  dispatch: CommentsDispatch,
  taskId: string,
  projectId: string,
  description: string,
  owner: string
) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(
      `${API_ENDPOINT}/projects/${projectId}/tasks/${taskId}/comments`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          description,
          owner,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(`Unable to create comment for task ${taskId}`);
    }
    const data = await response.json();
    dispatch({
      type: CommentAvailableActions.ADD_COMMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Operation failed:", error);
  }
};
