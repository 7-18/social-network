import { memo } from 'react'
import '../../../styles/_modal.css'
import { Comment } from '../atoms/Comment'
import { Profile } from '../atoms/Profile'
import { Username } from '../atoms/Username'

export const Modal = memo(({ show, handleClose, commentsData }) => {
  return (
    <div>
      <div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className='modal_container'>
          <div className='modal_content'>
            <div className="modal_info">
              <h3 className='comments'>Comments</h3>
              {commentsData?.length !== 0 ? (
                <>
                  {commentsData.map(comment => (
                    <article className="card" key={comment.id}>
                      <div>
                        <div>
                          <Profile prop="modal_profile" src={comment.owner.picture} />
                        </div>
                        <div>
                          <Username name={comment.owner.firstName + " " + comment.owner.lastName} prop="modal_name" />
                        </div>
                      </div>
                      <div className='comment'>
                        <Comment comment={comment.message} />
                      </div>
                    </article>
                  ))}
                </>
              ) : (
                <div>
                  Don't have any comment in this post
                </div>
              )}
            </div>
            <span className="close" onClick={handleClose}>
              X
            </span>
          </div>
        </div>
      </div>
    </div>
  )
})