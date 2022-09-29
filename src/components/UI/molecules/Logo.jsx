import { Profile } from '../atoms/Profile'
import logo from "/favicon.ico"
import { useNavigate } from "react-router-dom"

export const Logo = () => {
  const navigate = useNavigate()
  return (
    <div className="logo">
      <Profile src={logo} />
      <a onClick={() => navigate("/home")}>SocialNet</a>
    </div>
  )
}