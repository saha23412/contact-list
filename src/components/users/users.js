import React from 'react'
import User from './user/user';
import Skeleton from './skeleton/skeleton';
import propTypes from 'prop-types'
import Search from './../search/search';
import ErrorMessage from '../error-message/error-message';
import '../../index.scss'
const Users = ({ users, loading, searchValue, onChangeSearchValue, invitesId, onClickInvite, onClickSendInvites, getUserById }) => {
    return (
        <>
            <Search
                searchValue={searchValue}
                onChangeSearchValue={onChangeSearchValue}
                placeholderText={'пользователя'}
            />


            {loading ? (
                <div className="skeleton-list">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            ) : (
                <ul className="users-list">
                    { users.length>0
                    ?
                        users?.filter(user => {
                            const fullName = (`${user.first_name} ${user.last_name}`).toLowerCase();
                            return fullName.includes(searchValue)
                                || user.email.toLowerCase().includes(searchValue)
                        }).map(user => (
                            <User
                                path={'user/'}
                                getUserById={getUserById}
                                user={user}
                                key={user.id}
                                onClickInvite={onClickInvite}
                                isInvitesId={invitesId.includes(user.id)}
                            />))
                    :<div id='users-list-notifications'>
                        <p>Список контактов пуст...</p>
                    </div>
                    }
                </ul>
            )}
            {
                invitesId.length > 0
                    ? <button onClick={() => onClickSendInvites()} className="send-invite-btn">Отправить приглашение</button>
                    : <ErrorMessage message={'Добавьте пользователя, чтобы отправить приглашение'} />
            }

        </>
    )
}
Users.propTypes = {
    users: propTypes.arrayOf(propTypes.object),
    loading: propTypes.bool,
    searchValue: propTypes.string,
    onChangeSearchValue: propTypes.func,
    onClickInvite: propTypes.func,
    invitesId: propTypes.arrayOf(propTypes.number),
    onClickSendInvites: propTypes.func
}
Users.defaultProps = {
    users: [{}],
    loading: null,
    searchValue: '',
    onChangeSearchValue: () => { },
    onClickInvite: () => { },
    onClickSendInvites: () => { },
    invitesId: [],
}
export default Users