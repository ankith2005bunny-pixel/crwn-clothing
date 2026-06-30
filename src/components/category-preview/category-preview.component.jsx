<<<<<<< HEAD
import {CategoryPreviewContainer, Title , Preview} from './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
        {title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

=======
import {CategoryPreviewContainer, Title , Preview} from './category-preview.styles.jsx';
import ProductCard from '../product-card/product-card.component';


const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>
        {title.toUpperCase()}</Title>
      </h2>

      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
export default CategoryPreview;