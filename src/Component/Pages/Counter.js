import React, { useState } from 'react'
import { MDBIcon } from 'mdbreact';
import b from './Login/b.jpg'
import like from '../Images/like.png'
import dislike from '../Images/dislike.jpg'
import { connect } from 'react-redux';
import store from '../../Redux/Store';
import increment from '../../Redux/Action/myAction';
import { useSelector, useDispatch } from 'react-redux'
//import { createStore } from 'redux'
import { Provider } from 'react-redux';
import AuthLayout from '../AuthLayout';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

function Counter(props) {
	const history = useHistory();
	const dispatch = useDispatch();
	//const initialValue = 0
	//const [count, setCount] = useState(initialValue)
	const data = store.getState();

	const change = () => {
		localStorage.setItem("status", false)
		history.push("/");
	}
	return (
		<AuthLayout>
			<center>

				Count: {(props.count)}
				<p>
					<img src={like} alt="image" height="50px" onClick={() => { props.changeAdd(props.count) }} />
					{/* <img src={like} alt="image" height="50px" onClick={()=> dispatch(increment())} /> */}
					<img src={dislike} alt="image" height="50px" onClick={() => props.changeDec(props.count)} />
					{/* { localStorage.setItem("counterValue", parseInt(props.count)) } */}

				</p>
				<Button onClick={change}>Logout</Button>
			</center>
		</AuthLayout>
	)
}

const mapStateToProps = (state) => {
	return {
		count: state.count
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeAdd: (count) => { dispatch({ type: "Increment", payload: 1 }) },
		changeDec: (count) => { dispatch({ type: "Decrement", payload: 1 }) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);