export const Button = ({ text, handleSubmit }) => {
  return (
    <button className="btn-action" onClick={handleSubmit}>
      {text}
    </button>
  )
}