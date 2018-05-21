import { Component } from "inferno";

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = { value: props.value };
    }

  handleChange = event => {
      this.setState({ value: event.target.value });
  };

  render() {
      return <input type="text" value={this.state.value} onInput={this.handleChange} />;
  }
}

export default InputField;
