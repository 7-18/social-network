import { useParams } from "react-router-dom"
export const Profile = ({ src, prop, handleShow }) => {
  const { home } = useParams()
  return (
    <>
      {home === "home" ? (
        <picture className={prop} onClick={handleShow} style={{ cursor: "pointer" }}>
          <img src={src} />
        </picture>
      ) : (
        <picture className={prop}>
          <img src={src} />
        </picture>
      )}
    </>
  )
}