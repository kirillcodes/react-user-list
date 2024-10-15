import {useDispatch} from "react-redux"
import {Button} from "../../../../../shared/ui/Button/Button"
import {toggleModal} from "../../../../../entities/user/model/userSlice";

export const CreateUserButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button text="Create" handleClick={() => dispatch(toggleModal())}/>
    </>
  )
}
