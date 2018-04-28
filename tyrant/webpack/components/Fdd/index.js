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
                inputText:[{id:"mobile",placeholder:"请填写手机号",width:"200px",isNotBlank:true}],
                buttonText:"查询签约短信",
                buttonWidth:"170px",
                dbName:"",
                loadingIconDisplay:0
            },
            borrowGuarantor:{
                selectedDb:0,
                flag:false,
                tableInfo:"RC_BORROW_GUARANTOR '担保人信息表（风控）'",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_guarantor",placeholder:"请填写标的编号",width:"200px",isNotBlank:true}],
                buttonText:"查询标的担保人",
                buttonWidth:"170px",
                dbName:"",
                loadingIconDisplay:0
            },
            corporatorMobile:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_USER_COMPANY '企业信息表",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_corporator",placeholder:"请填写标的编号",width:"200px",isNotBlank:true}],
                buttonText:"查询法人手机号",
                buttonWidth:"170px",
                dbName:"",
                loadingIconDisplay:0
            },
            creditorInfo:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_BORROW_TENDER '标的投标信息",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[{id:"borrowId_creditorInfo",placeholder:"请填写标的编号",width:"200px",isNotBlank:true}],
                buttonText:"查询债权信息",
                buttonWidth:"170px",
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

    setLoadingIconDisplay_sm(flag){
        var signatoryMessage = this.state.signatoryMessage;
        signatoryMessage.loadingIconDisplay = flag;
        this.setState({
            signatoryMessage:signatoryMessage
        });
    },
    setLoadingIconDisplay_bg(flag){
        var borrowGuarantor = this.state.borrowGuarantor;
        borrowGuarantor.loadingIconDisplay = flag;
        this.setState({
            borrowGuarantor:borrowGuarantor
        });
    },
    setLoadingIconDisplay_cm(flag){
        var corporatorMobile = this.state.corporatorMobile;
        corporatorMobile.loadingIconDisplay = flag;
        this.setState({
            corporatorMobile:corporatorMobile
        });
    },
    setLoadingIconDisplay_ci(flag){
        var creditorInfo = this.state.creditorInfo;
        creditorInfo.loadingIconDisplay = flag;
        this.setState({
            creditorInfo:creditorInfo
        });
    },

    getSignatoryMessage(wsData,event){
        var signatoryMessage = this.state.signatoryMessage;
        if (signatoryMessage.loadingIconDisplay === 1){
            return;
        }
        event.preventDefault(); // 阻止表单提交
        var mobileNum = $("#mobile").val();
        if (mobileNum == ""){
            alert(signatoryMessage.inputText.find(item=>item.id==="mobile").placeholder);
            return;
        }
        this.setLoadingIconDisplay_sm(1);
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        // console.log(dbDesc);
        var url = server.redqueen + "/fdd/"+dbDesc+"/getSignatoryMessage";
        var data = JSON.stringify({data:{mobile:mobileNum}});
        // console.log(JSON.stringify(data,null,4));
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,signatoryMessage,selectedDb)
                    .then(e=>this.setState({signatoryMessage:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_sm(0))
                    .fail(e=>this.setLoadingIconDisplay_sm(0))
                    ;
    },
    queryBorrowGuarantor(wsData,event){
        var borrowGuarantor = this.state.borrowGuarantor;
        if (borrowGuarantor.loadingIconDisplay === 1){
            return;
        }
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_guarantor").val();
        if (borrowId == ""){
            alert(borrowGuarantor.inputText.find(item=>item.id==="borrowId_guarantor").placeholder);
            return;
        }
        this.setLoadingIconDisplay_bg(1);
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryBorrowGuarantor";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,borrowGuarantor,selectedDb)
                    .then(e=>this.setState({borrowGuarantor:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_bg(0))
                    .fail(e=>this.setLoadingIconDisplay_bg(0))
                    ;
    },
    
    queryCorporatorMobile(wsData,event){
        var corporatorMobile = this.state.corporatorMobile;
        if (corporatorMobile.loadingIconDisplay === 1){
            return;
        }
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_corporator").val();
        if (borrowId == ""){
            alert(corporatorMobile.inputText.find(item=>item.id==="borrowId_corporator").placeholder);
            return;
        }
        this.setLoadingIconDisplay_cm(1);
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryCorporatorMobile";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,corporatorMobile,selectedDb)
                    .then(e=>this.setState({corporatorMobile:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_cm(0))
                    .fail(e=>this.setLoadingIconDisplay_cm(0))
                    ;
    },
    queryCreditorInfo(wsData,event){
        var creditorInfo = this.state.creditorInfo;
        if (creditorInfo.loadingIconDisplay === 1){
            return;
        }
        event.preventDefault(); // 阻止表单提交
        var borrowId = $("#borrowId_creditorInfo").val();
        if (borrowId == ""){
            alert(creditorInfo.inputText.find(item=>item.id==="borrowId_creditorInfo").placeholder);
            return;
        }
        this.setLoadingIconDisplay_ci(1);
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/fdd/"+dbDesc+"/queryCreditorInfo";
        var data = JSON.stringify({data:{borrowId:borrowId}});
        console.log(data);
        // var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,creditorInfo,selectedDb)
                    .then(e=>this.setState({creditorInfo:e}))
                    .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                    .then(e=>this.setLoadingIconDisplay_ci(0))
                    .fail(e=>this.setLoadingIconDisplay_ci(0))
                    ;
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
                    setLoadingIconDisplay={this.setLoadingIconDisplay_sm}
                />
                <Form
                    data={borrowGuarantor}
                    changeData={this.changeData_bg}
                    queryFunc={this.queryBorrowGuarantor}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_bg}
                />
                <Form
                    data={corporatorMobile}
                    changeData={this.changeData_cm}
                    queryFunc={this.queryCorporatorMobile}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_cm}
                />
                <Form
                    data={creditorInfo}
                    changeData={this.changeData_ci}
                    queryFunc={this.queryCreditorInfo}
                    setLoadingIconDisplay={this.setLoadingIconDisplay_ci}
                />
            </div>;
    }

});

export default Fdd;