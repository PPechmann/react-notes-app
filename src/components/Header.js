

const Header = ({handleDarkMode}) => {
    return (
        <div className="header">
            <h1>Notes</h1>
            <button onClick={() => handleDarkMode((prevDarkMode) => !prevDarkMode)} className="save">Toggle DarkMode</button>
        </div>
    )
}

export default Header