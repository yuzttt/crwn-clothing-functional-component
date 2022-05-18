import { fetchCategoriesFailure,fetchCategoriesSuccess, fetchCategoriesStart} from "./category.action";
import { Category } from "./category.type";
import { AnyAction } from "redux";

export type CategoriesState={
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error| null;
}

const CATEGORIES_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action : AnyAction
): CategoriesState => {
  if (fetchCategoriesStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchCategoriesSuccess.match(action)) {
    return { ...state, categories: action.payload, isLoading: false };
  }

  if (fetchCategoriesFailure.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
  // switch (action.type) {
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_START:
  //     return { ...state, isLoading: true };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_SUCCESS:
  //     return { ...state, isLoading: false, categories: action.payload };
  //   case CATEGORIES_ACTION_TYPES.FETCH_CATEGPROES_FAILED:
  //     return { ...state, isLoading: false, error: action.payload };
  //   default:
  //     return state;
  //}
//};
