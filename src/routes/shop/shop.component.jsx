import { Routes, Route } from "react-router-dom";

import CategoriesPreview from '../categories-preview/categories-preview.component';

import Category from "../category/category.component";
import "./shop.style.scss";

import {  useEffect } from "react";
import { useDispatch } from "react-redux";

//import { getCategoriesAndDocuments  } from "../../utils/firebase/firebase.utils";
import {fetchCategoriesStart} from '../../store/categories/category.action'

const Shop = () => {
 const dispatch = useDispatch();
  useEffect(() => {
   // const getCategoriesMap = async () => {
       // const categoriesArray = await getCategoriesAndDocuments('categories');
       dispatch(fetchCategoriesStart());
        //dispatch(setCategories(categoriesArray));
   // };
   // getCategoriesMap();
}, []);

  return (
    <Routes>
     <Route index element={<CategoriesPreview/>} />
     <Route path=":category" element={<Category/>} />

    </Routes>
  );
};

export default Shop;
