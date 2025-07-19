import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function Post() {
  return (
    <div className='post'>
      <div className="postWrapper">
        <div className="postTop">
            <img src="https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="postProfileImg" />
            <span className="postUsername">Sudhanshu singh</span>
            <span className="postDate">5 days ago</span>
        </div>
        <div className="postTopRight">
            <MoreVertIcon/>
        </div>
        <div className="postCentre">
            <span className="postText">Hey first post :)</span>
            <img src="https://images.pexels.com/photos/10679204/pexels-photo-10679204.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="postImg" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                img
            </div>
        </div>
      </div>
    </div>
  )
}

export default Post
