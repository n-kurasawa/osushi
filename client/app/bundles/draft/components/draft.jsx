import PropTypes from 'prop-types';
import React from 'react';
import remark from 'remark';
import reactRenderer from 'remark-react';

export default class Draft extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      text: this.props.text,
    };
  }

  onChange = (e) => {
    this.setState({ text: e.target.value })
  };

  render() {
    return (
      <div>
        <div id="preview">
          {remark().use(reactRenderer).processSync(this.state.text, { breaks: false }).contents}
        </div>
        <hr />
        <form >
          <label htmlFor="text">
            Say hello to:
          </label>
          <textarea
            id="text"
            value={this.state.text}
            onChange={this.onChange} />
        </form>
      </div>
    );
  }
}