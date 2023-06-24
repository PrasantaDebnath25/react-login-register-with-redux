import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class AuthLayout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isloggedIn: false
        }
    }
    componentDidMount() {
        // let data=JSON.parse(localStorage.getItem("status"));
        // if(data){
        //     this.setState({
        //         isloggedIn : true
        //     })
        //     //localStorage.setItem("status", false);

        // }
    }
    render() {
        let data = JSON.parse(localStorage.getItem("status"));
        if (!data) {
            return <Redirect to="/" />
        }
        return (
            this.props.children
        );
    }
}

export default AuthLayout;