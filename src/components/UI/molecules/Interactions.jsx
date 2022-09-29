import { Interaction } from "../atoms/Interaction"

export const Interactions = ({ likes }) => {
  return (
    <div className="data">
      <Interaction src="like" quantity={likes} />
      <Interaction src="comment" quantity="5" />
    </div>
  )
}