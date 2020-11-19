import React, {useState} from 'react';
import { useEffect } from 'react';

const ProfileStatusHook = (props) => {
    // тот же ProfileStatus, но с использованием хука useState()
    let [editMode, setEditMode] = useState(false); // ключ editMode со значением false, setEditMode - функция для переключения значения
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{ //исправляю баг со значением статуса( поле со статусом остается пустым, сразу после его прихода)
        setStatus(props.status)
    },[props.status]); // условие для useEffect - статус пришел - запиши в локальный стэйт

    const activateEditMode = () => {
        setEditMode(true); // переключение значения
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.updateStatusTHUNK(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
    return(
        <div>
            {editMode ?
                <input autoFocus = {true} onChange = {onStatusChange} onBlur = {deActivateEditMode} value = {status}/> :
                <span onClick = {activateEditMode}>{props.status || '-------'}</span>
            }
        </div>
    )
}
export default ProfileStatusHook;