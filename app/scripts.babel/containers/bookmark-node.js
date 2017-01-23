import React from 'react';
import moment from 'moment';

class BookmarkNode extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    const {children, name, url, dateAdded} = this.props;

    return (
      <div className="node">
        <div className="name">{name}</div>
        <div className="url">{url}</div>
        <div className="date-added">{moment(dateAdded).format('MMM DD, YYYY')}</div>
        {renderChildren(children)}
      </div>
    )
  }
}

function renderChildren(children) {
  if (!children || children.length === 0) return;

  return (
    <div className="children">
      {children.map(bookmark => {
        return (
          <BookmarkNode key={bookmark.id} {...bookmark} />
        )
      })}
    </div>
  )
}

export default BookmarkNode;