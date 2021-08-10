import React from 'react'
import './index.css'

const Item = ({name, description, labels, price}) => {
    return (
        <div className='item'>
            <div className='info'>
                <p>{name}</p>
                <p>{description}</p>
                {labels && labels.length > 0 ? (
                    <div></div>
                ) : <></>}
                <span>{price}</span>
            </div>
            <img/>
        </div>
    )
}

export default Item
