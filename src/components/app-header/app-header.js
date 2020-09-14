import React from "react";
import './app-header.css';

const AppHeader = ({todo, done}) => {
  return (
      <div className='app-header'>
        <h1>Список дел</h1>
        <h2>Осталось дел: {todo}, сделано: {done}. </h2>
      </div>
   );
};
  export default AppHeader;
