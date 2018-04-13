/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Form from 'Form';
// import './index.css';

var CreditorMatching = React.createClass({

    getInitialState(){
        return {
            selectedDb:0,

            // 查询责权匹配状态
            tradeRequest:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_TRADE_REQUEST '责权转让申请'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"tenderId_tm",placeholder:"tenderId（必填）"}],
                buttonText:"查询责权转让申请",
                buttonWidth:"190px",
                dbName:"",
                loadingIconDisplay:0
            },
            // 查询责权转让记录
            tradePack:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_TRADE_PACK '责权转让记录'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"requestId_tp",placeholder:"requestId（必填）"}],
                buttonText:"查询责权转让记录",
                buttonWidth:"190px",
                dbName:"",
                loadingIconDisplay:0
            },
            // 查询用户资金账户日志
            accountLog:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_ACCOUNT_LOG '用户资金账户日志'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"requestId_al",placeholder:"requestId（必填）"}],
                buttonText:"查询用户资金账户日志",
                buttonWidth:"190px",
                dbName:"",
                loadingIconDisplay:0
            }
        };
    },
    // 切换数据源
    changeDbSource(value){
        var dbSourceId = this.props.dbSource.find(item=>item.description===value).id;
        this.setState({
            selectedDb:dbSourceId
        });
    },
    // 切换理财产品
    changeScheme(value){
        this.setState({
            selectedScheme:value
        });
    },

    changeData_tr(data){
        data = this.props.changeText(data);
        this.setState({
            tradeRequest:data
        });
    },
    changeData_tp(data){
        data = this.props.changeText(data);
        this.setState({
            tradePack:data
        });
    },
    changeData_al(data){
        data = this.props.changeText(data);
        this.setState({
            accountLog:data
        });
    },

    setLoadingIconDisplay_tr(flag){
        var tradeRequest = this.state.tradeRequest;
        tradeRequest.loadingIconDisplay = flag;
        this.setState({
            tradeRequest:tradeRequest
        });
    },
    setLoadingIconDisplay_tp(flag){
        var tradePack = this.state.tradePack;
        tradePack.loadingIconDisplay = flag;
        this.setState({
            tradePack:tradePack
        });
    },
    setLoadingIconDisplay_al(flag){
        var accountLog = this.state.accountLog;
        accountLog.loadingIconDisplay = flag;
        this.setState({
            accountLog:accountLog
        });
    },

    // 查询责权转让申请
    queryTradeRequest(wsData,event){
        var tradeRequest = this.state.tradeRequest;
        if (tradeRequest.loadingIconDisplay === 1){
            return;
        }
        this.setLoadingIconDisplay_tr(1);
        event.preventDefault(); // 阻止表单提交
        var tenderId = $("#tenderId_tm").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorMatching/"+dbDesc+"/queryTradeRequest";
        var data = JSON.stringify({data:{tenderId:tenderId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,tradeRequest,selectedDb)
                    .then(e=>this.setState({tradeRequest:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_tr(0));
    },
    // 查询责权转让记录
    queryTradePack(wsData,event){
        var tradePack = this.state.tradePack;
        if (tradePack.loadingIconDisplay === 1){
            return;
        }
        this.setLoadingIconDisplay_tr(1);
        event.preventDefault(); // 阻止表单提交
        var requestId = $("#requestId_tp").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorMatching/"+dbDesc+"/queryTradePack";
        var data = JSON.stringify({data:{requestId:requestId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,tradePack,selectedDb)
                    .then(e=>this.setState({tradePack:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_tp(0));
    },
    // 查询责权转让记录
    queryAccountLog(wsData,event){
        var accountLog = this.state.accountLog;
        if (accountLog.loadingIconDisplay === 1){
            return;
        }
        this.setLoadingIconDisplay_tr(1);
        event.preventDefault(); // 阻止表单提交
        var requestId = $("#requestId_al").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorMatching/"+dbDesc+"/queryAccountLog";
        var data = JSON.stringify({data:{requestId:requestId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,accountLog,selectedDb)
                    .then(e=>this.setState({accountLog:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_al(0));
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;
        
        var tradeRequest = this.state.tradeRequest;
        var tradePack = this.state.tradePack;
        var accountLog = this.state.accountLog;
        // console.log(tradeRequest);

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
                <div className="checkpionttitle">
                    <span>检查点(1)：XXD_BORROW_TENDER.COLLECTAMOUNT（待收总额）- XXD_BORROW_TENDER.COLLECTINTEREST（待收利息）= XXD_TRADE_REQUEST.amount（债权金额）</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点(2)：XXD_TRADE_REQUEST.status = 2（匹配成功）</span>
                </div>
                <Form
                    data={tradeRequest}
                    changeData={this.changeData_tr}
                    queryFunc={this.queryTradeRequest}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_tr}
                />
                <div className="checkpionttitle">
                    <span>检查点（3）：XXD_TRADE_PACK 新增一条记录</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点（4）：XXD_BORROW_TENDER.curuserid（当前持有用户） = XXD_TRADE_PACK.userid（买入用户）</span>
                </div>
                <Form
                    data={tradePack}
                    changeData={this.changeData_tp}
                    queryFunc={this.queryTradePack}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_tp}
                />
                <div className="checkpionttitle">
                    <span>检查点（5）：XXD_ACCOUNT_LOG.BUSIID = XXD_TRADE_REQUEST.REQUESTID，只能查出2条记录</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点（6）：XXD_ACCOUNT_LOG.workmoney（买方变动金额）= 债权金额（XXD_TRADE_REQUEST.amount）</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点（7）：XXD_ACCOUNT_LOG.workmoney（卖方变动金额）= 债权金额（XXD_TRADE_REQUEST.amount）</span>
                </div>
                <Form
                    data={accountLog}
                    changeData={this.changeData_al}
                    queryFunc={this.queryAccountLog}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_al}
                />
            </div>;
    }

});

export default CreditorMatching;