import { useEffect } from "react"
import { Link, useParams,useNavigate } from "react-router-dom"
import './profile.scss'
import '../../index.scss'
import propTypes from "prop-types";
import Home from './../icons/home';
import SkeletonProfile from "../users/skeleton/skeleton-profile";
const Profile = ({ currentUser, getUserById, path, loading, resetActualUser, deleteUserById }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        getUserById(id)
    }, [getUserById, id])
    return (
        <div className="App">
            {
                loading
                    ? <SkeletonProfile />
                    : (
                        <div className="profile">
                            <div className="profile-back">
                                <Link onClick={() => resetActualUser()} to={path}><Home /></Link>
                            </div>
                            <div className="profile-avatar">
                                <img src={currentUser.avatar} alt="avatar" />
                                <p>{currentUser.email}</p>
                            </div>
                            <div className="profile-info">
                                <p><span>Имя пользователя:</span>  {currentUser.first_name}</p>
                                <p><span>Фамилия пользователя:</span> {currentUser.last_name}</p>
                            </div>
                            <div className="profile-bth">
                                <button onClick={() => {
                                    deleteUserById()
                                    navigate('/')
                                }}>
                                    Удалить пользователя из контактов
                                </button>
                            </div>
                        </div>
                    )
            }
        </div>

    )
}
Profile.propTypes = {
    currentUser: propTypes.object,
    getUserById: propTypes.func,
    path: propTypes.string,
    loading: propTypes.bool,
    resetActualUser: propTypes.func,
    deleteUserById: propTypes.func
}
Profile.defaultProps = {
    currentUser: {},
    getUserById: () => { },
    path: '',
    loading: false,
    resetActualUser: () => { },
    deleteUserById: () => { }
}
export default Profile