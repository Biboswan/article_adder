import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions/index.js';
//reduxForm acts as a connect and pass state to reducer automatically
class PostNew extends Component {
	
    renderField(field) {
    	const { meta: { touched, error } } = field; //touched=meta.touched
    	const className = `form-group ${touched && error? 'has-danger': ''}`;
    	return (
    		<div  className={className}>
    			<label>{field.label}</label>
    			<input className="form-control"
    				type="text"
    				{...field.input} //no need to write onChange=this.... or onFocus,<Field> takes care of rendering
    			/>
    			<div className="text-help">
    				{touched? error: ''}
    			</div>
    		</div>
    	);
    }
    
    onSubmit(values) {
    	this.props.createPost(values, ()=> {
    		this.props.history.push('/');
    	});

    }

	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
				<Field
					label="Title For Post"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Categories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {

	const errors = {} //error empty => form is fine to submit
	
	if (!values.title) {
		errors.title = "Enter a title";
	}
	if(!values.categories) {
		errors.categories = "Enter some categories";
	}
	if(!values.content) {
		errors.content = "Enter content";
	}

	return errors;
}


export default reduxForm({
	validate,
 	form: 'PostsNewForm' //has to be a unique string,like name of a form
 })(
 	connect(null,{ createPost })(PostNew)
 	);


 { /* Whenever form is submitted, first validate function is called from 
 redux side.If things are ok (no error) then our defined OnSubmit function is called */ }

 { /* After execution of validate function , if suppose error occurs in title field ,if 
 starts finds Field named title then propagates the error message */ }

