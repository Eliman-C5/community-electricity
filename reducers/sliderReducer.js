import { TYPES } from "../data/TYPES";

export const sliderReducer = (state, action) => {
  
  switch (action.type) {
    
    case TYPES.FIRST:

      return 0
      
    case TYPES.SECOND:

      return 1
      
    case TYPES.THIRD:

      return 2
      
    case TYPES.FOURTH:

      return 3
    
    default:
      return state
  }
  
}