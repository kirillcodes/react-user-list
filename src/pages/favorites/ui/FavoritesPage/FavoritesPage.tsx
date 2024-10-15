import {useDispatch, useSelector} from "react-redux"
import {UserList} from "../../../../widgets/UserList"
import {RootState} from "../../../../shared/store/store"
import {ManageUser} from "../../../../features/user/manage-user";
import {ModalUser} from "../../../../features/user/modal-user";
import {useEffect} from "react";
import {getFavoriteUsers} from "../../../../entities/user/model/userSlice";
import styles from "./styles.module.css";

export const FavoritesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (!localStorage.user) {
      localStorage.user = JSON.stringify([]);
    }
    dispatch(getFavoriteUsers());
  }, []);

  const favorites = useSelector((state: RootState) => state.user.favorites);
  const foundFavorites = useSelector((state: RootState) => state.user.foundFavorites);
  const searchValue = useSelector((state: RootState) => state.user.searchValue);
  const setData = () => {
    if (foundFavorites.length) {
      return foundFavorites;
    } else if (!foundFavorites.length && searchValue) {
      return undefined;
    } else {
      return favorites;
    }
  };


  return (
    <div className={styles.page}>
      <ModalUser/>
      <ManageUser/>
      <UserList data={setData()} isFavorite={true}/>
    </div>
  )
}
