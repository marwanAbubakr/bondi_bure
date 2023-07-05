import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost, deletePost, updatePost } from '../redux/postsSlice'
const Postes = () => {
  const [title, setTitle] = useState('')
  const [disc, setDisc] = useState('')
  const [updateTitle, setUpdateTitle] = useState('')
  const [updateDesc, setUpdateDisc] = useState('')
  const [edite, setEdite] = useState(false)
  const [id, setId] = useState(null)

  const dispatch = useDispatch()
  // state => to select Items from redux
  // state.postes => "name of reducer" the postes insert reducer and array insert postsSlice
  // console.log(dispatch(addPost({})))

  // dispatch(addPost(title))
  const postes = useSelector((state) => state.posts.array)
  return (
    <div className='postes-card'>
      <div className='form'>
        <input
          type='text'
          value={title}
          placeholder='Enter post Title'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type='text'
          placeholder='Enter post Disc'
          value={disc}
          onChange={(e) => setDisc(e.target.value)}
        />
        <button
          onClick={() => {
            if (title && disc !== '') {
              // if key tha same value ! wright just key wethout value
              dispatch(addPost({ id: postes.length + 1, title, disc }))
              setTitle('')
              setDisc('')
            } else return false
          }}
        >
          Add post
        </button>
      </div>
      <div className='posts'>
        {postes.length > 0
          ? postes.map((post) => (
              <div key={post.id} className='post'>
                <h2>{post.title}</h2>
                <p>{post.disc}</p>
                <button
                  // if yout wanna to make multiple function
                  onClick={() => {
                    setEdite(true)
                    setId(post.id)
                  }}
                >
                  edite
                </button>
                <button onClick={() => dispatch(deletePost({ id: post.id }))}>
                  delete
                </button>
                <br />
                {edite && id === post.id && (
                  <>
                    <input
                      type='text'
                      placeholder='update title'
                      onChange={(e) => setUpdateTitle(e.target.value)}
                    />
                    <input
                      type='text'
                      placeholder='update discription'
                      onChange={(e) => setUpdateDisc(e.target.value)}
                    />
                    <button
                      onClick={() => {
                        dispatch(
                          updatePost({
                            id: post.id,
                            title: updateTitle,
                            disc: updateDesc,
                          })
                        )
                        setEdite(false)
                      }}
                    >
                      update
                    </button>
                  </>
                )}
              </div>
            ))
          : 'there no postes to show '}
      </div>
    </div>
  )
}

export default Postes
