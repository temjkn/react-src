import { addMessageActionCreator,updateTextMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// внизу функция созданная руками, connect()() делает тоже, но компактнее - передаю обьекты со state и dispatch и передаю нужной компоненте
// function DialogsContainer(props){

//     return(
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     // отслеживаю изменения в textarea
//                     let updateTextMessage = (text) => {
//                         store.dispatch(updateTextMessageActionCreator(text)) // вызываю функцию updateTextMessageActionCreator, передаю ей значение текстового поля(let text)
//                     };                                                       //и тип по умолчанию из dialogs-reduser.js, и потом передаю методу dispatch в файл state.js
                
//                     // добавляю новое сообщение с state и перерисовываю страницу
//                     let AddMessage = () => {
//                         store.dispatch(addMessageActionCreator()) //вызываю функцию updateTextMessageActionCreator из dialogs-reducer.js,
//                     };  
//                                                               //передаю её значения методу dispatch в файл state.js
//                     return <Dialogs
//                         state = {state.dialogsPage}
//                         updateTextMessage = {updateTextMessage} 
//                         AddMessage = {AddMessage}
//                         />
//                 }
//         }
//         </StoreContext.Consumer>
//     );
// }

let mapStateToProps = (state) => ({state : state.dialogsPage})

let mapDispatchToProps = (dispatch) => {
    return {
        updateTextMessage : (text) => {
            dispatch(updateTextMessageActionCreator(text))
        },
        AddMessage : () => {
            dispatch(addMessageActionCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;