import React from 'react'
import '../../index.scss'
import Success from './../succes/succes';
import Users from './../users/users';
import propTypes from 'prop-types';
const Homepage = ({ success, invitesLength,
    onClickSendInvitesBack, getUserById,
    onClickSendInvites, onChangeSearchValue,
    searchValue, users, loading, invitesId,
    onClickInvite
}) => {
    return (
        <div className='App'>
            {
                success
                    ? <Success
                        count={invitesLength}
                        onClickSendInvitesBack={onClickSendInvitesBack}
                    />
                    : <Users
                        getUserById={getUserById}
                        onClickSendInvites={onClickSendInvites}
                        onChangeSearchValue={onChangeSearchValue}
                        searchValue={searchValue}
                        users={users}
                        loading={loading}
                        invitesId={invitesId}
                        onClickInvite={onClickInvite}
                    />
            }
        </div>
    )
}
Homepage.propTypes = {
    success: propTypes.bool,
    invitesLength: propTypes.number,
    onClickSendInvitesBack: propTypes.func,
    getUserById: propTypes.func,
    onChangeSearchValue: propTypes.func,
    searchValue: propTypes.string,
    users: propTypes.arrayOf(propTypes.object),
    loading: propTypes.bool,
    invitesId: propTypes.arrayOf(propTypes.number),
    onClickInvite: propTypes.func,

}
Homepage.defaultProps = {
    success: false,
    invitesLength: 0,
    onClickSendInvitesBack: () => { },
    getUserById: () => { },
    onChangeSearchValue: () => { },
    searchValue: '',
    users: [],
    loading: false,
    invitesId: [],
    onClickInvite: () => { },

}
export default Homepage