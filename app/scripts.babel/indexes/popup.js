'use strict';

require('react');
require('react-dom');
require('./containers/bookmark-manager');

ReactDOM.render(
  <BookmarkManager />,
  document.getElementById('app')
);
