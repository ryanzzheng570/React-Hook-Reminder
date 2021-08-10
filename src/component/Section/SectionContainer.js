import React from 'react'

const SectionContainer = ({name, description, ItemOne, ItemTwo, ItemThree}) => {
    return (
        <div className={'section_container'}>
            <h3>{name}</h3>
            <p>{description}</p>
            <section className='section_items_container'>
                <ItemOne/>
                {/* <ItemTwo/>
                <ItemThree/> */}
            </section>

        </div>
    )
}

export default SectionContainer
