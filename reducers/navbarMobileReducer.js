import { NAVBAR_TYPES } from '../data/TYPES'

export const navbarMobileReducer = (state, action) => {
  
  switch (action.type) {
    
    case NAVBAR_TYPES.HOME:

      return 'HOME'
      
    case NAVBAR_TYPES.TEAM:

      return 'TEAM'
      
    case NAVBAR_TYPES.PROGRAMS:

      return 'PROGRAMS'
      
    case NAVBAR_TYPES.MARKETPLACE:

      return 'MARKETPLACE'
      
    case NAVBAR_TYPES.ZONES:

      return 'ZONES'
    
    default:
      return state
  }
  
}
