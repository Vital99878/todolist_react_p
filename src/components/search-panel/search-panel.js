import React, {Component} from "react";
import './search-panel.css';

export default class SearchPanel extends Component{

  state = {
    textSearch: ''
  };

  searchChange = (e) => {
    const textSearch = e.target.value;
    this.setState({textSearch});
    this.props.onSearch(textSearch);
  };

  render() {
    return(
        <input
            placeholder="поиск"
            className='form - control search-input'
            type='text'
            value={this.state.textSearch}
            onChange= {this.searchChange}/>
    )
  }
}


