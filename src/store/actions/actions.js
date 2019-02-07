export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const add = () => {
  return {
    type: ADD
  };
};
export const subtract = () => {
  return {
    type: SUBTRACT
  };
};
export const store_result = () => {
  return {
    type: STORE_RESULT
  };
};
export const delete_result = () => {
  return {
    type: DELETE_RESULT
  };
};
