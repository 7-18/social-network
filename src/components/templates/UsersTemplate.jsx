import { useEffect, useState } from "react"
import { getUsers } from "../../services/api"
import { PostUser } from "../UI/molecules/PostUser"
import { Post } from "../UI/organism/Post"

export const UsersTemplate = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then(res => setUsers(res.data))
  }, [])


  return (
    <div className="container">
      <div className="all_users">
        {users?.map(post => (
          <div className="post-container" key={post.id}>
            <PostUser name={post.firstName + " " + post.lastName} image={post.picture} text={post.id} />
          </div>
        ))}
      </div>
    </div>
  )
}