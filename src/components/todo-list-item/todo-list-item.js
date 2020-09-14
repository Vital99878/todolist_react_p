import React, {Component} from "react";
import './todo-list-item.css';

export default class TodoListItem extends Component{

  render() {
    const {label = false, done, important, on1, onToggleDone, onToggleImportant} = this.props;//см как работает destructing
    let classNames = 'todo-list-item';
    if( done ) {
      classNames += ' done'; // добавление класса
    }
    if( important ) {
      classNames += ' important';
    }

    return (
         <span className= {classNames}>
          <span
              className='todo-list-item-label'
              // style={style}
              onClick={ onToggleDone }>
              {label}
          </span>
          <button type="button"
                  className='btn btn-outline-success btn-sm float-right'
                  onClick={ onToggleImportant }
            >i</button>
          <button className='btn btn-outline-danger btn-sm float-right'
                  onClick={ on1 }>
            <i className="fa fa-trash-o"/>
           </button>
        </span>
    );
  }

}



