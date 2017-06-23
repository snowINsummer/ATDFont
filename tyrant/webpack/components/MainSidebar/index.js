/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
// import './index.css';

var MainSidebar = React.createClass({

	getInitialState(){
		return {
			mainSidebarHeigth:""
		}
	},

	clickMenu(menu){
		this.props.setSelectedMenu(menu);
	},

    render() {
    	var mainSidebarHeigth = this.props.mainSidebarHeigth;
    	console.log(mainSidebarHeigth);
    	var menu = this.props.menu;
        return <aside className="main-sidebar" style={{height:mainSidebarHeigth}}>
				    <section className="sidebar">

				      <ul className="sidebar-menu">
				        <li className="header">菜单</li>

				        {
				        	menu.map(o=>
				        		o.list===undefined
				        		?
						        <li key={o.id}>
						        	<a href="#" onClick={this.clickMenu.bind(this,o)}>
						        		<i className={o.icon===undefined?'fa fa-link':o.icon===''?'fa fa-link':o.icon}></i> 
						        		<span>{o.name}</span>
						        	</a>
						        </li>
						        :
						        <li key={o.id} className="treeview">
						          <a href="#">
						          	<i className={o.icon===undefined?'fa fa-link':o.icon===''?'fa fa-link':o.icon}></i> 
						          	<span>{o.name}</span>
						            <span className="pull-right-container">
						              <i className="fa fa-angle-left pull-right"></i>
						            </span>
						          </a>
						          <ul className="treeview-menu">
						          {
						          	o.list.map(oo=>
							            <li key={oo.id}>
							            	<a href="#" onClick={this.clickMenu.bind(this,oo)}>
							            		<i className={oo.icon===undefined?'fa fa-link':oo.icon===''?'fa fa-link':oo.icon}></i>
							            		{oo.name}</a>
							            </li>
						          	)
						          }
						          </ul>
						        </li>

				        	)
				        }

				      </ul>
				    </section>
				  </aside>;
    }

});

export default MainSidebar;