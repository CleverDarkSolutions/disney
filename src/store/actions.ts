import {CharacterFiltered} from '../components/common/data-table';

export const ADDTOFAVS = 'ADDTOFAVS';
export const DELETEFROMFAVS = 'DELETEFROMFAVS';

export interface AddToFavsAction {
    type: typeof ADDTOFAVS
    payload: CharacterFiltered
}

export interface DeleteFromFavsAction {
    type: typeof DELETEFROMFAVS
    payload: number
}

export type ActionTypes = AddToFavsAction | DeleteFromFavsAction;

export const AddToFavs = (character: CharacterFiltered): ActionTypes => {
  console.log('addToFavs action dispatched:', character);
  return {
    type: ADDTOFAVS,
    payload: character
  };
};

export const DeleteFromFavs = (id: number): ActionTypes => ({
  type: DELETEFROMFAVS,
  payload: id
})
