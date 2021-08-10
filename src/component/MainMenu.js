import React from 'react';
import SectionContainer from './Section/SectionContainer';
import Item from './Section/Item';
import './index.css';

const MainMenu = () => {

    const itemOne = () => {
        return (<Item name={'Spicy Salmon Roll'} description={'Salmon come with spicy mayo, green onion, cryispy flaske and masago '}/>)
    }

    return (
        <div className='main-menu-container'>
            <SectionContainer 
            name={'Sashimi'} 
            description={'Raw Fish(5 pieces/order)'} 
            ItemOne={() => itemOne()}
            />
        </div>
    )
}

export default MainMenu
