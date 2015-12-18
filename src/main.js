'use strict';
var React = require('react');
var _ = require('lodash');
var ResponsiveReactGridLayout = require('react-grid-layout').Responsive;

var StoryCard = React.createClass({
  getInitialState: function() {
    return {isFlipped: 'false'};
  },
  onFlip: function(){
    console.log(this.state.isFlipped);
    this.setState({
      isFlipped : 'true'
    });
    console.log(this.state);
  },
  render(){
    return (
      <div className="card-wrapper" {...this.props}>
        <div className="card">
          <div className="front">
            <h1>Column</h1>
            <hr/>
            <h3>Headline</h3>
            <div className="author">by john doe</div>
            <div className="publication">frontpage news daily</div>

            <div className="content">
              {this.state.isFlipped}
            </div>

            <span className="continue"><a href="#">Continue reading</a> or </span><a href="#" className="read-more" target="_blank">Check out the full story</a>

            <div className="full-story">
              Rest of the story content
            </div>

            <div className="settings" onClick={this.onFlip}><i className="fa fa-gear"></i></div>
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
  }
});

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

  render() {
    return (
      <div>
        <ResponsiveReactGridLayout onLayoutChange={this.onLayoutChange} onBreakpointChange={this.onBreakpointChange}
            {...this.props}>
          <StoryCard key={1} _grid={{x: 0, y: 0, w: 12, h: 4, isDraggable: true, isResizable: true}}/>
          <StoryCard key={2} _grid={{x: 0, y: 4, w: 4, h: 6, isDraggable: true, isResizable: true}}/>
          <StoryCard key={3} _grid={{x: 4, y: 0, w: 4, h: 6, isDraggable: true, isResizable: true}}/>
          <StoryCard key={4} _grid={{x: 8, y: 0, w: 4, h: 6, isDraggable: true, isResizable: true}}/>
        </ResponsiveReactGridLayout>
      </div>
    );
  }
});

module.exports = AddRemoveLayout;


React.render(<AddRemoveLayout/>, document.getElementById('app'))