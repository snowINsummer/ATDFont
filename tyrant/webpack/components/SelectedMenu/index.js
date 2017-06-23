/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import WriteWSTestcase from 'WriteWSTestcase';
// import './index.css';

var SelectedMenu = React.createClass({

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
	                        	<div>
	                        		test
	                        	</div>
				    	}
		    		</section>
				</div>;
    }

});

export default SelectedMenu;