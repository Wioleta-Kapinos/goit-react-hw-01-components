import css from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <>
            <ul className="friend-list">
                {friends.map((friend) => (
                    <FriendListItem 
                        key={friend.id}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                    />
                ))}
            </ul>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool
        })
    )
}

export default FriendList;