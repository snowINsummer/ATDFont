/**
 * Created by snow.zhang on 2017/6/14.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import MainHeader from 'MainHeader';
import MainSidebar from 'MainSidebar';
import ContentWrapper from 'ContentWrapper';
// import MainFooter from 'MainFooter';
import ControlSidebar from 'ControlSidebar';

var Content = React.createClass({

    getInitialState(){
    	return {
    		welcome:true,
    		menu:[
    			{
    				id:1,
    				name:"接口自动化",
    				icon:"fa fa-exchange",
    				list:[
    					{
    						id:101,
    						name:"测试报告",
    						icon:"fa fa-bar-chart",
    						description:"接口自动化测试报告"
    					},
    					{
    						id:102,
    						name:"编写用例",
    						icon:"fa fa-pencil",
    						description:"接口自动化测试用例"
    					}
    				]
    			},
    			{
    				id:2,
    				name:"测试菜单",
					description:"测试"
    			}
    		],
    		selectedMenu:""
    	};
    },

    setSelectedMenu(menu){
    	this.setState({
    		selectedMenu:menu,
    		welcome:false
    	});
    },

	render(){
		// TODO 
		// 1、通过swagger获取接口定义
		// 2、利用下拉列表提供选择，平台-模块-接口
		// <MainFooter></MainFooter>	

        var props = {};

        return(
  				<div class="wrapper">
  					<MainHeader></MainHeader>
  					<MainSidebar 
  						menu={this.state.menu}
  						setSelectedMenu={this.setSelectedMenu}
  						/>
  					<ContentWrapper 
  						welcome={this.state.welcome}
  						selectedMenu={this.state.selectedMenu}
  						/>
  					<ControlSidebar></ControlSidebar>

				</div>

        );
    }
});

dom.render(<Content />, document.getElementById('Content'));

