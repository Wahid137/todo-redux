import { ADDED, COLORSELECTED, TOGGLED } from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};
export const coloredSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color,
    },
  };
};
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};
