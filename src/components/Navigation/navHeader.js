import React, { Fragment } from 'react';
import { bool, func, shape, string } from 'prop-types';
import {
    X as CloseIcon
} from 'react-feather';
import Icon from 'buikit/lib/Icon';
import Trigger from 'buikit/lib/Trigger';
import './navHeader.scss';
import { useNavigationHeader } from '../../Hooks/Navigation/useNavigationHeader';

const LOGO_IMG = require("../../assets/img/logo.png").default;

const NavHeader = props => {
    const { onClose } = props;

    const talonProps = useNavigationHeader({
        onClose
    });

    const { handleClose } = talonProps;

    return (
        <Fragment>
            <div className="d-flex justify-content-between sidebar-header">
                <img className="sidebar-logo" src={LOGO_IMG} />
                <Trigger key="closeButton" action={handleClose} classes="close_button" >
                    <Icon src={CloseIcon} size={20} />
                </Trigger>
            </div>
        </Fragment>
    );
};

export default NavHeader;

NavHeader.propTypes = {
    classes: shape({
        title: string
    }),
    onClose: func.isRequired
};
