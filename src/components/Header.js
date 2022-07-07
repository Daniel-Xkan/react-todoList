import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            { showAdd ===true ? <Button color = 'red' text = 'Close' onClick={onAdd}/> 
            : <Button color = 'green' text = 'Add' onClick={onAdd}/>  }
        </header>
        
    )
}

Header.defaultProps = {
    title: 'Todo List'
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header
