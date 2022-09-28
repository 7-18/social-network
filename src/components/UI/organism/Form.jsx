import { Button } from "../atoms/Button"
import { Google } from "../atoms/Google"
import { Label } from "../molecules/Label"
import { OR } from "../molecules/OR"

export const Form = ({ form }) => {
  return (
    <form>
      <h3>SocialNet</h3>
      {form === "login" ? (
        <>
          <Label type="text" text="Email" name="email" placeholder="Enter your email" />
          <Label type="password" text="Password" name="password" placeholder="Enter your password" />
          <Button text="Login" />
          <OR />
          <Google />
          <div className="question">
            <span>You don't have account? <span>Sign up</span></span>
          </div>
        </>
      ) : (
        <>
          <Label type="text" text="Name and lastname" name="username" placeholder="Enter your name" />
          <Label type="email" text="Email" name="email" placeholder="Enter your email" />
          <Label type="password" text="Password" name="password" placeholder="Create your password" />
          <Button text="Sign up" />
          <OR />
          <Google />
          <div className="question">
            <span>Do you already have an account? <span>Login</span></span>
          </div>
        </>
      )}
    </form>
  )
}