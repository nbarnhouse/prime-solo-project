import PropTypes from 'prop-types';

export default function BasicButton({ buttonText, value, type }) {
  return (
    <div>
      <button className="btn" type={type} value={value}>
        {buttonText}
      </button>
    </div>
  );
}

BasicButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
