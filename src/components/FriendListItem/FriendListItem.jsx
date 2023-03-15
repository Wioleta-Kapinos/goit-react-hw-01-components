import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend, avatar, name, isOnline }) => {
    return (
        <li className={css.item}
            key={friend}>
            <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

export default FriendListItem;