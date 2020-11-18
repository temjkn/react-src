import React from 'react';
import classes from './Login.module.css';
import { Form, Field } from 'react-final-form'
import { loginTHUNK } from '../../redux/auth-reduser';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const minValue = min => value =>isNaN(value) || value.lenght >= min ? undefined : `Should be longer than ${min}`;

const LoginForm = (props) => (
    <Form
        onSubmit={props.onSubmit}
        validate={values => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors
            }}
        render={({ handleSubmit}) => (
            <form onSubmit={handleSubmit} className={classes.formLogin}>
                <Field name="email">
                    {({ input, meta }) => (
                    <>
                        <input {...input} type="text" placeholder="email" />
                        {(meta.error || meta.submitError) && meta.touched && (<span>{meta.error || meta.submitError}</span>
                        )}
                    </>
                    )}
                </Field>
                <Field name="password"
                // validate={minValue(2)}
                >
                    {({ input, meta }) => (
                    <>
                        <input {...input} type="text" placeholder="password" />
                        {(meta.error || meta.submitError) && meta.touched && (<span>{meta.error || meta.submitError}</span>
                        )}
                    </>
                    )}
                </Field>
                {/* <Field name="login" component="input" placeholder="login"></Field> */}
                {/* <Field name="password" component="input" placeholder="password" /> */}
                <label htmlFor="rememberMe">
                    <Field id="rememberMe" name="rememberMe" component="input" type="checkbox" />
                    remenberMe
                </label>
                <span style={{ color: 'red' }}>{props.messageError}</span>
                <button type="submit">Login</button>
            </form>
        )}
    />
)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginTHUNK(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    console.log(props)
    return (
        <>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit} messageError = {props.messageError}/>
        </>
    );
}
let mapStateToProps = state => ({
    isAuth : state.auth.isAuth,
    messageError : state.auth.messageError
})
export default connect(mapStateToProps, {loginTHUNK})(Login);