import {ActionType} from '../Actions/Type/ActionType';
const initialState = {
    data:[]
}
export const PostReducer = (state=initialState,{type,payload}) =>{
    switch(type){
        case ActionType:{
            return {...state,
                    data:state.data.concat(payload)}
        }
        default :{
            return state
        } 
        
    }
}