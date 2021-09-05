import React from 'react';
import { Icon } from '@material-ui/core';
import Vegetarian from './SVG/Vegetarian.svg'

const VegetarianIcon = () => {
    return (
        <Icon>
            <img alt='spicy' src={Vegetarian} height={30} width={25} />
        </Icon>
    )
};

export default VegetarianIcon
