import { useReducer } from "react";

const initialState = {
  classificationName: null,
};

function ClassificationReducer(state, action) {
  switch (action.type) {
    // case "SelectedClassification":
    //   return {
    //     ...state,
    //     classificationName: action.payload,
    //   };
    case "green":
      return {
        classificationName: "Climate & Environment",
      };
    default:
      return initialState;
  }
}

export function GetClassification() {
  const [state, dispatch] = useReducer(ClassificationReducer, initialState);

  const setClassificationName = () => dispatch({ type: "green" });
  //   const setClassificationDesc = () => dispatch({type: 'green'})
}
