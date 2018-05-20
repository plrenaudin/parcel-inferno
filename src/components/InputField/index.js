const input = e => console.log(e);

const InputField = ({ value }) => <input type="text" value={value} onInput={input} />;

export default InputField;
