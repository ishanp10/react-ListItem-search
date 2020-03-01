import React, { Component } from 'react';
import './App.css';
import ItemList from './component/ItemList';
import ListSearch from './component/ListSearch'
import 'bootstrap/dist/css/bootstrap.min.css'


export default class App extends Component {
  render() {
    return (
      <div class="container ">
      <div class="row">
      <div class="col-sm bg-primary">
      <ListSearch />
      </div>
      <div class="col-sm bg-danger">
      <ItemList />
      </div>
      <div class="col-sm  bg-dark">
        One of three columns
      </div>
      </div>
       </div>    
    )
  }
}



