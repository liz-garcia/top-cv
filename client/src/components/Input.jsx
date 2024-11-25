import PropTypes from "prop-types";

const Input = ({ name, value, onChange, ...rest }) => {
  return (
    <input
      {...rest}
      name={name}
      value={value}
      placeholder={name}
      className="mx-auto w-2/3 rounded-md py-1 text-center text-zinc-800 placeholder:text-center placeholder:italic placeholder:text-slate-400"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
