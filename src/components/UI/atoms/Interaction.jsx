import comment from "/comment.svg"
import like from "/like.svg"

export const Interaction = ({ src, quantity }) => {
  return (
    <>
      <button>
        <img src={src === "like" ? like : comment} />
        <small>{quantity}</small>
      </button>
    </>
  )
}