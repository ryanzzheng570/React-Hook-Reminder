import { Icon } from '@material-ui/core';
import Maki from './SVG/Maki.svg';
import Spicy from './SVG/Spicy.svg'

//Spicy Maki Icon
const SpicyMakiIcon = () => {
    return (
        <Icon>
            <img alt='spicy' src={Spicy} height={30} width={30} />
        </Icon>
    );
}

export default SpicyMakiIcon



