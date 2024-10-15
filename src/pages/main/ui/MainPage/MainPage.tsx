import {useSelector} from "react-redux";
import {UserList} from "../../../../widgets/UserList"
import {useGetAllUsersQuery} from "../../../../widgets/UserList/api/usersApi"
import {RootState} from "../../../../shared/store/store";
import styles from "./styles.module.css";

export const MainPage = () => {
  const {data, isLoading} = useGetAllUsersQuery(null);
  const favoriteUsers = useSelector((state: RootState) => state.user.favorites);
  const filteredData = data?.filter(user => {
    return !favoriteUsers.some(favorite => favorite.id === user.id);
  })

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>
  }

  return (
    <main>
      <UserList data={filteredData} isFavorite={false}/>
    </main>
  )
}
