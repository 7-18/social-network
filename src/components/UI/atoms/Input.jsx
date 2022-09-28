export const Input = ({ text, name, value, type, placeholder }) => {
  return (
    <input aria-label={text} name={name} type={type} value={value} placeholder={placeholder} />
  )
}