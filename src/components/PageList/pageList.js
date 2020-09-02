import React from 'react';
import './pageList.scss';
import { usePageList } from '../../Hooks/PageList/usePageList';
import RichText from '../RichText';
import { Edit } from 'react-feather';
import Icon from 'buikit/lib/Icon';

import { HashRouter, NavLink, resourceUrl } from 'buikit-drivers';

const PageList = props => {
    const {
        active,
        data,
        content,
        handleSetActive,
        handleEdit
    } = usePageList();

    const _tabMenu = data.map(({ pagename }, key) => {
        const activeClass = active == key ? `nav-link tab_menu active` : `nav-link tab_menu `;
        return (<a className={activeClass} key={key} onClick={(e) => handleSetActive(key)} >{pagename}</a>)
    })
    let _contentHtml;
    if (content != null) {
        _contentHtml = (<div className="tab-pane fade show active" >
            <h4>{content.pagename} <button className="btn btn-edit" onClick={handleEdit}><Icon size={14} src={Edit} /> Edit</button></h4>
            <RichText content={content.pageBody} />
        </div>)
    } else {
        _contentHtml = (<div className="tab-pane fade show active" >
            No records found
        </div>)
    }
    return (
        <div className="container pagelist">
            <h2>E-Books</h2>

            <div>
                <div className="row">

                    <div className="col-12 my-5">
                        <HashRouter basename="/">
                            <NavLink className="btn btn-primary" to={resourceUrl('/create-page')} >Create New Page</NavLink>
                        </HashRouter>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {_tabMenu}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            {_contentHtml}

                        </div>

                    </div>

                </div>
            </div>
        </div >
    );
};


export default PageList;
