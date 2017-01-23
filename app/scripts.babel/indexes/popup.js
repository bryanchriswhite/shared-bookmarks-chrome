'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkNode from '../containers/bookmark-node';
import Spinner from '../components/spinner'

const rootElement = document.getElementById('app');

ReactDOM.render(
  <Spinner />,
  rootElement
);

chrome.bookmarks.getTree(bookmarkTree => {
  ReactDOM.render(
    <BookmarkNode {...bookmarkTree[0].children[0]} root={true} />,
    rootElement
  );
});
