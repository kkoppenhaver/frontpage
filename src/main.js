'use strict';
var React = require('react');
var _ = require('lodash');
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
var AddRemoveLayout = React.createClass({
  getDefaultProps() {
    return {
      className: "layout",
      cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
      rowHeight: 100,
      isDraggable: true,
      isResizable: true,
    };
  },

  getInitialState() {
    return {
      items: [0, 1, 2, 3].map(function(i, key, list) {
        return {i: i, x: i * 3, y: 0, w: 3, h: 5};
      }),
      newCounter: 0
    };
  },

  createElement(el) {
    var removeStyle = {
      position: 'absolute',
      right: '2px',
      top: 0,
      cursor: 'pointer'
    };
    var i = el.add ? '+' : el.i;
    return (
      <div className="card-wrapper {el.add ? 'add-block' : ''}" key={i} _grid={el}>
        <div className="card">
          <div className="front">
            <h1>Column</h1>
            <hr/>
            <h3>Headline</h3>
            <div className="author">by john doe</div>
            <div className="publication">frontpage news daily</div>

            <div className="content">
              Visiblecontent
            </div>

            <span className="continue"><a href="#">Continue reading</a> or </span><a href="#" className="read-more" target="_blank">Check out the full story</a>

            <div className="full-story">
              Rest of the story content
            </div>

            <div className="settings" onClick={this.settingsFlip.bind(this, i)}><i className="fa fa-gear"></i></div>
          </div>
          <div className="back">
            <h3>Settings</h3>
            <hr/>
            <label>Column Name
              <select>
                <option value="on-the-hill">On the Hill</option>
                <option value="tech-corner">Tech Corner</option>
              </select>
            </label>

            <label>Update:
              <select>
                <option value="5">Every 5 minutes</option>
                <option value="15">Every 15 minutes</option>
              </select>
            </label>
            <button className="done">Done</button>
          </div>
        </div>
      </div>
    );
  },

  settingsFlip(cardIndex, event) {
    $('.card-wrapper').eq(cardIndex).addClass('flip');
    event.preventDefault()
  },
  doneFlip(cardIndex, event){
    alert('doneFlip!');
    $('.card-wrapper').eq(i).removeClass('flip');
  },

  onAddItem() {
    console.log('adding', 'n' + this.state.newCounter);
    this.setState({
      // Add a new item. It must have a unique key!
      items: this.state.items.concat({
        i: 'n' + this.state.newCounter,
        x: this.state.items.length * 2 % (this.state.cols || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2
      }),
      // Increment the counter to ensure key is always unique.
      newCounter: this.state.newCounter + 1
    });
  },

  // We're using the cols coming back from this to calculate where to add new items.
  onBreakpointChange(breakpoint, cols) {
    this.setState({
      breakpoint: breakpoint,
      cols: cols
    });
  },

  onRemoveItem(i) {
    console.log('removing', i);
    this.setState({items: _.reject(this.state.items, {i: i})});
  },

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
            {...this.props}>
          {this.createElement({i: 0, x: 0, y: 0, w: 12, h: 4})}
          {this.createElement({i: 1, x: 0, y: 0, w: 4, h: 5})}
          {this.createElement({i: 2, x: 4, y: 0, w: 4, h: 5})}
          {this.createElement({i: 3, x: 8, y: 0, w: 4, h: 5})}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = AddRemoveLayout;


React.render(<AddRemoveLayout/>, document.getElementById('app'))

React

