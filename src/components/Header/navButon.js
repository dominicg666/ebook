import React from 'react';
import { node, shape, string } from 'prop-types';
import {
    Menu as MenuIcon
} from 'react-feather';
import Icon from 'buikit/lib/Icon'
import  './navButton.scss';
import { useNavigationTrigger } from '../../Hooks/Header/useNavigationTrigger';

/**
 * A component that toggles the navigation menu.
 */
const NavigationTrigger = props => {
    const { handleOpenNavigation } = useNavigationTrigger();

    return (
        <button className="navbar-toggler navButtonRoot" type="button"
            onClick={handleOpenNavigation}>
           <Icon src={MenuIcon} />
        </button>
    );
};

NavigationTrigger.propTypes = {
    children: node,
    classes: shape({
        root: string
    })
};

export default NavigationTrigger;