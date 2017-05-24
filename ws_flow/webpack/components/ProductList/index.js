/**
 * Created by snow.zhang on 2016/6/22.
 */

import $ from 'jquery';
import React from 'react';
import './index.css';

// 项目列表
var ProductList = React.createClass({

    getInitialState:function(){
        return {
                    projectList:[]
                };
    },

    componentDidMount:function(){
        this.setState({
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
        });
    },

    clickItem:function(data){
        this.setState({
            projectId : data.flowId == this.state.projectId ? '' : data.flowId,
            selectItem : data.flowId == this.state.projectId ? true : false,
            selectItemId : data.flowId
        });
        var o = this.state.wsFlow.find(item=>item.flowId===data.flowId)
        // console.log(o.wsFlow);
        this.props.setFlow(o.wsFlow,0);

    },

    openProduct:function(htmlId){
        this.setState({
            productId : htmlId==this.state.productId?'':htmlId
        });
        // <h4 key={o.id} className="product-name" style={{marginBottom:'10px'}} onClick={obj=>this.setState({productId:o.id==this.state.productId?'':o.id})}> {o.id==this.state.productId?'-':'+'} {o.productName}</h4>
    },

    render:function() {
        var projectList = this.state.projectList;
        var productId = this.state.productId;
        var projectId = this.state.projectId;
        var selectItem = this.state.selectItem;
        var selectItemId = this.state.selectItemId;
        return <div className={'container'}
                        style={{textAlign:'left',height:'700px',width:'300px',margin:'10px',marginTop:'10px',float:'left'}}>
                    <section id="ProjectSection">
                        <div className="span4">
                            <div className="todo mrm">
                                <ul className="pdul" id="project">
                                    {
                                        projectList.map(o=>
                                            <li key={o.id} className="product" value={o.moduleName} style={{paddingBottom:o.id===productId?'10px':'18px'}}>
                                                <h4 key={o.id} className="product-name" style={{marginBottom:o.id===productId?'10px':''}} onClick={this.openProduct.bind(this,o.id)}> {o.id==productId?'-':'+'} {o.moduleName}</h4>
                                                <ul className="pjul" style={{display:o.id===productId ? 'block':'none'}}>
                                                    {
                                                        o.flowData.map(o=> 
                                                            <li key={o.flowId} className={o.flowId==projectId?'todo-done': selectItem&&o.flowId==selectItemId?'todo-done':''} value={o.flowName} onClick={this.clickItem.bind(this,o)}>
                                                                <h4 key={o.flowId} className="todo-name" style={{wordWrap:'break-word'}}>{o.flowName}</h4>
                                                            </li>)
                                                    }
                                                </ul>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>
            </div>;
    }

});

export default ProductList;