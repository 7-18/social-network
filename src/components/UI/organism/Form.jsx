import { Button } from "../atoms/Button"
import { Google } from "../atoms/Google"
import { Label } from "../molecules/Label"
import { OR } from "../molecules/OR"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../../helpers/hooks/useForm"
import { useDispatch } from "react-redux"
import { LOGIN_USER_WITH_EMAIL, REGISTER_USER_WITH_EMAIL } from "../../../redux/user.action"

export const Form = ({ formType }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formValues, handleChange, reset] = useForm({
    username: "",
    email: "",
    password: ""
  })

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    dispatch(LOGIN_USER_WITH_EMAIL(formValues.email, formValues.password))
    reset()
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault()
    dispatch(REGISTER_USER_WITH_EMAIL(formValues.username, formValues.email, formValues.password))
    reset()
  }

  return (
    <>
      {formType === "login" ? (
        <form onSubmit={handleSubmitLogin}>
          <h3>SocialNet</h3>
          <Label type="email" text="Email" name="email" placeholder="Enter your email" onChange={handleChange} value={formValues.email} />
          <Label type="password" text="Password" name="password" placeholder="Enter your password" onChange={handleChange} value={formValues.password} />
          <Button text="Login" handleSubmit={handleSubmitLogin} />
          <OR />
          <Google />
          <div className="question">
            <span>You don't have account? <a onClick={() => navigate('/accounts/sign-up')}>Sign up</a></span>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmitRegister}>
          <h3>SocialNet</h3>
          <Label type="text" text="Name and lastname" name="username" placeholder="Enter your name" onChange={handleChange} value={formValues.name} />
          <Label type="email" text="Email" name="email" placeholder="Enter your email" onChange={handleChange} value={formValues.email} />
          <Label type="password" text="Password" name="password" placeholder="Create your password" onChange={handleChange} value={formValues.password} />
          <Button text="Sign up" handleSubmit={handleSubmitRegister} />
          <OR />
          <Google />
          <div className="question">
            <span>Do you already have an account? <a onClick={() => navigate('/')}>Login</a></span>
          </div>
        </form>
      )}
    </>
  )
}