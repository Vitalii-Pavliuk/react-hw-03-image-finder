import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchValue: '',
  };

  handleFormSubmit = value => {
    this.setState({ searchValue: value });
  };

  render() {
    return (
      <div style={{ fontSize: 40, color: '#010101'  }}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchValue={this.state.searchValue} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
