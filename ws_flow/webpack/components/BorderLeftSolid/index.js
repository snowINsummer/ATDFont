/**
 * Created by snow.zhang on 2017/5/25.
 */

import React from 'react';

var BorderLeftSolid = React.createClass({

    render() {
    	var pageHeight = this.props.pageHeight;
        return <div ref="borderLeftSolid" style={{borderLeft:'1px solid #000',width:'10px',height:pageHeight,float:'left'}}></div>;
    }

});

export default BorderLeftSolid;