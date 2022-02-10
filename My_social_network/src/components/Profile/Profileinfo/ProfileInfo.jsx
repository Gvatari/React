import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (<div>
    <div>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjLE9Ylr4f4BXaJfXkLC0YGydJDZVQoxK0Dg&usqp=CAU' alt='' />
    </div>
    <div className={s.discriptionBlock}>
      ava + description
    </div>
  </div>
  )
}

export default ProfileInfo;