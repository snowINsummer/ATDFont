/**
 * Created by snow.zhang on 2016/6/16.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import MainHeader from 'MainHeader';
import ProductList from 'ProductList';
import FlowData from 'FlowData';

var Content = React.createClass({

    getInitialState(){
        return {
                    solidFlag : false,
                    allWSData:{},
                    flowIndex:0,
                    arrflowData:[],
                    selectedFlow:[],
                    projectList:[{
                        "id":1,
                        "projectId": 1,
                        "moduleName":"进件平台",
                        "flowData":[
                                    {"flowId":1,"flowName":"获取标的详情"},
                                    {"flowId":2,"flowName":"进件失败"}
                        ]
                    },
                    {
                        "id":2,
                        "projectId": 1,
                        "moduleName":"交易中心",
                        "flowData":[
                                    {"flowId":3,"flowName":"交易成功"},
                                    {"flowId":4,"flowName":"交易失败"}
                        ]
                    }],
                    wsFlow:[{
                        "flowId":1,
                        "wsFlow":['/bids','/bids/{bidCode}']
                    }]
                };
    },
    componentDidMount(){
        $.ajax({
            type : "GET",
            // contentType: "application/json; charset=utf-8",
            crossDomain: true,
            headers: {
                // Referer: "http://dev.xxd.com/integrationPlatform/swagger-ui.html",
                // accept:"application/json;charset=utf-8,*/*"
            },
            // url : "http://dev.xxd.com/integrationPlatform/bids?keyType=2&keyValue=AO20170412000042&status=BIDDING&productCategory=P001&currentPage=1&pageSize=10s",
            url : "http://172.16.16.136:8080/tyrant/integrationPlatform/api-docs",
            success : function(data){
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                this.setState({
                    allWSData:data.data
                });
            }.bind(this)
        });
    },

	setFlow(data,index){
        // console.log(data);
        // console.log(index);
            this.setState({
                flowIndex:index,
                selectedFlow:data
            });
        // console.log(this.state.flowIndex);
        // 存放接口流程的接口名称列表
        // if (Object.keys(this.state.wsFlow).length == 0){
        //     this.setState({
        //         wsFlow:data
        //     });
        // }
        
        
        var allWSData = this.state.allWSData;
        var paths = allWSData.paths;
        var wsName = data[index];
        var getWSData = paths[wsName];
        var type = [];
        for(var key in getWSData){
            type.push(key);
        }
        var getData = getWSData[type[0]];
        var flowData = {
            // http://dev.xxd.com/integrationPlatform/bids
            "url":"http://"+allWSData.host+allWSData.basePath+wsName,
            "index":index,
            "wsName":wsName,
            "type":type[0],
            "description":getData['summary'] + "," + getData['description'],
            "parameters":getData['parameters']
            // 增加body属性，区别POST\PUT\PATCH请求，
            // 这里做第一次遍历属性(in)值
            // 需要增加textarea，调接口时也要增加对应属性。
            // 需要更改后台数据类
        };
        var arrflowData = []
        arrflowData.push(flowData);
        this.setState({
            arrflowData:arrflowData
        });
        // console.log(this.state.allWSData);
        // console.log(flowData);

/*
// MOKE
        var flowData = {
            // http://dev.xxd.com/integrationPlatform/bids
            "url":"http://dev.xxd.com/integrationPlatform/bids",
            "index":0,
            "wsName":"/bids",
            "type":"get",
            "description":"MOKE DATA",
            "parameters":[{
                in:"header",
                name:"key1",
                default:"value1",
                description:"description1"
            },
            {
                in:"header",
                name:"key2",
                default:"value2",
                description:"description2"
            },
            {
                in:"query",
                name:"key1",
                default:"value1",
                description:"description3"
            },
            {
                in:"query",
                name:"key2",
                default:"value2",
                description:"description4"
            }]
        };
        var arrflowData = []
        arrflowData.push(flowData);
        this.setState({
            arrflowData:arrflowData
        });
*/

		// 把请求方法传给需要触发的组件，处理请求的数据在这一层
		// 把接口的数据传给需要用的组件，生成dom
	},


    render(){
        return(
            <div>
                <MainHeader></MainHeader>
                <ProductList projectList={this.state.projectList}
                             wsFlow={this.state.wsFlow}
                             setFlow={this.setFlow}
                             >
                </ProductList>
                <div style={{borderLeft:'1px solid #000',width:'10px',height:this.state.solidFlag==true?document.body.scrollHeight:'887px',float:'left'}}></div>
                <FlowData arrflowData={this.state.arrflowData}
                            prevFlow={this.prevFlow}
                            nextFlow={this.nextFlow}
                            setFlow={this.setFlow}
                            flowIndex={this.state.flowIndex}
                            selectedFlow={this.state.selectedFlow}
                            >
                </FlowData>
            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));