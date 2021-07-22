import PropTypes from 'prop-types'

const Button = ({text, color, onClick}) => {
    return (
        <button 
            className='btn' 
            style={{backgroundColor: color}}
            onClick={onClick}
        >
        {text}
        </button>
    )
}


Button.defaultProps = {
    color: 'orange',
}

Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button
