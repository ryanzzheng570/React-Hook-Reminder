import { Icon } from '@material-ui/core';
import Teriyaki from './SVG/Teriyaki.svg';

//Teriyaki Icon
const TeriyakiIcon = () => {
    return (
        <Icon>
            <img alt='teriyaki' src={Teriyaki} height={30} width={30} />
        </Icon>
    );
}

export default TeriyakiIcon
