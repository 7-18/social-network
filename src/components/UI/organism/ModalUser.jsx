import { memo, useEffect, useState } from 'react'
import { getUser } from '../../../services/api'
import '../../../styles/_modal.css'
import { Comment } from '../atoms/Comment'
import { Profile } from '../atoms/Profile'

export const ModalUser = memo(({ show, handleClose, userData }) => {
  const [user, setUser] = useState([])

  useEffect(() => {
    getUser(userData).then(res => setUser(res))
  }, [])

  return (
    <div>
      <div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className='modal_container'>
          <div className='modal_content'>
            <span className="close" onClick={handleClose}>
              X
            </span>
            <div>
              <article style={{ padding: "5px 15px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Profile prop="modal_user" src={user?.picture} />
                <h3 className='comments'>{user?.title} {user?.firstName} {user?.lastName}</h3>
                <div>
                  <div>
                  </div>
                </div>
                <div className='comment'>
                  <div>
                    <b>- Email: </b><Comment comment={user?.email} />
                  </div>
                  <div>
                    <b>- Gender: </b><Comment comment={user?.gender} />
                  </div>
                  <div>
                    <b>- Phone: </b><Comment comment={user?.phone} />
                  </div>
                  <div>
                    <b>- Location: </b><Comment comment={user?.location?.city + ", " + user?.location?.country} />
                  </div>
                  <div>
                    <b>- Address: </b><Comment comment={user?.location?.state + ", " + user?.location?.street} />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})