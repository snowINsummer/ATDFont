/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Table from 'Table';
import './index.css';
// import '../WSData/index.css';

var CreditorTransfer = React.createClass({

    getInitialState(){
        return {

            selectedDb:0,

            // 查询可转让债权
            borrowTenderTransferable:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_BORROW_TENDER '标的投标信息'",
                data:[],
                title:[],
                bttButton:0 // 0 按钮文字：隐藏，1 按钮文字：显示
            },

            selectedScheme:-1,
            schemeList:[
                {
                    id:1,
                    description:"新元宝"
                },
                {
                    id:3,
                    description:"月月派"
                },
                {
                    id:4,
                    description:"七天大胜"
                },
                {
                    id:5,
                    description:"月进斗金"
                },
                {
                    id:6,
                    description:"新手标"
                }
            ],

            // 查询责权转让申请
            tradeRequest:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_TRADE_REQUEST '责权转让申请'",
                data:[],
                title:[],
                bttButton:0 // 0 按钮文字：隐藏，1 按钮文字：显示
            }
        };
    },
    // 切换数据源
    changeDbSource(value){
        // var value = event.target.innerText;
        // console.log(value);
        var dbSourceId = this.props.dbSource.find(item=>item.description===value).id;
        // console.log(dbSourceId);
        this.setState({
            selectedDb:dbSourceId
        });
    },
    // 切换理财产品
    changeScheme(value){
        // var value = event.target.innerText;
        // console.log(value);
        this.setState({
            selectedScheme:value
        });
    },

    changeData_btt(data){
        data = this.props.changeText(data);
        this.setState({
            borrowTenderTransferable:data
        });
    },
    changeData_tr(data){
        data = this.props.changeText(data);
        this.setState({
            tradeRequest:data
        });
    },

    // 查询可转让的债权
    getBorrowTenderTransferable(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var mobileNum = $("#mobile").val();
        var schemeId = $("#schemeId").val();
        var selectedScheme = this.state.selectedScheme;
        if (selectedScheme === -1){
            alert("请选择理财产品");
            return;
        }
        var isOptimize = this.state.schemeList.find(item=>item.description===selectedScheme).id;
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorTransfer/"+dbDesc+"/queryCreditorRights";
        var data = JSON.stringify({data:{mobile:mobileNum,schemeId:schemeId,isOptimize:isOptimize}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var borrowTenderTransferable = this.state.borrowTenderTransferable;
        this.props.httpClient(url,data,borrowTenderTransferable,selectedDb).then(e=>this.setState({borrowTenderTransferable:e}));

    },

    // 查询责权转让申请
    getTradeRequest(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var tenderId = $("#tenderId").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorTransfer/"+dbDesc+"/queryTradeRequest";
        var data = JSON.stringify({data:{tenderId:tenderId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var tradeRequest = this.state.tradeRequest;
        this.props.httpClient(url,data,tradeRequest,selectedDb).then(e=>this.setState({tradeRequest:e}));
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;
        // 1、查询可转让的债权：
        var borrowTenderTransferable = this.state.borrowTenderTransferable;
        var selectedScheme = this.state.selectedScheme;
        selectedScheme = selectedScheme===-1?'--请选择理财产品--':selectedScheme;
        var bttDbName = dbSource.find(item=>item.id===borrowTenderTransferable.selectedDb).description;
        // 检查点：XXD_TRADE_REQUEST新增记录，status=1
        var tradeRequest = this.state.tradeRequest;
        // console.log(tradeRequest);
        var trDbName = dbSource.find(item=>item.id===tradeRequest.selectedDb).description;

        return <div>
            <form className="wsform">
                <div className="row">
                    <div className="col-lg-2" style={{width:'180px'}}>
                        <span style={{backgroundColor:'#f0ad4e',fontSize:'x-large'}}>数据库环境：</span>
                    </div>
                    <Select name={dbName}
                        data={dbSource}
                        changeValue={this.changeDbSource}
                        classN="btn btn-warning"
                    />
                </div>
            </form>
            <hr style={{height:'2px',border:'none',borderTop:'2px dotted green',marginTop: '10px'}}></hr>
            <form className="wsform" onSubmit={this.getBorrowTenderTransferable.bind(this,wsData)}>
                    <div>
                        <span>1、查询可转让的债权：</span>
                    </div>
                    <div className="row">
                        <Select name={selectedScheme}
                            data={this.state.schemeList}
                            changeValue={this.changeScheme}
                            classN="btn btn-primary"
                        />
                    </div>
                    <div className="row">
                        <div className="col-lg-2" style={{width:'230px'}}>
                            <input id="mobile" type="text" className="form-control" placeholder="债权持有人手机号（可不填）" defaultValue=""/>
                        </div>
                        <div className="col-lg-2" style={{width:'230px'}}>
                            <input id="schemeId" type="text" className="form-control" placeholder="理财产品编号（可不填）" defaultValue=""/>
                        </div>

                        <div className="col-lg-1">
                            <input type="submit" className="large blue button" value="查询"/>
                        </div>
                        <div className="col-lg-1">
                            <a onClick={this.changeData_btt.bind(this,borrowTenderTransferable)} style={{width:'100px'}} className="large orange button">{borrowTenderTransferable.bttButton===0?'隐藏结果':'显示结果'}</a>
                        </div>
                    </div>
                    <Table 
                        dbName={bttDbName}
                        data={borrowTenderTransferable}
                    />
                </form>
                <form>
                    <div>
                        <span>2、修改标的的应还款时间：</span>
                    </div>
                    <hr style={{height:'2px',border:'none',borderTop:'2px dotted green',marginTop: '10px'}}></hr>
                </form>
                <form>
                    <div>
                        <span>3、修改理财产品到期时间</span>
                    </div>
                    <hr style={{height:'2px',border:'none',borderTop:'2px dotted green',marginTop: '10px'}}></hr>
                </form>
                <form>
                    <div>
                        <span>4、跑批40，产生新增的请求和匹配记录</span>
                    </div>
                    <hr style={{height:'2px',border:'none',borderTop:'2px dotted green',marginTop: '10px'}}></hr>
                </form>
                <form className="wsform" onSubmit={this.getTradeRequest.bind(this,wsData)}>
                    <div className="checkpionttitle">
                        <span>检查点：XXD_TRADE_REQUEST新增记录，status=1</span>
                    </div>
                    <div className="row">
                        <div className="col-lg-2" style={{width:'170px'}}>
                            <input id="tenderId" type="text" className="form-control" placeholder="tenderId（必填）" defaultValue=""/>
                        </div>
                        <div className="col-lg-1">
                            <input type="submit" className="large blue button" value="查询"/>
                        </div>
                        <div className="col-lg-1">
                            <a onClick={this.changeData_tr.bind(this,tradeRequest)} style={{width:'100px'}} className="large orange button">{tradeRequest.bttButton===0?'隐藏结果':'显示结果'}</a>
                        </div>
                    </div>
                    <Table 
                        dbName={trDbName}
                        data={tradeRequest}
                    />
                </form>
            </div>;
    }

});

export default CreditorTransfer;