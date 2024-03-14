const formatDate = (date) => {
  return new Date(date).toLocaleTimeString();
};

function Avatar(props) {
  return <img src={props.user.avatarUrl} alt={props.user.name} />;
}

const UserInfor = (props) => {
  return (
    <div className='user-infor'>
      <Avatar user={props.user} />
      <div className='user-infor__name'>{props.user.name}</div>
    </div>
  );
};

function Comment(props) {
  return (
    <div className='comment'>
      <UserInfor user={props.author} />
      <div className='comment-text'>{props.text}</div>
      <div className='comment-date'>{formatDate(props.date)}</div>
    </div>
  );
}

export default Comment;
