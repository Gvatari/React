import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Alexey' },
        { id: 2, name: 'Petya' },
        { id: 3, name: 'Vasya' },
        { id: 4, name: 'Ivan' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you ?' },
        { id: 3, message: 'What is you name ?' }
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = messages.map(m => <Message message={m.message} id={m.id} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;