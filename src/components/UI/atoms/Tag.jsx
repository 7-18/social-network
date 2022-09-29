export const Tag = ({ tag, filter }) => {
  return (
    <button onClick={() => filter(tag)}>{tag}</button>
  )
}