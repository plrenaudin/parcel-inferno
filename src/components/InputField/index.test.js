import InputField from ".";
import { renderToSnapshot } from "inferno-test-utils";

it("renders without crashing", () => {
  expect(renderToSnapshot(<InputField value={"test value"} />)).toMatchSnapshot();
});
