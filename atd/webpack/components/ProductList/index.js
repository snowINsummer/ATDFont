/**
 * Created by snow.zhang on 2016/6/22.
 */

import $ from 'jquery';
import React from 'react';
import './index.css';
import PassRateEchartData from 'PassRateEchartData';

// 项目列表
var ProductList = React.createClass({

    getInitialState:function(){
        return {
                    projectList:[]
                };
    },

    componentDidMount:function(){
        $.ajax({
            type : "post",
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            data : {},
            crossDomain: true,
            url : "http://localhost:8080/ws/rest/project/queryProjectList",
            success : function(data){
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                this.setState({
                    projectList:data.data
                });
            }.bind(this)
        });
    },

    clickItem:function(htmlId,projectName){
        this.setState({
            projectId : htmlId == this.state.projectId ? '' : htmlId,
            selectItem : htmlId == this.state.projectId ? true : false,
            selectItemId : htmlId
        });
        this.props.getLastDetail(htmlId);
        this.props.getHistoryReport(projectName);
        this.props.getChartData(htmlId);

            // getData(val); // 性能衰退
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
        var historyReportInfo = this.props.historyReport;
        if (Object.keys(historyReportInfo).length == 0){
            historyReportInfo = [];
        }else{
            historyReportInfo = [this.props.historyReport];
        }
        return <div className={'container'}
                        style={{textAlign:'left',height:'700px',width:'300px',margin:'10px',marginTop:'10px',float:'left'}}>
                    <section id="ProjectSection">
                        <div className="span4">
                            <div className="todo mrm">
                                <ul className="pdul" id="project">
                                    {
                                        projectList.map(o=>
                                            <li key={o.id} className="product" value={o.productName} style={{paddingBottom:o.id===productId?'10px':'18px'}}>
                                                <h4 key={o.id} className="product-name" style={{marginBottom:o.id===productId?'10px':''}} onClick={this.openProduct.bind(this,o.id)}> {o.id==productId?'-':'+'} {o.productName}</h4>
                                                <ul className="pjul" style={{display:o.id===productId ? 'block':'none'}}>
                                                    {
                                                        o.listProject.map(o=> 
                                                            <li key={o.id} className={o.id==projectId?'todo-done': selectItem&&o.id==selectItemId?'todo-done':''} value={o.projectName} onClick={this.clickItem.bind(this,o.id,o.projectName)}>
                                                                <h4 key={o.id} className="todo-name" style={{wordWrap:'break-word'}}>{o.projectName}</h4>
                                                            </li>)
                                                    }
                                                </ul>
                                            </li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section style={{textAlign:'left'}} id="Menu">
                        <h4 style={{textAlign:'left',fontSize:'20px',width:'300px'}}>报告链接</h4>
                        {
                            historyReportInfo.map(o=>
                            <ul key={1} style={{textAlign:'left',float:'left',width:'300px',color:'#000080'}} id="l">
                                        <li key={2}>
                                            <a target='_blank' href={o.lastReport} style={{marginBottom:'100px',color:'#000080'}}>{o.projectName}</a>
                                        </li>
                                        <li key={3} style={{listStyleType:'none',marginTop:'100px'}}>历史记录</li>
                                        {
                                            o.historyReport.map(o=>
                                                <li key={o.reportTime}>
                                                    <a target='_blank' href={o.reportLink} style={{fontSize:'12px',color:'#000080'}}>{o.reportTime}</a>
                                                </li>
                                                )
                                        }
                            </ul>)
                        }
                    </section>
            </div>;
    }

});

export default ProductList;