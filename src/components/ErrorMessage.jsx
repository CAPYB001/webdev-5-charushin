import PropTypes from 'prop-types'

function ErrorMessage({ message }) {
  return <div className="status error">{message}</div>
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage

