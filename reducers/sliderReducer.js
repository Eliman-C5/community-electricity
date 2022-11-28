import { TYPES } from "../data/TYPES";

export const sliderReducer = (state, action) => {
  
  switch (action.type) {
    
    case TYPES.FIRST:

      return 'translate-x-0'
      
    case TYPES.SECOND:

      return '-translate-x-[100%]'
      
    case TYPES.THIRD:

      return '-translate-x-[200%]'
      
    case TYPES.FOURTH:

      return '-translate-x-[300%]'
    
    default:
      return state
  }
  
}