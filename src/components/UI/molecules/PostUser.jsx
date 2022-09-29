import { Profile } from "../atoms/Profile";
import { Username } from "../atoms/Username";
import '../../../styles/_posts.css'
import { Text } from "../atoms/Text";

export const PostUser = ({ text, image, name }) => {
  return (
    <div className="post">
      <div>
        <Profile src={image} prop="post_profile" />
      </div>
      <div className="user_info">
        <Username name={name} prop="post_user" />
        <Text text={text} />
      </div>
    </div>
  )
}