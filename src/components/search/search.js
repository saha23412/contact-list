import propTypes from 'prop-types';
const Search = ({ searchValue, onChangeSearchValue, placeholderText }) => {
    return (
        <div className="search">
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
                type="text" value={searchValue}
                placeholder={`Найти ${placeholderText}...`}
                onChange={onChangeSearchValue}
            />
        </div>
    )
}
Search.propTypes = {
    searchValue: propTypes.string.isRequired,
    onChangeSearchValue: propTypes.func.isRequired,
    placeholderText: propTypes.string,
}
Search.defaultProp = {
    placeholderText: ''
}
export default Search