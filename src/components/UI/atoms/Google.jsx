import google from "/google.webp"

export const Google = () => {
  return (
    <button className="google">
      <img src={google} />
      <span>Iniciar sesión con Google</span>
    </button>
  )
}