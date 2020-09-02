import React, { Suspense } from 'react';
import { shape, string } from 'prop-types';

import NavButon from './navButon';
import defaultClasses from './header.scss';
import {
    Mail as MessageIcon,
    Bell as AlertIcon,
    LogOut as LogOutIcon
} from 'react-feather';
import Icon from 'buikit/lib/Icon'


const Header = props => {

    return (
        <header className="header-root" >
            <div className="pos-f-t">
                <nav className="navbar navbar-light ">
                    <NavButon />

                    <ul className="right-nav navbar-nav my-2 my-lg-0">
                        <li className="nav-item">
                            <Icon src={MessageIcon} />
                        </li>
                        <li className="nav-item">
                            <Icon src={AlertIcon} />
                        </li>
                        <li className="nav-item">
                            <Icon src={LogOutIcon} />
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string
    })
};

export default Header;