import {CATEGORIES_ACTION_TYPES} from './category.type';
const CATEGORIES_INITIAL_STATE ={
    categories:[],
    isLoading: false,
    error: null,
}

export const categoriesReducer=(state=CATEGORIES_INITIAL_STATE,action={})=>{
    const {type,payload}=action;

    switch(type){
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START:
            return {...state,isLoading:true};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_SUCCESS:
            return {...state,isLoading:false,categories:payload};
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_FAILED:
            return {...state,isLoading:false,error:payload};
        default:
            return state;
    }
}