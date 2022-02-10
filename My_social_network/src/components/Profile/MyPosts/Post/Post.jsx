import s from './Post.module.css';

const Post = (props) => {

  return (
    <div className={s.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJF7LAdiF7JlRs24nLsBKz7nWamkcdXPODQ&usqp=CAU' alt='' />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  )
}

export default Post;