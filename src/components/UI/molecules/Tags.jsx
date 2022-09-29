import { useEffect } from "react"
import { getPostsByTag } from "../../../services/api"
import { Tag } from "../atoms/Tag"

export const Tags = ({ tags, sP }) => {
  const filterByTag = (tag) => {
    getPostsByTag(tag).then((res) => sP(res.data))
  }

  return (
    <div className="tags">
      {tags.map(tag => (
        <Tag tag={tag} key={tag} filter={filterByTag} />
      ))}
    </div>
  )
}