import React, {Component} from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from '../item-status-filter';
import IteAddForm from "../item-add-form";
import './app.css';

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Реакт'),
      this.createTodoItem('Выпить кофе'),
      this.createTodoItem('Купить жене сапоги')
        ],
    textSearch: '',
    filter: "All" //Active, All, Done
  };

  createTodoItem(label){
    return {
        label,
        important: false,
        id: this.maxId++,
        done: false}
  };
  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    this.setState(({todoData}) => {
      const newArray = [...todoData, newItem];
      return {todoData: newArray};
    });
  };
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const indx = todoData.findIndex((el) => el.id === id);
      const newArray = [
          ...todoData.slice(0, indx),
          ...todoData.slice(indx+1)
      ];
      return { todoData: newArray }
    });
  };
  toggleProperties(arr, id, propName){
      const indx = arr.findIndex((el) => el.id === id);// индекс заменяемого массива(из state)
      const oldItem = arr[indx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return [
        ...arr.slice(0, indx),
        newItem,
        ...arr.slice(indx+1)
      ];
  }
  onToggleDone = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperties(todoData, id, 'done')
      }
    })
  };
  onToggleImportant = (id) => {
    this.setState(({todoData}) => {
      return{
        todoData: this.toggleProperties(todoData, id, 'important')
      }
    })
  };
  search = (items, textSearch) => {
    if(textSearch.length === 0){
      return items;
    }
     return items.filter((item) => {
      return item.label
          .toLocaleLowerCase()
          .indexOf(textSearch.toLocaleLowerCase()) > -1;
    })
  };
  searchResult = (textSearch) => {
    this.setState({textSearch});
  };
  onFilterChange = (filter) => {
    this.setState({filter});
  };
  //<editor-fold desc="сделана без toggleProperties">
  // onToggleImportant = (id) => { //
  //   this.setState(({todoData}) => {
  //     const indx = todoData.findIndex((el) => el.id === id);
  //     const oldItem = todoData[indx];
  //     const newItem = {...oldItem, important: !oldItem.important};
  //     const newArray = [
  //       ...todoData.slice(0, indx),
  //       newItem,
  //       ...todoData.slice(indx+1)
  //     ];
  //     return {todoData: newArray};
  //   })
  // };
  //</editor-fold>

  filter = (items, filter) => {
    switch (filter) {
      case "All":
      return items;
      case "Active":
        return items.filter((item) => !item.done );
      case "Done":
        return items.filter((item) => {
         return item.done;
        });
      default:
        return items;
    }

  };

  render () {
    const {todoData, textSearch, filter} = this.state;
    const doneCount =  todoData.filter((el) => el.done).length;
    const todoCount = todoData.length - doneCount;
    const visibleList = this.filter(
      this.search(todoData, textSearch), filter);

    return (
        <div className='todo-app container'>
          <AppHeader todo={ todoCount } done = {doneCount}/>
          <div className='top-panel d-flex'>
            <SearchPanel
                onSearch={ this.searchResult }/>
            <ItemStatusFilter filter = {filter}
                              onFilterChange = {this.onFilterChange} />
          </div>
          <TodoList todos={ visibleList }
                    on2={ this.deleteItem }
                    onToggleImportant = {this.onToggleImportant}
                    onToggleDone = {this.onToggleDone}/>
          <IteAddForm addItem = { this.addItem }/>
      </div>
    );
  }
};

