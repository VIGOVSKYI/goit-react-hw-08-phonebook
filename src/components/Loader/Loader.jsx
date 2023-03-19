import { RotatingLines } from 'react-loader-spinner';
import styles from './Loader.module.css';


const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        strokeColor="olive"
        strokeWidth="5"
        animationDuration="1.5"
        width="96"
        visible={true}
      />
    </div>
  );
};

export default Loader;