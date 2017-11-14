import React from 'react';
import { Field, reduxForm} from 'redux-form';

class PostsNew extends React.Component{
    renderField(field){
        return(
            <div className="form-group">
                <label>{field.label}</label>
                <input type="text" className="form-control"
                    {...field.input} />
                {field.meta.error}
            </div>
        );
    }
    render(){
        return(
            <div>
                <form>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField} 
                    />
                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField} 
                    />
                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField} 
                    />
                </form>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories!";
    }
    if (!values.content) {
        errors.content = "Enter some content!";
    }
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);

