import { Icon } from '@material-ui/core';
import Party from './SVG/Party.svg';

//Party Icon
const PartyIcon = () => {
    return (
        <Icon>
            <img alt='party' src={Party} height={30} width={25} />
        </Icon>
    );
}

export default PartyIcon