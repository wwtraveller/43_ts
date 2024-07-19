import FormGender from "../../components/formGender/FormGender";
import LoginForm from "../../components/loginForm/LoginForm";
import styles from "./lesson11.module.css";

const Lesson11 = () => {
  return (
    <div className="lesson-container">
        <h3>Lesson 11</h3>
        <div className={styles.loader}></div>
        <p>Библиотека для работы с формами Formik</p>
        <LoginForm />
        <FormGender />
    </div>
  )
}

export default Lesson11;

