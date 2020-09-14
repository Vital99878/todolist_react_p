import React, {Component} from "react";
import './item-add-form.css';

export default class ItemAddForm extends Component {

  render() {
    return (
        <form className='item-add-form d-flex container'
              onSubmit={this.onSubmit}>
          <input type='text'
                 className='form-control new'
                 placeholder='Новая заметка?'
                 onChange={this.onLabelChange}
                 value={this.state.label}/>
        </form>
    )
  }
  state ={
  label: ''
};
onLabelChange = (e) => {
  this.setState({
    label: e.target.value
  })
};
onSubmit = (e) => {
  e.preventDefault();
  this.props.addItem(this.state.label);
  this.state.label = '';
};
};

