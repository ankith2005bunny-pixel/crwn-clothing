<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {

  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = ()  => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler} >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

=======
import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {

  const { imageUrl, title, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = ()  => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler} >
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

>>>>>>> c808f9da6df0166434a2294a260f16ec10da800f
export default DirectoryItem;