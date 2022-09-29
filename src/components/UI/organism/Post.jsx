import { useEffect, useState } from "react"
import { getListCommentsByPost } from "../../../services/api"
import { Content } from "../atoms/Content"
import { Interactions } from "../molecules/Interactions"
import { Tags } from "../molecules/Tags"

export const Post = ({ content, tags, likes, sP, postId }) => {
  const [comments, setComments] = useState([])
  useEffect(() => {
    getListCommentsByPost(postId).then(res => setComments(res.data))
  }, [])
  
  return (
    <div className="post_info">
      <Content content={content} />
      <Tags tags={tags} sP={sP} />
      <Interactions likes={likes} comments={comments.length} commentsData={comments} />
    </div>
  )
}