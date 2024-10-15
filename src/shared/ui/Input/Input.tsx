import {InputType} from "../../types/InputType"
import styles from "./style.module.css"

export const Input: React.FC<InputType> = ({placeholder, value, onChange}) => {
  return (
    <>
      <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value}/>
    </>
  )
}
