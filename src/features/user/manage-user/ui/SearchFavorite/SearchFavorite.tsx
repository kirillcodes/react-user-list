import {useState} from "react"
import {Input} from "../../../../../shared/ui/Input/Input"
import {useDispatch} from "react-redux";
import {searchFavorite} from "../../../../../entities/user/model/userSlice";

export const SearchFavorite = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    dispatch(searchFavorite(e.target.value))
  }

  return (
    <>
      <Input placeholder="Search" value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e)}/>
    </>
  )
}
