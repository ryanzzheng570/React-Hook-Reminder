import React from 'react'
import { Icon } from '@material-ui/core';
import Maki from './SVG/Maki_1.svg';

//Maki Icon
const MakiIcon = () => {
    return (
        <Icon>
            <img src={Maki} height={27} width={27} />
        </Icon>
    );
}

export default MakiIcon
