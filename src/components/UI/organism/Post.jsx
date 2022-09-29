import { Content } from "../atoms/Content"
import { Interactions } from "../molecules/Interactions"
import { Tags } from "../molecules/Tags"

export const Post = ({ content, tags, likes, sP }) => {
  return (
    <div className="post_info">
      <Content content={content} />
      <Tags tags={tags} sP={sP} />
      <Interactions likes={likes} />
    </div>
  )
}