import propTypes from "prop-types"
import './error-message.scss'
const ErrorMessage = ({ message }) => {
    return (
        <div className="error-message">
            <p id="error-message-text">{message}</p>
        </div>
    )
}
ErrorMessage.propTypes = {
    message: propTypes.string.isRequired
}
export default ErrorMessage