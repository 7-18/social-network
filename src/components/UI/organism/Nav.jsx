import { Logo } from "../molecules/Logo"
import { Navigation } from "../molecules/Navigation"
import { User } from "../molecules/User"
import '../../../styles/_profile.css'

export const Nav = () => {
  return (
    <header>
      <div className="nav">
        <Logo />
        <Navigation />
        <User />
      </div>
    </header>
  )
}