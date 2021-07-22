import Button from './Button'
import PropTypes from 'prop-types'


const Header = ({title, onAddTask}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button text='Add' onClick={onAddTask}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Reminders'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
