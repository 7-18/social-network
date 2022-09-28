import { Input } from "../atoms/Input"
import { Small } from "../atoms/Small"

export const Label = ({ text, value, name, type, placeholder }) => {
  return (
    <div className="label-container">
      <label>
        <Small text={text} />
        <Input text={text} value={value} name={name} type={type} placeholder={placeholder} />
      </label>
    </div>
  )
}