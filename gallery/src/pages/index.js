import styles from './index.css';
import { Button } from 'antd';
import router from 'umi/router';
// import imageurl from "../assets/yay.jpg";

export default function() {
  
  function handleProducts() { 
    router.push('/products/products'); 
  }

  function handleCard() { 
    router.push('/puzzlecards');
  }
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <div className={styles.list}>
       <Button  type="primary" onClick={handleProducts}>Products</Button>
      </div>
      <div className={styles.list}> 
       <Button  type="primary" onClick={handleCard}>Cards</Button>
      </div>
    </div>
  );
}
