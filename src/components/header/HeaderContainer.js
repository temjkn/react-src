import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reduser'
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount(){
        usersAPI.getAuth().then(data =>{
            if(data.resultCode === 0){ //если авторизован - отпавляю свои данные(ид, маил, логин)
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });

        // Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { // get запрос на сервер с настройками на подкючение куков вторым параметром
        //     withCredentials: true
        // })
        //     .then(response => {
        //         if(response.data.resultCode === 0){ //если авторизован - отпавляю свои данные(ид, маил, логин)
        //             let {id, login, email} = response.data.data;
        //             this.props.setAuthUserData(id, email, login);
        //         }
        //     });
    }
    render () {
        return(
            <Header {...this.props}/>
    )}
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);