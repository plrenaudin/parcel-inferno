import { render } from "inferno";
import Button from ".";

it("renders without crashing", () => {
  const div = document.createElement("div");
  expect(render(<Button label={"test label"} />, div).dom).toMatchSnapshot();
});
