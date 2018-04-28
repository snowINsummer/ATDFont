/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Form from 'Form';
// import '../WSData/index.css';

var CreditorExit = React.createClass({

    getInitialState(){
        return {
            selectedDb:0,

            // 查询责权匹配状态
            accountLog:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_ACCOUNT_LOG '用户资金账户日志'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[
                            {id:"schemeId_ac",placeholder:"请填写schemeId"},
                            {id:"salerMobile_ac",placeholder:"请填写salerMobile"},
                            {id:"tenderId_ac",placeholder:"请填写tenderId"}
                        ],
                buttonText:"查询用户资金账户日志",
                buttonWidth:"210px",
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

    changeData_ac(data){
        data = this.props.changeText(data);
        this.setState({
            accountLog:data
        });
    },

    setLoadingIconDisplay_ac(flag){
        var accountLog = this.state.accountLog;
        accountLog.loadingIconDisplay = flag;
        this.setState({
            accountLog:accountLog
        });
    },

    // 查询用户资金账户日志
    queryAccountLog(wsData,event){
        if (this.state.accountLog.loadingIconDisplay === 1){
            return;
        }
        this.setLoadingIconDisplay_ac(1);
        event.preventDefault(); // 阻止表单提交
        var schemeId = $("#schemeId_ac").val();
        var salerMobile = $("#salerMobile_ac").val();
        var tenderId = $("#tenderId_ac").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/creditorExit/"+dbDesc+"/queryAccountLog";
        var data = JSON.stringify({data:{schemeId:schemeId,salerMobile:salerMobile,tenderId:tenderId}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        var accountLog = this.state.accountLog;
        this.props.httpClient(url,data,accountLog,selectedDb)
                            .then(e=>this.setState({accountLog:e}))
                            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                            .then(e=>this.setLoadingIconDisplay_ac(0))
                            .fail(e=>this.setLoadingIconDisplay_ac(0))
                            ;
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;

        var accountLog = this.state.accountLog;
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
            <hr style={{marginTop: '10px'}}></hr>
                <div className="checkpionttitle">
                    <span>检查点(1)：XXD_ACCOUNT_LOG.WORKMONEY = ACCOUNT + EXPECTEDINTEREST</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点(2)：XXD_ACCOUNT_LOG.PCODE = 1001</span>
                </div>
                <div className="checkpionttitle">
                    <span>检查点(3)：XXD_ACCOUNT_LOG.USERID = 卖方USERID</span>
                </div>
                <Form
                    data={accountLog}
                    changeData={this.changeData_ac}
                    queryFunc={this.queryAccountLog}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_ac}
                />

            </div>;
    }

});

export default CreditorExit;