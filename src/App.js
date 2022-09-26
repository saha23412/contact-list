import './index.scss';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, getUser, resetCurrentUser, deleteUser } from './features/user/userSlice';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Profile from './components/profile/profile';
function App() {
  const dispatch = useDispatch()
  const [searchValue, setSearchValue] = useState('');
  const [invitesId, setInvitesId] = useState([]);
  const [success, setSuccess] = useState(false);
  const onClickInvite = (id) => {
    if (invitesId.includes(id)) {
      setInvitesId(prev => prev.filter(_id => _id !== id))
    } else {
      setInvitesId(prev => [...prev, id])
    }
  }

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value.toLowerCase())
  }
  const onClickSendInvites = () => {
    setSuccess(true)
  }
  const deleteUserById = () => {
    dispatch(deleteUser())
  }
  const onClickSendInvitesBack = () => {
    setSearchValue('')
    setInvitesId([])
    setSuccess(false)
  }
  const selectorRedux = useSelector(state => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
    currentUser: state.users.currentUser,
  }));

  const getUserById = useCallback((id) => {
    dispatch(getUser(id))
  }, [dispatch])
  const resetActualUser = () => {
    dispatch(resetCurrentUser())
  }
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch]);
  return (
    <Routes>
      <Route path='/' element={<Homepage
        success={success}
        invitesLength={invitesId.length}
        onClickSendInvitesBack={onClickSendInvitesBack}
        getUserById={getUserById}
        onClickSendInvites={onClickSendInvites}
        onChangeSearchValue={onChangeSearchValue}
        searchValue={searchValue}
        users={selectorRedux.users}
        loading={selectorRedux.loading}
        invitesId={invitesId}
        onClickInvite={onClickInvite}
      />} />
      <Route path='user/:id' element={<Profile
        path={'/'}
        deleteUserById={deleteUserById}
        resetActualUser={resetActualUser}
        getUserById={getUserById}
        currentUser={selectorRedux.currentUser}
        loading={selectorRedux.loading}

      />} />
    </Routes>
  );
}

export default App;
