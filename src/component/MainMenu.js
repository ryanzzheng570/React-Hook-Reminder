import React from 'react'
import SectionContainer from './Section/SectionContainer'
import SectionItem from './Section/SectionItem'

const MainMenu = () => {
    return (
        <div className='main-menu-container'>
            <SectionContainer name={'Sashimi'} description={'Raw Fish(5 pieces/order)'}/>
        </div>
    )
}

export default MainMenu
