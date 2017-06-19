import React, {Component} from 'react';
import '../../static/style.css';
import findDOMNode from 'react-dom';

class TodoList extends Component {
	constructor() {
		super()
		this.state = {
			emphasized: false
		}
		this._delete = this._delete.bind(this);
		this._emphasize = this._emphasize.bind(this);
	}

	_delete() {
     this.props._delete(this.props.index);
	}

	_emphasize() {
    this.setState({emphasized: !this.state.emphasized});   
	}

	render() {
		console.log(this.state.emphasized);
		return (
			<li className={this.state.emphasized?"emphasized list-group-item ":" list-group-item"}>
			{this.props.task}<div className="pull-right"><span className="btn btn-xs btn-danger img-circle" onClick={this._delete}>X</span>
			<span className="btn btn-xs btn-success img-circle" onClick={this._emphasize}>V</span></div>
			</li>
			)
		}
	}

	export default TodoList;