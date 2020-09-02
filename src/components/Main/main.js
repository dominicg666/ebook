import React, { Suspense, lazy } from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@baaz/adapter';
import { mergeClasses } from 'buikit/classify';
const Header = lazy(() => import('../Header'));
// const Footer = lazy(() => import('../Footer'));
import defaultClasses from './main.scss';

const Main = props => {
    const { children, isMasked } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    const rootClass = isMasked ? classes.root_masked : classes.root;
    const pageClass = isMasked ? classes.page_masked : classes.page;

    useScrollLock(isMasked);

    return (
        <Suspense fallback={null}>
            <main className={rootClass}>
                <Header />
                <div className={pageClass}>{children}</div>
                {/* <Footer /> */}
            </main>
        </Suspense>
    );
};

export default Main;

Main.propTypes = {
    classes: shape({
        page: string,
        page_masked: string,
        root: string,
        root_masked: string
    }),
    isMasked: bool
};
