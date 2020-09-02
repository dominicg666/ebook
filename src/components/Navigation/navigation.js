import React, { memo } from 'react';
import { shape, string } from 'prop-types';
import { useNavigation } from '../../Hooks/Navigation/useNavigation';
import NavHeader from './navHeader';
import { HashRouter, NavLink, resourceUrl } from 'buikit-drivers';
import './navigation.scss';

const Navigation = props => {
    const {
        hasModal,
        isOpen,
        handleClose
    } = useNavigation({});


    const rootClassName = isOpen ? `navigation_root_open` : `navigation_root`;
    const modalClassName = hasModal ? `navigation_modal_open` : `navigation_modal`;
    const bodyClassName = hasModal ? `navigation_body_masked` : `navigation_body`;



    return (
        <aside className={rootClassName}>
            <header className={modalClassName}>
                <NavHeader
                    onClose={handleClose}
                />
            </header>
            <div className={bodyClassName} >
                <HashRouter basename="/">
                    <ul className=" navbar-nav">
                        <li className="nav-item">
                            <NavLink activeClassName="active" to={resourceUrl('/')} onClick={handleClose} >Overview</NavLink>
                        </li>
                        <li className="nav-item">
                            <a activeClassName="active" href="https://baazframework.github.io/#/environment-setup" onClick={handleClose}>Environment Setup</a>
                        </li>
                        <li className="nav-item">
                            <a activeClassName="active" href="https://baazframework.github.io/#/cli" onClick={handleClose}>CLI Installation</a>
                        </li>
                    </ul>
                </HashRouter>
            </div>
        </aside>
    );
};

export default memo(Navigation);

Navigation.propTypes = {
    classes: shape({
        body: string,
        footer: string,
        header: string,
        root: string,
        root_open: string,
        isRoot: string
    })
};
