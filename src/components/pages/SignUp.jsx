import { FormTemplate } from "../templates/FormTemplate"
import '../../styles/_login.css'
import { Copy } from "../UI/molecules/Copy"

export const SignUp = () => {
  return (
    <>
      <FormTemplate formType="sign-up" />
      <Copy />
    </>
  )
}