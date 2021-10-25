
import { OPEN_MODAL, CLOSE_MODAL } from "../actions/types";

const initialState = {
  open:false,
  code:undefined
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const {type, payload} = action;
    switch (type) {
      case OPEN_MODAL:
        return { open: true, code: payload.code}
      case CLOSE_MODAL:
        return { open: false }
      default:
        return state
    }
  }