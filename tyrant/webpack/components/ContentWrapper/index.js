/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import SelectedMenu from 'SelectedMenu';
// import './index.css';

var ContentWrapper = React.createClass({

    componentDidMount(){
        var contentWrapper = this.refs['contentWrapper'];
        this.setState({
            contentWrapperHeight:contentWrapper.offsetHeight
        });
    },

    componentDidUpdate(prevProps, prevState){
        var contentWrapper = this.refs['contentWrapper'];
        if (prevState != null && prevState.contentWrapperHeight === contentWrapper.offsetHeight){
            return false;
        }
        this.setState({
            contentWrapperHeight:contentWrapper.offsetHeight
        });
        if (prevState != null){
            this.props.setMainSidebarHeight(contentWrapper.offsetHeight);
        }
    },

	iFrameHeight(){
        var iframe = this.refs['iframe'];
        var contentWrapper = this.refs['contentWrapper'];
        var subWeb = document.frames ? document.frames["iframe"].document :
        				iframe.contentDocument;
	    if(iframe != null && subWeb != null) {
	        iframe.style.height = contentWrapper.offsetHeight + "px";
	    }
	},

    render() {
    	var welcome = this.props.welcome;
    	var selectedMenu = this.props.selectedMenu;
        return <div ref="contentWrapper" className="content-wrapper">
        			{
        				welcome===true
        					?
                                <iframe ref="iframe" src="../webpack/common/html/tree.html" style={{width:'100%',borderWidth:'0px'}} onLoad={this.iFrameHeight} scrolling="no"/>
        					:
        						<SelectedMenu 
                                    selectedMenu={selectedMenu}
                                    setMainSidebarHeight={this.props.setMainSidebarHeight}
                                />
        			}
				</div>;
    }

});

export default ContentWrapper;