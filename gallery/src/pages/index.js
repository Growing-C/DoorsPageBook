import styles from './index.css';
import imageurl from "../assets/yay.jpg";

export default function() {
  console.log(imageurl)
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} style={{background: 'url('+imageurl+') no-repeat center 0'}} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
    </div>
  );
}
