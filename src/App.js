import InputField from "./components/InputField";
import Button from "./components/Button";
import { Component } from "inferno";

class App extends Component {
  onClick = e => {
    alert(this.input.state.value);
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
