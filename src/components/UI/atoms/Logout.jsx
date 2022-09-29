import { useDispatch } from "react-redux"
import { LOGOUT_USER_FIREBASE } from "../../../redux/user.action"

export const Logout = () => {
  const dispatch = useDispatch()
  return (
    <small onClick={() => dispatch(LOGOUT_USER_FIREBASE())}>
      Sign Out
    </small>
  )
}