import React, { createContext, useContext, useMemo } from 'react';
import { connect } from 'react-redux';

import actions from '../actions/Page/actions';
import * as asyncActions from '../actions/Page/asyncActions';
import bindActionCreators from '../../util/bindActionCreators';

const PageContext = createContext();

const PageContextProvider = props => {
    const { actions, asyncActions, children, pageState } = props;

    const pageApi = useMemo(
        () => ({
            actions,
            ...asyncActions
        }),
        [actions, asyncActions]
    );

    const contextValue = useMemo(() => [pageState, pageApi], [
        pageApi,
        pageState
    ]);

    return (
        <PageContext.Provider value={contextValue}>
            {children}
        </PageContext.Provider>
    );
};

const mapStateToProps = ({ page }) => ({ pageState: page });

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch),
    asyncActions: bindActionCreators(asyncActions, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageContextProvider);

export const usePageContext = () => useContext(PageContext);
