import './invited.scss'
const Invited = ({ children, userId, onClickInvite }) => {
    return (
        <div className="invited" onClick={() => onClickInvite(userId)}>
            {children}
        </div>
    )
}

export default Invited