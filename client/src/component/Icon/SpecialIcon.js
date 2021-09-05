import { Icon } from '@material-ui/core';
import Special from './SVG/Special.svg';

//Special Icon
const SpecialIcon = () => {
    return (
        <Icon>
            <img alt='spcial' src={Special} height={30} width={30} />
        </Icon>
    );
}

export default SpecialIcon
