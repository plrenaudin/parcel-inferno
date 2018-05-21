import { render } from "inferno";
import InputField from ".";

it("renders without crashing", () => {
    const div = document.createElement("div");

    expect(render(<InputField value={"test value"} />, div).dom).toMatchSnapshot();
});
