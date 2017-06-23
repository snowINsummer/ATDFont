/**
 * Created by snow.zhang on 2017/5/22.
 */

import $ from 'jquery';
import React from 'react';
import './index.css';

// 项目列表
var ProductList = React.createClass({

    getInitialState:function(){
        return {
                    projectList:[],
                    selectedFlow:[]
                };
    },

    componentDidMount:function(){
        this.setState({

        });
    },

    clickItem:function(data,wsFlow){
        this.setState({
            projectId : data.flowId == this.state.projectId ? '' : data.flowId,
            selectItem : data.flowId == this.state.projectId ? true : false,
            selectItemId : data.flowId
        });
        var o = wsFlow.find(item=>item.flowId===data.flowId)
        var relation = o.wsFlow[0].relation;
        this.setState({
            selectedFlow:[o]
        });
        // console.log(relation);
        var pageHeight = document.body.scrollHeight+1000-50+'px';
        this.props.setFlow(o.wsFlow,0,pageHeight,relation);
    },

    openProduct:function(htmlId){
        this.setState({
            productId : htmlId==this.state.productId?'':htmlId
        });
        // <h4 key={o.id} className="product-name" style={{marginBottom:'10px'}} onClick={obj=>this.setState({productId:o.id==this.state.productId?'':o.id})}> {o.id==this.state.productId?'-':'+'} {o.productName}</h4>
    },

    selectWS(selectedFlow,index){
        var wsFlow = selectedFlow.wsFlow;
        var pageHeight = document.body.scrollHeight-50+'px';
        this.props.setFlow(wsFlow,index,pageHeight,wsFlow[index].relation);
    },

    render:function() {
        var projectList = this.props.projectList;
        var productId = this.state.productId;
        var projectId = this.state.projectId;
        var selectItem = this.state.selectItem;
        var selectItemId = this.state.selectItemId;
        var wsFlow = this.props.wsFlow;
        var selectedFlow = this.state.selectedFlow;
        // console.log(selectedFlow);
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
                                                            <li key={o.flowId} className={o.flowId==projectId?'todo-done': selectItem&&o.flowId==selectItemId?'todo-done':''} value={o.flowName} onClick={this.clickItem.bind(this,o,wsFlow)}>
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
                    <section style={{textAlign:'left'}} id="wsList">
                        {  
                            selectedFlow.map(o=>
                                <div key={o.flowId}>
                                    <h4 style={{textAlign:'left',fontSize:'20px',width:'300px'}}>接口列表：</h4>
                                    <ul style={{textAlign:'left',float:'left',width:'300px',color:'#000080'}} id="l">
                                        {
                                            o.wsFlow.map((oo,index)=>
                                                <li key={oo.name} style={{width:'230px',wordWrap:'break-word',marginBottom:'3px'}}>
                                                    <a onClick={this.selectWS.bind(this,o,index)} style={{fontSize:'14px',color:'#000080'}}>{oo.description}</a>
                                                </li>
                                                )
                                        }
                                    </ul>
                                </div>)
                        }
                    </section>
                <div style={{textAlign:'center'}}>
                    <a href="#" style={{position:'fixed',bottom:'20px'}} className="large green button">回到顶部</a>
                </div>
            </div>;
    }

});

export default ProductList;