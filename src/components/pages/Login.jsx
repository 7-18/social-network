import { Login_Template } from "../templates/Login_Template"
import '../../styles/_login.css'
import { Copy } from "../UI/molecules/Copy"

export const Login = () => {
  return (
    <>
      <Login_Template />
      <Copy />
    </>
  )
}