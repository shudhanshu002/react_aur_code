import "./sidebar.css";
import ChatIcon from '@mui/icons-material/Chat';
import FeedIcon from '@mui/icons-material/Feed';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';


export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <FeedIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <ChatIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <GroupIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <BookmarkIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Bookmark</span>
                </li>
                <li className="sidebarListItem">
                    <HelpIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                    <WorkIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <EventIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <SchoolIcon className="sidebarIcon"/>
                    <span className="sizebarListItemText">Courses</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
                <li className="sidebarFriend">
                    <img src="https://images.pexels.com/photos/20150849/pexels-photo-20150849/free-photo-of-people-sitting-in-a-train.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">Rani mk</span>
                </li>
            </ul>
        </div>
    </div>
  );
}