import { createAction,Action,ActionWithPayload,withMatcher} from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES,Category } from "./category.type";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_SUCCESS,Category[]>;

export type FetchCategoriesFailure = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_FAILED,Error>;



export const fetchCategoriesStart =withMatcher( ():FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START));

export const fetchCategoriesSuccess =withMatcher(  (categoriesArray:Category[]):FetchCategoriesSuccess =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_SUCCESS,
        categoriesArray
    ));

export const fetchCategoriesFailure =withMatcher(  (error:Error):FetchCategoriesFailure =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_FAILED, error));
