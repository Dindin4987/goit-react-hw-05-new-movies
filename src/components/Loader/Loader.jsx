import { RiseLoader } from 'react-spinners';
import PropTypes from 'prop-types';
import css from './Loader.module.css';

export const Loader = () => {
  return <RiseLoader color="#94aee1" speedMultiplier={1} />;
};

Loader.propTypes = {
  className: PropTypes.string,
};
