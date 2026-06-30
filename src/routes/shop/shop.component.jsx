<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {
    return (
        <Routes>
            <Route index element= {<CategoriesPreview />}/>
            <Route path=":category" element= {<Category />}  />
        </Routes>
    )

} 


export default Shop;

=======
import { Route, Routes } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';


const Shop = () => {
    return (
        <Routes>
            <Route index element= {<CategoriesPreview />}/>
            <Route path=":category" element= {<Category />}  />
        </Routes>
    )

} 


export default Shop;

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
