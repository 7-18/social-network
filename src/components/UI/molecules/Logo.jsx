import { Profile } from '../atoms/Profile'
import logo from "/favicon.ico"

export const Logo = () => {
  return (
    <div className="logo">
      <Profile src={logo} />
      <a>SocialNet</a>
    </div>
  )
}