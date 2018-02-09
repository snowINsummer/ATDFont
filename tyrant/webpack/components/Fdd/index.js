/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Form from 'Form';
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
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"mobile",placeholder:"请填写手机号",width:"200px"}],
                buttonText:"查询签约短信",
                buttonWidth:"170px",
                dbName:""
            },
            borrowGuarantor:{
                selectedDb:0,
                flag:false,
                tableInfo:"RC_BORROW_GUARANTOR '担保人信息表（风控）'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_guarantor",placeholder:"请填写标的编号",width:"200px"}],
                buttonText:"查询标的担保人",
                buttonWidth:"170px",
                dbName:""
            },
            corporatorMobile:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_USER_COMPANY '企业信息表",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_corporator",placeholder:"请填写标的编号",width:"200px"}],
                buttonText:"查询法人手机号",
                buttonWidth:"170px",
                dbName:""
            },
            creditorInfo:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_BORROW_TENDER '标的投标信息",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_creditorInfo",placeholder:"请填写标的编号",width:"200px"}],
                buttonText:"查询债权信息",
                buttonWidth:"170px",
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
    changeData_cm(data){
        data = this.props.changeText(data);
        this.setState({
            corporatorMobile:data
        });
    },
    changeData_ci(data){
        data = this.props.changeText(data);
        this.setState({
            creditorInfo:data
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
        this.props.httpClient(url,data,signatoryMessage,selectedDb)
            .then(e=>this.setState({signatoryMessage:e}))
            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight));

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
        this.props.httpClient(url,data,borrowGuarantor,selectedDb)
            .then(e=>this.setState({borrowGuarantor:e}))
            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight));
    },
    
    queryCorporatorMobile(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_corporator").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryCorporatorMobile";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var corporatorMobile = this.state.corporatorMobile;
        this.props.httpClient(url,data,corporatorMobile,selectedDb)
            .then(e=>this.setState({corporatorMobile:e}))
            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight));
    },
    queryCreditorInfo(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_creditorInfo").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryCreditorInfo";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        var creditorInfo = this.state.creditorInfo;
        this.props.httpClient(url,data,creditorInfo,selectedDb)
            .then(e=>this.setState({creditorInfo:e}))
            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight));

    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;
        // var signatoryMessageTitle = this.state.signatoryMessageTitle;
        var signatoryMessage = this.state.signatoryMessage;
        var borrowGuarantor = this.state.borrowGuarantor;
        var corporatorMobile = this.state.corporatorMobile;
        var creditorInfo = this.state.creditorInfo;
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
                <Form
                    data={signatoryMessage}
                    changeData={this.changeData_sm}
                    queryFunc={this.getSignatoryMessage}
                />
                <Form
                    data={borrowGuarantor}
                    changeData={this.changeData_bg}
                    queryFunc={this.queryBorrowGuarantor}
                />
                <Form
                    data={corporatorMobile}
                    changeData={this.changeData_cm}
                    queryFunc={this.queryCorporatorMobile}
                />
                <Form
                    data={creditorInfo}
                    changeData={this.changeData_ci}
                    queryFunc={this.queryCreditorInfo}
                />
            </div>;
    }

});

export default Fdd;