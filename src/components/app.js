import React, { Component } from 'react';

import Booklist from '../containers/Book-list';
import BookDetail from '../containers/Book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <Booklist />
        <BookDetail />
      </div>
    );
  }
}
