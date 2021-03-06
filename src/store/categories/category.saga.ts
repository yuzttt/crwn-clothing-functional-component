import {fetchCategoriesFailure,fetchCategoriesSuccess} from './category.action';
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {takeLatest,all,call,put} from 'typed-redux-saga';

import { CATEGORIES_ACTION_TYPES } from "./category.type";


export function* fetchCategoriesAsync(){
     try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));
       // dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFailure(error as Error));
        //dispatch(fetchCategoriesFailure(error));
    }
}

export function* onFetchCategories(){
    yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START,fetchCategoriesAsync);
}
export function* categoriesSaga(){
    yield* all([call (onFetchCategories)]);
}