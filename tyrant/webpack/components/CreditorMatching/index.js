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
                dbName:""
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
                dbName:""
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

    // 查询责权转让申请
    queryTradeRequest(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var tenderId = $("#tenderId_tm").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorMatching/"+dbDesc+"/queryTradeRequest";
        var data = JSON.stringify({data:{tenderId:tenderId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        var tradeRequest = this.state.tradeRequest;
        this.props.httpClient(url,data,tradeRequest,selectedDb).then(e=>this.setState({tradeRequest:e}));
    },
    // 查询责权转让记录
    queryTradePack(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var requestId = $("#requestId_tp").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorMatching/"+dbDesc+"/queryTradePack";
        var data = JSON.stringify({data:{requestId:requestId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        var tradePack = this.state.tradePack;
        this.props.httpClient(url,data,tradePack,selectedDb).then(e=>this.setState({tradePack:e}));
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;
        
        var tradeRequest = this.state.tradeRequest;
        var tradePack = this.state.tradePack;
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
                />
                <div className="checkpionttitle">
                    <span>检查点（1）：XXD_TRADE_PACK 新增一条记录</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点（2）：XXD_BORROW_TENDER.curuserid（当前持有用户） = XXD_TRADE_PACK.userid（买入用户）</span>
                </div>
                <Form
                    data={tradePack}
                    changeData={this.changeData_tp}
                    queryFunc={this.queryTradePack}
                />
            </div>;
    }

});

export default CreditorMatching;