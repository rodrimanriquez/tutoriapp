import { types } from "../types/types";

export const setTutorials = (resp) => async (dispatch) => {
  dispatch({
    type: types.setTutorials,
    payload: resp,
  });
};

export const setTutorial = (tutorial) => async (dispatch) => {
  dispatch({
    type: types.setTutorial,
    payload: tutorial,
  });
};

export const orderTutorialBy = (type) => async (dispatch) => {
  dispatch({
    type: types.orderTutorialBy,
    payload: type === undefined ? 1 : type,
  });
};
