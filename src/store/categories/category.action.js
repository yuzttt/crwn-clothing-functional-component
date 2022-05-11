import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export const fetchCategoriesStart = () =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START);

export const fetchCategoriesSuccess = (categoriesArray) =>
    createAction(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_SUCCESS,
        categoriesArray
    );

export const fetchCategoriesFailure = (error) =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_FAILED, error);
