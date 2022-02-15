import * as actionTypes from "./actionTypes";

export const addArticle = (article) => {
  return {
    type: actionTypes.ADD_ARTICLE,
    article,
  };
};

export const simulateHttpRequest = (article) => {
  return (disatch) => {
    setTimeout(() => {
      dispatchEvent(addArticle(article));
    }, 3000);
  };
};
