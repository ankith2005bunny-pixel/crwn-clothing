<<<<<<< HEAD
import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';



const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products} />
      
 })}
    </>
  );
};

=======
import { useContext } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';

import { CategoriesContext } from '../../contexts/categories.context';



const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products} />
      
 })}
    </>
  );
};

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
export default CategoriesPreview;