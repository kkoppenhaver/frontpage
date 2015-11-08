var React = window.React = require('react'); //expose for react-devtools

var ReactGridLayout = require('react-grid-layout');

var App = React.createClass({
    render: function(){
        return(
            <div>
                <h1>Hello React</h1>
            </div>
        );
    }
});

React.render(<App/>, document.getElementById('app'))