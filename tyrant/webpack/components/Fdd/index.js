/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Table from 'Table';
// import '../WSData/index.css';

var Fdd = React.createClass({

    getInitialState(){
        return {

            selectedDb:1,

            signatoryMessage:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_MESSAGE_SITE_SENDLOGS '系统发送信件日志表'",
                data:[],
                title:[],
                bttButton:0 // 0 按钮文字：隐藏，1 按钮文字：显示
            },
            borrowGuarantor:{
                selectedDb:0,
                flag:false,
                tableInfo:"RC_BORROW_GUARANTOR '担保人信息表（风控）'",
                data:[],
                title:[],
                bttButton:0 // 0 按钮文字：隐藏，1 按钮文字：显示
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
    changeData_sm(data){
        data = this.props.changeText(data);
        this.setState({
            signatoryMessage:data
        });
    },
    changeData_bg(data){
        data = this.props.changeText(data);
        this.setState({
            borrowGuarantor:data
        });
    },

    getSignatoryMessage(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var mobileNum = $("#mobile").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        // console.log(dbDesc);
        var url = server.redqueen + "/fdd/"+dbDesc+"/getSignatoryMessage";
        var data = JSON.stringify({data:{mobile:mobileNum}});
        // console.log(JSON.stringify(data,null,4));
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var signatoryMessage = this.state.signatoryMessage;
        this.props.httpClient(url,data,signatoryMessage,selectedDb).then(e=>this.setState({signatoryMessage:e}));

    },
    queryBorrowGuarantor(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_guarantor").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryBorrowGuarantor";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var borrowGuarantor = this.state.borrowGuarantor;
        this.props.httpClient(url,data,borrowGuarantor,selectedDb).then(e=>this.setState({borrowGuarantor:e}));
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;
        // var signatoryMessageTitle = this.state.signatoryMessageTitle;
        var signatoryMessage = this.state.signatoryMessage;
        var bttDbName = dbSource.find(item=>item.id===signatoryMessage.selectedDb).description;
        var borrowGuarantor = this.state.borrowGuarantor;
        var bgDbName = dbSource.find(item=>item.id===borrowGuarantor.selectedDb).description;
        // console.log(JSON.stringify(signatoryMessage,null,4));
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
                <form className="wsform" onSubmit={this.getSignatoryMessage.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        <div className="col-lg-2">
                            <input id="mobile" type="text" className="form-control" placeholder="请填写手机号" defaultValue=""/>
                        </div>
                        <div className="col-lg-2">
                            <input type="submit" id="submit" className="large blue button" value="查询签约短信">
                            </input>
                        </div>
                        <div className="col-lg-1">
                            <a onClick={this.changeData_sm.bind(this,signatoryMessage)} style={{width:'100px'}} className="large orange button">{signatoryMessage.bttButton===0?'隐藏':'显示'}</a>
                        </div>
                    </div>
                    <Table 
                        dbName={bttDbName}
                        data={signatoryMessage}
                    />
                    
                </form>
                <form className="wsform" onSubmit={this.queryBorrowGuarantor.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        <div className="col-lg-2">
                            <input id="borrowId_guarantor" type="text" className="form-control" placeholder="请填写标的编号" defaultValue=""/>
                        </div>
                        <div className="col-lg-2">
                            <input type="submit" id="submit" className="large blue button" value="查询标的担保人">
                            </input>
                        </div>
                        <div className="col-lg-1">
                            <a onClick={this.changeData_bg.bind(this,borrowGuarantor)} style={{width:'100px'}} className="large orange button">{borrowGuarantor.bttButton===0?'隐藏':'显示'}</a>
                        </div>
                    </div>
                    <Table 
                        dbName={bgDbName}
                        data={borrowGuarantor}
                    />
                </form>

            </div>;
    }

});

export default Fdd;