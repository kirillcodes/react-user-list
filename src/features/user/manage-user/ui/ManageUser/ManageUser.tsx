import {CreateUserButton} from "../CreateUserButton/CreateUserButton"
import {SearchFavorite} from "../SearchFavorite/SearchFavorite"
import styles from "./styles.module.css";

export const ManageUser = () => {
  return (
    <div className={styles.wrapper}>
      <SearchFavorite/>
      <CreateUserButton/>
    </div>
  )
}
