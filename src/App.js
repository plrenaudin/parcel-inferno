import { Component } from "inferno";
import Button from "./components/Button";
import InputField from "./components/InputField";

class App extends Component {
  onClick = () => {
    alert(this.input.state.value); // eslint-disable-line no-alert
  };

  render() {
    return (
      <div class="content">
        <h1>Proof of concept</h1>
        <InputField value="toto" ref={el => (this.input = el)} />
        <Button onClick={this.onClick} label="push" />
      </div>
    );
  }
}

export default App;
