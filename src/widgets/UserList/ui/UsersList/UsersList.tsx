import React from "react";
import {UserCard} from "../../../../entities/user"
import {FavoriteButton} from "../../../../features/user/favorite-user/ui/FavoriteButton/FavoriteButton";
import {UserListPropsType} from "../../model/types";
import {EditUserButton} from "../../../../features/user/edit-user";
import styles from "./styles.module.css";
import {UserCardType} from "../../../../entities/user/model/types";

export const UserList:React.FC<UserListPropsType> = ({data, isFavorite}) => {
  return (
    <div className={styles.list}>
      {data?.length ? data.map(({id, username, name, email}: UserCardType) => (
        <UserCard
          key={id}
          id={id}
          username={username}
          name={name}
          email={email}
          buttonSlot={
            <>
              <FavoriteButton 
                key={id}
                id={id} 
                username={username} 
                name={name} 
                email={email} 
                isFavorite={isFavorite}
            />
              {isFavorite && 
                <EditUserButton 
                  id={id} 
                  username={username} 
                  name={name}
                  email={email}/>
              }
            </>
          }
        />
      )) : (
        <div className={styles.empty}>Empty list</div>
      )}
    </div>
  )
}
