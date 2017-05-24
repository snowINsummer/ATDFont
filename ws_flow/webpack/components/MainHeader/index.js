/**
 * Created by snow.zhang on 2016/6/22.
 */

import React from 'react';
import './index.css';

var MainHeader = React.createClass({

    render() {
        return <header className={'main-header'}>
                    <a className={'logo'} href="#">
                        <span className={'logo-lg'}><b>接口流程</b></span>
                    </a>
                    <nav className={'navbar navbar-static-top'} role="navigation">

                    </nav>
                </header>;
    }

});

export default MainHeader;