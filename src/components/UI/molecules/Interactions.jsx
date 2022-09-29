import { Interaction } from "../atoms/Interaction"

export const Interactions = ({ likes, comments, commentsData }) => {
  return (
    <div className="data">
      <Interaction src="like" quantity={likes} />
      <Interaction src="comment" quantity={comments} commentsData={commentsData} />
    </div>
  )
}