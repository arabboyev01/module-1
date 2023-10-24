import { StyleLoader } from './style.loader';
import Loader from 'react-js-loader';

const LoaderComponent = () => (
  <StyleLoader>
    <Loader
      type="spinner-cub"
      bgColor="#43A6C6"
      color="#fff"
      title={'box-rotate-x'}
      size={60}
    />
  </StyleLoader>
);

export default LoaderComponent;
