import { Form } from "../UI/organism/Form"
import female from "../../assets/ketut.webp"

export const Login_Template = () => {
  return (
    <div className="form-container">
      <div className="container">
        <picture>
          <img src={female} />
        </picture>
        <Form form="login" />
      </div>
    </div>
  )
}