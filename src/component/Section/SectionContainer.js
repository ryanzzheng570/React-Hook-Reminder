import React from 'react'

const SectionContainer = ({name, description, ItemOne, ItemTwo, ItemThree}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{description}</p>
            <div>
                {/* <ItemOne/>
                <ItemTwo/>
                <ItemThree/> */}
            </div>

        </div>
    )
}

export default SectionContainer
