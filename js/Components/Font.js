import React from "react";
import TodoList from './todolist.js';
import ReactDom from 'react-dom';

export default class Front extends React.Component {

	constructor(prop) {
		super(prop);
		this.state = {
			data:[],
			task:""
		}

		this._onSumit = this._onSumit.bind(this);
		this.delete = this.delete.bind(this);
	}

	_onSumit(task) {
		let taskR = ReactDom.findDOMNode(this.refs.task).value.trim();
		this.state.data.push(taskR);
		this.setState({data:this.state.data});
		ReactDom.findDOMNode(this.refs.task).value = "";
	}

	delete(index) {
		console.log(index);
		this.state.data.splice(index,1);
		this.setState({data:this.state.data});
	}

	render() {
		let list = this.state.data.map((elem, index) => {
            return (
                <TodoList key={index} index={index} task={elem} _delete={this.delete}/>
            )
		});

		return (
			<div className="container commentForm" onSubmit={this._onSumit}> 
			<div className="well col-lg-10 col-md-10 col-sm-10">   
			<form className="todoForm col-lg-9 col-md-9 col-sm-9">
			<ul>
		     {list}
			</ul>
			<div  className="input-group list">
			<input type="textarea"className="form-control col-lg-7 col-md-7 col-sm-7" id="task" placeholder="tasks....." ref="task" />
			<span className="input-group-btn"><button type="submit" className="btn btn-default">Save</button></span>
			</div>
			</form>
			<div className="clearfix"></div>
			</div>
			</div>
		)
	}
}
