import {useDispatch} from "react-redux"
import {Button} from "../../../../../shared/ui/Button/Button"
import {selectUser, toggleModal} from "../../../../../entities/user/model/userSlice";
import {UserCardType} from "../../../../../entities/user/model/types";

export const EditUserButton:React.FC<UserCardType> = ({...userData}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(selectUser({...userData}));
    dispatch(toggleModal());
  }
  
  return (
    <>
      <Button text="Edit" isFavorite={true} handleClick={handleClick}/>
    </>
  )
}
