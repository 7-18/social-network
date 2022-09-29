export const Profile = ({ src, prop }) => {
  return (
    <picture className={prop}>
      <img src={src} />
    </picture>
  )
}