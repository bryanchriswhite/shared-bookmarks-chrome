import React from 'react';
import moment from 'moment';

const INDENT_PADDING = 20;

class BookmarkNode extends React.Component {
  constructor(props) {
    super(props);
    const {root, expanded} = props;
    const expandedOverride = (root !== 'undefined' && root) || (expanded !== 'undefined' && expanded)

    this.state = {
      expanded: expandedOverride ? expandedOverride : false
    }
  }

  toggle(expanded) {
    // console.log(`toggling id: ${this.props.id}`);
    if (typeof(expanded) !== 'undefined') {
      return this.setState({expanded: true});
    }

    this.setState({expanded});
  }

  render() {
    const {children, title, url, dateAdded, root, indent} = this.props;
    const {expanded} = this.state;
    const nextIndent = !indent ? 1 : indent + 1;

    console.log('indent: ', indent)
    console.log('next indent: ', nextIndent)
    console.log('indent padding: ', INDENT_PADDING)

    return (
      <div className="node" style={{paddingLeft: `${INDENT_PADDING * (indent || 1 - 1)}px`}} onClick={this.toggle.bind(this)}>
        {nodeMarkup({title, url, dateAdded, hidden: root, indent})}
        {childMarkup({children, hidden: !root && expanded, indent: nextIndent})}
      </div>
    )
  }
}

function nodeMarkup({title, url, dateAdded, hidden, indent}) {
  // console.log('rendering node markup!')
  return (
    <span style={{display: hidden ? 'none' : 'initial' }}>
        <div className="title">{title}</div>
        <div className="url">{url}</div>
        <div className="date-added">{moment(dateAdded).format('MMM DD, YYYY')}</div>
    </span>
  )
}

function childMarkup({children, hidden, indent}) {
  // console.log('!this.expanded || !children || children.length === 0')
  // console.log(!this.expanded)
  // console.log(children)
  // console.log(children.length === 0)
  if (!children || children.length === 0) return;

  console.log('child indent: ', indent)
  // console.log('rendering children!');
  return (
    <div className="children" style={{display: hidden ? 'none': 'initial'}}>
      {children.map(bookmark => {
        return (
          <BookmarkNode key={bookmark.id} indent={indent} {...bookmark} />
        )
      })}
    </div>
  )
}

export default BookmarkNode;