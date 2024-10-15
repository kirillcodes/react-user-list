import React from "react";
import {ButtonType} from "../../types/ButtonType";
import styles from "./styles.module.css";

export const Button: React.FC<ButtonType> = ({text, type, isFavorite, handleClick}) => {
  return (
    <button className={styles.button} type={type ? type : 'button'} onClick={handleClick} 
      style={isFavorite ? {backgroundColor: 'white', color: '#111'} : {backgroundColor: '#111'}}>
        {text} 
    </button>
  )
}
