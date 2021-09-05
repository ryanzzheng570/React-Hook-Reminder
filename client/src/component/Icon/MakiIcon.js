import { Icon } from '@material-ui/core';
import Maki from './SVG/Maki.svg';

//Maki Icon
const MakiIcon = () => {
    return (
        <Icon>
            <img alt='maki' src={Maki} height={30} width={30} />
        </Icon>
    );
}

export default MakiIcon
