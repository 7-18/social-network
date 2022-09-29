import { FormTemplate } from "../templates/FormTemplate"
import '../../styles/_login.css'
import { Copy } from "../UI/molecules/Copy"

export const Login = () => {
  return (
    <>
      <FormTemplate formType="login" />
      <Copy />
    </>
  )
}