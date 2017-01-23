'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkNode from '../containers/bookmark-node';

chrome.bookmarks.getTree(bookmarkTree => {
  window.b = bookmarkTree;
  console.log(bookmarkTree);
  ReactDOM.render(
    <BookmarkNode {...bookmarkTree[0]} />,
    document.getElementById('app')
  );
});
