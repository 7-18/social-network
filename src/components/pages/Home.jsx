import { useDispatch } from "react-redux"
import { LOGOUT_USER_FIREBASE } from "../../redux/user.action"

export const Home = () => {
  const dispatch = useDispatch()
  return (
    <>
      <div>
        Hola
      </div>
      <button onClick={() => dispatch(LOGOUT_USER_FIREBASE())}>
        Desconectar
      </button>
    </>
  )
}