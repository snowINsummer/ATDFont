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
            mainSidebarHeigth:document.documentElement.clientHeight-50+'px',
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
    					// {
    					// 	id:102,
    					// 	name:"编写用例",
    					// 	icon:"fa fa-pencil",
    					// 	description:"接口自动化测试用例"
    					// }
    				]
    			},
                {
                    id:2,
                    name:"SQL查询",
                    icon:"fa fa-database",
                    list:[
                        {
                            id:201,
                            name:"债权转让",
                            icon:"fa fa-retweet",
                            description:"债权转让业务测试相关sql"
                        },
                        {
                            id:202,
                            name:"债权匹配",
                            icon:"fa fa-handshake-o",
                            description:"债权匹配业务测试相关sql"
                        },
                        {
                            id:203,
                            name:"债权退出",
                            icon:"fa fa-sign-out",
                            description:"债权退出业务测试相关sql"
                        },
                        {
                            id:204,
                            name:"FDD业务测试",
                            icon:"fa fa-money",
                            description:"法大大业务测试相关sql"
                        },
                        {
                            id:205,
                            name:"企业注册",
                            icon:"fa fa-registered",
                            description:"企业注册相关sql"
                        }

                    ]
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

    setMainSidebarHeight(height){
        height = height+51+'px'
        // console.log(height);
        this.setState({
            mainSidebarHeigth:height
        });
    },

	render(){
		// TODO 
		// 1、通过swagger获取接口定义
		// 2、利用下拉列表提供选择，平台-模块-接口
    // TODO  
    // 3、增加单接口的字段列表及发送请求功能
    // 4、接口的所有参数全部保存到缓存
    // 5、只维护字段命名异常的接口关系，维护到数据库，通过接口实时获取
    // 6、异步接口，后续的接口请求时，先判断关联字段状态，给出相应提示，关系维护到数据库，通过接口实时获取。
    // 7、实时更新左侧菜单高度
    // 8、保存最近一次提交的数据到数据库，每次调用接口获取接口demo数据
    // 
		// <MainFooter></MainFooter>	

        var props = {};

        return(
  				<div class="wrapper">
  					<MainHeader></MainHeader>
  					<MainSidebar 
                        mainSidebarHeigth={this.state.mainSidebarHeigth}
  						menu={this.state.menu}
  						setSelectedMenu={this.setSelectedMenu}
  						/>
  					<ContentWrapper 
  						welcome={this.state.welcome}
  						selectedMenu={this.state.selectedMenu}
                        setMainSidebarHeight={this.setMainSidebarHeight}
  						/>
  					<ControlSidebar></ControlSidebar>

				</div>

        );
    }
});

dom.render(<Content />, document.getElementById('Content'));

