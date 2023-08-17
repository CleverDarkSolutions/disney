import {CharacterFiltered} from '../components/common/data-table';
import {ActionTypes, ADDTOFAVS, DELETEFROMFAVS} from './actions';

export interface FavouriteState {
    favs: CharacterFiltered[]
}

const initialState: FavouriteState = {
  favs: []
}

const FavouriteReducer = (state = initialState, action: ActionTypes) : FavouriteState => {
  console.log('Reducer:', action.type, action.payload);
  switch(action.type) {
  case ADDTOFAVS:
    return {
      ...state,
      favs: [...state.favs, action.payload]
    }
  case DELETEFROMFAVS:
    return {
      ...state,
      favs: state.favs.filter(character => character.id !== action.payload), // Filter out the character with the given ID
    };
          
  }
}

export default FavouriteReducer