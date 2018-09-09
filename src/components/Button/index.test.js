import Button from ".";
import { renderToSnapshot } from "inferno-test-utils";

it("renders without crashing", () => {
  expect(renderToSnapshot(<Button label={"test label"} />)).toMatchSnapshot();
});
