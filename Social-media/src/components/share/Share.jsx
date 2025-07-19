import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="https://images.pexels.com/photos/17245493/pexels-photo-17245493/free-photo-of-a-man-wearing-sunglasses-and-a-green-sweater.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="shareProfileImg" />
                <input 
                    placeholder="What's in your mind Safak?"
                    className='shareInput'
                />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                        <span className="shareOptionText">Photos or videos</span>
                    </div>
                    <div className="shareOption">
                        <LocalOfferIcon htmlColor='blue' className='shareIcon'/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <LocationOnIcon htmlColor='orange' className='shareIcon'/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <SentimentVerySatisfiedIcon htmlColor='goldenrod' className='shareIcon'/>
                        <span className="shareOptionText">Reactions</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share
