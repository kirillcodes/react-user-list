import React from "react";
import {Button} from "../../../../../shared/ui/Button/Button";
import {useDispatch} from "react-redux";
import {addUserToFavorites, removeUserFromFavorites} from "../../../../../entities/user/model/userSlice";
import {FavoriteButtonPropsType} from "../../model/types";

export const FavoriteButton: React.FC<FavoriteButtonPropsType> = ({id, username, name, email, isFavorite}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isFavorite) {
      dispatch(addUserToFavorites({id, username, name, email}));
    } else {
      dispatch(removeUserFromFavorites(id));
    }
  }

  return (
    <>
      <Button text={isFavorite ? 'Remove from favorites' : 'Add to favorites'} 
        isFavorite={isFavorite} handleClick={handleClick}/> 
    </>
  )
}
