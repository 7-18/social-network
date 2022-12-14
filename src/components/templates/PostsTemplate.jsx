import { useEffect, useState } from "react"
import { getPosts } from "../../services/api"
import { Spinner } from "../UI/atoms/Spinner"
import { PostUser } from "../UI/molecules/PostUser"
import { Post } from "../UI/organism/Post"

export const PostsTemplate = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(res => setPosts(res.data))
  }, [])

  if (posts.length === 0) return <Spinner />

  return (
    <div className="container">
      <div className="posts">
        {posts?.map(post => (
          <div className="post-container" key={post.id}>
            <PostUser name={post.owner.firstName + " " + post.owner.lastName} image={post.owner.picture} text={post.text} userData={post.owner.id} />
            <Post content={post.image} likes={post.likes} tags={post.tags} sP={setPosts} postId={post.id} />
          </div>
        ))}
      </div>
    </div>
  )
}