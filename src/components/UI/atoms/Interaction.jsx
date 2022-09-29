import { useState } from "react"
import { Modal } from "../organism/Modal"
import comment from "/comment.svg"
import like from "/like.svg"

export const Interaction = ({ src, quantity, commentsData }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    window.scrollTo(0, 0)
  };

  return (
    <>
      {src === "like" ? (
        <button>
          <img src={like} />
          <small>{quantity}</small>
        </button>
      ) : (
        <>
          <button onClick={handleShow}>
            <img src={comment} />
            <small>{quantity}</small>
          </button>
          <Modal show={show} handleClose={handleClose} commentsData={commentsData} />
        </>
      )}
    </>
  )
}