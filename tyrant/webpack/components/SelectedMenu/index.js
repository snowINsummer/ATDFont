/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import WriteWSTestcase from 'WriteWSTestcase';
import BorrowTender from 'BorrowTender';
import CreditorTransfer from 'CreditorTransfer';
import Fdd from 'Fdd';
// import './index.css';

var SelectedMenu = React.createClass({
	iFrameHeight(event){

        var iframe = event.target;
        var contentWrapper = event.target.parentNode.parentNode.parentNode;
        // var subWeb = document.frames ? document.frames["iframe"].document :
        				// iframe.contentDocument;
		// console.log(subWeb);
	    if(iframe != null) {
	        iframe.style.height = contentWrapper.offsetHeight + "px";
	    }
	},
    render() {
    	var selectedMenu = this.props.selectedMenu;
    	// console.log(ws);
    	return <div>
	    			<section className="content-header">
				      <h1>
				        {selectedMenu.name}
				        <small>{selectedMenu.description}</small>
				      </h1>
				      <ol className="breadcrumb">
				        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
				        <li className="active">{selectedMenu.name}</li>
				      </ol>
				    </section>
                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>

	   				<section className="content">
				    	{
				    		selectedMenu.id===102
				    		?
				    			<WriteWSTestcase
				    				setSelectedMenu={this.props.setSelectedMenu}
				    				setMainSidebarHeight={this.props.setMainSidebarHeight}
				    				/>
	                        :
	                        	selectedMenu.id===101
	                        	?
	                        		<iframe src="http://192.168.33.47:8080/font/tyrant/dist/wsReport.html" onLoad={this.iFrameHeight} style={{width:'100%',borderWidth:'0px'}} scrolling="no"/>
	                        	:
	                        		selectedMenu.id===2
	                        		?
	                        			<CreditorTransfer/>
	                        		:
			                        	selectedMenu.id===5
			                        	?
			                        		<Fdd/>
	                        			:
			                        		<div>
			                        			test
			                        		</div>
				    	}
		    		</section>
				</div>;
    }

});

export default SelectedMenu;