import { Component } from "inferno";
import Button from "./components/Button";
import InputField from "./components/InputField";
import compose from "incompose/dist/compose";
import withState from "incompose/dist/withState";

class App extends Component {
  onClick = () => {
    alert(this.input.state.value); // eslint-disable-line no-alert
  };

  render() {
    return (
      <div class="content">
        <h1>Inferno Parcel boilerplate Example</h1>
        <InputField value="toto" ref={el => (this.input = el)} />
        <Button onClick={this.onClick} label="push" />
        <h3>{this.props.a}</h3>
      </div>
    );
  }
}

export default compose(withState("a", "setA", 999))(App);
