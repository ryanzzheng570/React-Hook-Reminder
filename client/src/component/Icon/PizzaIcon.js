import { Icon } from '@material-ui/core';
import Pizza from './SVG/Pizza.svg'

const PizzaIcon = () => {
    return (
        <Icon>
            <img alt='pizza' src={Pizza} height={30} width={30} />
        </Icon>
    )
};

export default PizzaIcon;