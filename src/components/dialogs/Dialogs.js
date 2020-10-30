import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

function Dialogs(props){
    let dialogsElements = props.state.dialogsData.map(
        el => <DialogItem key = {el.id} name={el.name} id={el.id}/>
    );
    let messageElements = props.state.messagesData.map(
        el => <Message key = {el.id} message={el.message} isYour = {el.your}/>
    );
    // получил доступ к textarea
    let addTextMessage = React.createRef();


    // отслеживаю изменения в textarea
    let updateTextMessage = () => {
        let text = addTextMessage.current.value;
        props.updateTextMessage(text) // вызываю функцию updateTextMessageActionCreator, передаю ей значение текстового поля(let text)
    };                                //и тип по умолчанию из dialogs-reduser.js, и потом передаю методу dispatch в файл state.js

    // добавляю новое сообщение с state и перерисовываю страницу
    let AddMessage = () => {
        props.AddMessage() //вызываю функцию updateTextMessageActionCreator из dialogs-reducer.js,
    };                     //передаю её значения методу dispatch в файл state.js

    return(
        <div className={classes.dialogs_wrap}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div className={classes.newMessage}>
                    <textarea
                        onChange = {updateTextMessage}
                        ref={addTextMessage} 
                        placeholder="new message"
                        value = {props.state.newMessageText}
                        className= {classes.newMessageInput}
                    />
                    <input onClick = {AddMessage} value='send message' type='submit' className= {'button ' + classes.button}/>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;