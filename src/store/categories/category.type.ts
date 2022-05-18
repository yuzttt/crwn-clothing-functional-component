export enum CATEGORIES_ACTION_TYPES{
   // SET_CATEGORIES: 'category/SET_CATEGORIES_MAP',
    FETCH_CATEGPROES_START= 'category/FETCH_CATEGPRIES_START',
    FETCH_CATEGPROES_SUCCESS= 'category/FETCH_CATEGPRIES_SUCCESS',
    FETCH_CATEGPROES_FAILED= 'category/FETCH_CATEGPRIES_FAILED'

}
export type CategoryItem={
    id:number;
    imageUrl:string;
    name:string;
    price:number;
}

export type Category ={
    title:string;
    imageUrl:string;
    items:CategoryItem[];
}

export type CategoryMap = {
    [key:string]: CategoryItem[];

}