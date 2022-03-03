import { dynamicSort } from "../../helpers/dynamicSort";
import { types } from "../types/types";

const initialTutorial = {
  tutorials: null,
  tutorial: null,
};

export const tutorialReducer = (state = initialTutorial, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.setTutorials:
      return {
        ...state,
        tutorials: payload,
      };
    case types.setTutorial:
      return {
        ...state,
        tutorial: payload,
      };
    case types.orderTutorialBy:
      return {
        ...state,
        tutorials: state.tutorials.sort(
          dynamicSort(payload === 1 ? "nombre" : "fecha")
        ),
      };
    default:
      return state;
  }
};
