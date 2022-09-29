import { useNavigate } from "react-router-dom"

export const Navigation = () => {
  const navigate = useNavigate()
  return (
    <div className="navigation">
      <div>
        <a onClick={() => navigate("/")}>Posts</a>
        <a onClick={() => navigate("/users")}>Users</a>
      </div>
    </div>
  )
}