import { SEARCH_PRODUCTS } from "../actions/index";
import { withRouter } from "react-router";

export default function (state = [], action) {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      console.log("SEARCH_PRODUCTS payload is ", action.payload.data);

      return action.payload.data;
    default:
      return state;
  }
}
