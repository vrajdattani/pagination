import {ActionType} from './Type/ActionType';
import {FetchService} from '../Services/FetchService';
export const FetchAction = (id) =>{
    return async (dispatch) =>{
        const details = await FetchService(id);
        dispatch({type:ActionType,payload:details.data.hits})
    }
} 