/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
import Form from 'Form';
// import '../WSData/index.css';

var CompanyRegister = React.createClass({

    getInitialState(){
        return {
            selectedDb:0,

            // 查询责权匹配状态
            approInfoCenter:{
                selectedDb:0,
                flag:false,
                tableInfo:"XXD_USER_INFOAPPRO_CENTER '用户资料认证中'（0待认证1认证通过2认证失败3认证取消4认证过期5审核中）",
                data:[],
                title:[],
                bttButton:0, // 0 按钮文字：隐藏，1 按钮文字：显示
                inputText:[
                            {id:"moblie_aic",placeholder:"请填写登录账号"}
                        ],
                buttonText:"查询企业认证结果",
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

    changeData_aic(data){
        data = this.props.changeText(data);
        this.setState({
            approInfoCenter:data
        });
    },

    setLoadingIconDisplay_aic(flag){
        var approInfoCenter = this.state.approInfoCenter;
        approInfoCenter.loadingIconDisplay = flag;
        this.setState({
            approInfoCenter:approInfoCenter
        });
    },

    // 查询用户资金账户日志
    queryApproInfoCenter(wsData,event){
        var approInfoCenter = this.state.approInfoCenter;
        if (approInfoCenter.loadingIconDisplay === 1){
            return;
        }
        this.setLoadingIconDisplay_aic(1);
        event.preventDefault(); // 阻止表单提交
        var mobile = $("#moblie_aic").val();
        var selectedDb = this.state.selectedDb;
        var dbDesc = this.props.dbSource.find(item=>item.id===selectedDb).description;
        var url = server.redqueen + "/companyRegister/"+dbDesc+"/queryApproInfoCenter";
        var data = JSON.stringify({data:{mobile:mobile}});
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        this.props.httpClient(url,data,approInfoCenter,selectedDb)
                            .then(e=>this.setState({approInfoCenter:e}))
                            .then(e=>this.props.setMainSidebarHeight($('.content-wrapper')[0].offsetHeight))
                            .then(e=>this.setLoadingIconDisplay_aic(0));
    },

    render() {
        var wsData = {};
        var dbSource = this.props.dbSource;
        var selectedDb = this.state.selectedDb;
        var dbName = dbSource.find(item=>item.id===selectedDb).description;

        var approInfoCenter = this.state.approInfoCenter;
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
                <Form
                    data={approInfoCenter}
                    changeData={this.changeData_aic}
                    queryFunc={this.queryApproInfoCenter}
                    setLoadingIconDisplay={this.setLoadingIconDisplay}
                />

            </div>;
    }

});

export default CompanyRegister;