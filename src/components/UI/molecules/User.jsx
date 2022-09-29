import { Profile } from "../atoms/Profile"
import { Username } from "../atoms/Username"
import { Logout } from "../atoms/Logout"
import { useEffect, useState } from "react"
import { auth } from "../../../_config"

export const User = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setProfile(user);
    }
  }, []);

  return (
    <div className="user">
      <div>
        <Username name={profile?.displayName} />
        <Logout />
      </div>
      <Profile src={profile?.photoURL} />
    </div>
  )
}