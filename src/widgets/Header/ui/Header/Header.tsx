import {Link} from "react-router-dom";
import styles from "./styles.module.css";

const paths = [{path: '/', title: 'Users'}, {path: '/favorites', title: 'Favorites'}];

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        {paths.map(({path, title}, index) => (
          <Link to={path} key={index}>{title}</Link>
        ))}
      </nav>
    </header>  
  )
}
