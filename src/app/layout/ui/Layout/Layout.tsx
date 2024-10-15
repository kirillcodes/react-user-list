import {Outlet} from "react-router-dom"
import {Header} from "../../../../widgets/Header"
import styles from "./styles.module.css";

export const Layout = () => {
  return (
    <>
      <Header/>
      <div className={styles.container}>
        <Outlet/>
      </div>
    </>
  )
}
