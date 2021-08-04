import React from 'react'

const SectionContainer = ({name, description, ItemOne, ItemTwo, ItemThree}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h4>{description}</h4>
            <div>
                <ItemOne/>
                <ItemTwo/>
                <ItemThree/>
            </div>

        </div>
    )
}

export default SectionContainer
