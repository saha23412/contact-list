import propTypes from "prop-types"
const Success = ({ count, onClickSendInvitesBack }) => {
    return (
        <div className="success-block">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/900px-Sign-check-icon.png" alt="succes" />
            <h3>Успешно!</h3>
            <p>{`${count === 1 ? '' : 'Всем'} ${count} пользовател${count === 1 ? 'ю' : 'ям'} отправлено приглашение.`}</p>
            <button onClick={() => onClickSendInvitesBack()} className="send-invite-btn">Назад</button>
        </div>
    )
}
Success.propTypes = {
    count: propTypes.number,
    onClickSendInvitesBack: propTypes.func,
}
Success.defaultProps = {
    count: 0,
    onClickSendInvitesBack: () => { },
}
export default Success