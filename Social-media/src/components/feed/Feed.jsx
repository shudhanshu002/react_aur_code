import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'

function Feed() {
  return (
    <div className='feed'>
      <Share />
      <Post />
    </div>
  )
}

export default Feed
