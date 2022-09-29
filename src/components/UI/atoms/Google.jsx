import { useDispatch } from "react-redux"
import { LOGIN_WITH_GOOGLE } from "../../../redux/user.action"
import google from "/google.webp"

export const Google = () => {
  const dispatch = useDispatch()
  return (
    <button className="google" onClick={() => dispatch(LOGIN_WITH_GOOGLE())}>
      <img src={google} />
      <span>Login with Google</span>
    </button>
  )
}