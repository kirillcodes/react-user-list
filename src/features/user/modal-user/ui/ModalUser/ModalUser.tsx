import {SubmitHandler, useForm} from "react-hook-form"
import {FormInputType} from "../../model/types";
import {Button} from "../../../../../shared/ui/Button/Button";
import styles from "./styles.module.css";
import {useDispatch, useSelector} from "react-redux";
import {createUser, editUser, toggleModal} from "../../../../../entities/user/model/userSlice";
import {RootState} from "../../../../../shared/store/store";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const schema = yup.object({
  username: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().trim().email().required(),
}).required();

export const ModalUser = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
  const isModal = useSelector((state: RootState) => state.user.isModal);

  const {register, reset, handleSubmit} = useForm<FormInputType>({resolver: yupResolver(schema)});

  const onSubmit: SubmitHandler<FormInputType> = user => {
    reset();
    if (!selectedUser) {
      dispatch(createUser({...user}));
      dispatch(toggleModal());
    } else {
      const userId = selectedUser.id;
      dispatch(editUser({id: userId, ...user}));
      dispatch(toggleModal());
    }
  }

  const delegate = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target && target.id === 'modal') {
      dispatch(toggleModal());
    }
  }

  return (
    <div id="modal" className={styles.overlay} 
      style={isModal ? {display: 'block'} : {display: "none"}}
      onClick={(e) => delegate(e)}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.modal}>
          <label><span>*</span> Username:</label>
          <input defaultValue={selectedUser?.username} placeholder='kirillcodes' {...register('username', {required: true})}/>
          <label><span>*</span> Name:</label>
          <input defaultValue={selectedUser?.name} placeholder="Kirill B" {...register('name', {required: true})}/>
          <label><span>*</span> Email:</label>
          <input defaultValue={selectedUser?.email} 
            placeholder="kirillusernet@gmail.com" {...register('email', {required: true})}/>
          <Button text="Submit" type="submit"/> 
        </form>
    </div>
  )
}
