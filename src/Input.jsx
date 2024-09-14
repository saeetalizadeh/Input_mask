const Input = ({ handleChange, hint }) => {
  return (
    <div className="input">
      <label htmlFor="input">{hint}</label>
      <input
        type="text"
        id="input"
        onChange={handleChange}
        placeholder="Enter City Name"
      />
    </div>
  );
};

export default Input;
