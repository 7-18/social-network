import { Form } from "../UI/organism/Form"
import female from "../../assets/ketut.webp"

export const FormTemplate = ({ formType }) => {
  return (
    <div className="form-container">
      <div className="container">
        <picture>
          <img src={female} />
        </picture>
        <Form formType={formType} />
      </div>
    </div>
  )
}