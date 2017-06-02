/**
 * Created by snow.zhang on 2017/5/22.
 */

import React from 'react';
import $ from 'jquery';
// import WSFormData from 'WSFormData';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './index.css';

var FlowData = React.createClass({

    getInitialState(){

        return {
                rspBCFlag:''
            };

    },

    sendMessage:function(url,type,flowLen,flowIndex,selectedFlow){
        var o = this.refs['sectionForm'];
        var inputs = o.getElementsByTagName('input');
        var len = inputs.length;

        var flowRelation = selectedFlow[flowIndex].relation;
        for(var key in flowRelation){
            if(key.indexOf("[") === 0){
                // 处理key，根据key获取需要被替换的字段
                var requestData = this.refs['jsonText'];
                var jsonText = requestData.value;
                var jsonObj = JSON.parse(jsonText);
                eval("jsonObj"+key+"='"+window.localStorage.getItem(flowRelation[key])+"'");
                // console.log("replaced requestData------>  ");
                console.log(jsonObj);
                requestData.value = JSON.stringify(jsonObj);
                continue;
            }
            for(var i=0;i<len;i++){
                var input = inputs[i];
                // console.log(input.name);
                if (input.name === key){
                    input.value = window.localStorage.getItem(flowRelation[key]);
                }
            }
        }
        // 定义请求报文
        var req = {
            url:url,
            type:type,
            headers:{},
            parameters:{},
            json:""
        };

        o = this.refs['sectionForm'];
        inputs = o.getElementsByTagName('input');
        len = inputs.length;
        var headers = {};
        var parameters ={};
        for(var i=0;i<len;i++){
            var input = inputs[i];
            if (input.getAttribute('in') === 'header'){
                headers[input.name] = input.value;
            }else if(input.getAttribute('in') === 'query'){
                parameters[input.name] = input.value;
            }else if(input.getAttribute('in') === 'path'){
                var key = input.name;
                var value = input.value;
                url = url.replace("{"+key+"}",value);
                req['url'] = url;
            }
        }
        req['headers'] = headers;
        req['parameters'] = parameters;
        if (type.toLowerCase() != 'get'){
            var jsonText = this.refs['jsonText'];
            req['json'] = jsonText.value;
            console.log("requestData------>  "+jsonText.value);
        }
        var data = {data:req}
        console.log(JSON.stringify(data));
        // 由于跨域问题，发送请求，后端调用接口
        $.ajax({
            type:"post", 
            dataType:"json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(data),
            // url:"http://172.16.16.136:8080/tyrant/ws/sendMessage", 
            url:"http://localhost:8080/ws/sendMessage", 
            success:function(data){
                // 保存全局变量
                var saveParameters = selectedFlow[flowIndex].saveParameters;
                // console.log(saveParameters);
                for(var saveP in saveParameters){
                    var tempValue = "";
                    eval("tempValue = data"+saveParameters[saveP]);
                    window.localStorage.setItem(saveP,tempValue);
                    // console.log(tempValue);
                    // console.log(window.localStorage.getItem(saveP));
                }


                
               

                // console.log(JSON.stringify(data,null,4));
                this.refs['rspBody'].style.height = '500px';
                this.refs['rspBody'].value = JSON.stringify(data,null,4);

                var allRsp = window.localStorage.getItem('allRsp');
                allRsp = allRsp==null?'':allRsp;
                allRsp += this.CurentTime() + "---->\n "+selectedFlow[flowIndex].name + " 接口请求信息 ：" + JSON.stringify(req) + "\n"
                allRsp += this.CurentTime() + "---->\n "+selectedFlow[flowIndex].name + " 接口响应信息 ：" + JSON.stringify(data,null,4) + "\n\n";
                window.localStorage.setItem("allRsp", allRsp);
                // console.log(window.localStorage.getItem('allRsp'));
                this.refs['allRspBody'].value = allRsp;
                this.props.setPageHeight(document.body.scrollHeight-50+'px');
                this.setState({
                    rspBCFlag:true
                });
            }.bind(this),
            error:function(e,textStatus){
                this.refs['rspBody'].style.height = '500px';
                this.refs['rspBody'].value = JSON.stringify(e,null,4);
                var allRsp = window.localStorage.getItem('allRsp');
                // console.log(allRsp);
                allRsp = allRsp==null?'':allRsp;
                allRsp += this.CurentTime() + " "+selectedFlow[flowIndex].name + " 接口请求信息---->：\n" + JSON.stringify(req) + "\n"
                allRsp += this.CurentTime() + " "+selectedFlow[flowIndex].name + " 接口响应信息---->：\n" + JSON.stringify(e,null,4) + "\n\n";
                window.localStorage.setItem("allRsp", allRsp);
                // console.log(window.localStorage.getItem('allRsp'));
                this.refs['allRspBody'].value = allRsp;
                // o.getElementsByTagName('textarea')[1].style.height = '1000px';
                // this.props.setPageHeight(document.body.scrollHeight-50+'px');
                this.setState({
                    rspBCFlag:false
                });

                /* 调试 */
                /*
                var flowRelationValue = {};
                if (flowIndex<flowLen-1 && flowIndex>=0){
                    if (undefined != flowRelation){
                        var relation = flowRelation[flowIndex];
                        for(var key in relation){
                            var tempkey = "test";
                            // eval("tempkey = data"+relation[key]);
                            flowRelationValue[key] = tempkey;
                        }
                    }
                    this.props.setReplaceParameters(flowRelationValue);
                }
                */
            }.bind(this)
        });
        // console.log("FlowData:"+document.body.scrollHeight);

    },
    prevFlow(selectedFlow,flowLen,flowIndex,flowRelation){
        if (flowIndex>0){
            // console.log('未减 '+this.props.flowIndex);
            var index = this.props.flowIndex-1;
            // console.log('已减 '+index);
            var pageHeight = document.body.scrollHeight-50+'px';
            // console.log(pageHeight);
            this.props.setFlow(selectedFlow,index,pageHeight,flowRelation);
        }else {
            alert('已经是第一步！');
        }
        this.setState({
            rspBCFlag:''
        });
    },
    nextFlow(selectedFlow,flowLen,flowIndex,flowRelation){
        if (flowIndex<flowLen-1){
            // console.log('未加 '+this.props.flowIndex);
            var index = this.props.flowIndex+1;
            // console.log('已加 '+index);
            var pageHeight = document.body.scrollHeight-50+'px';
            // console.log(pageHeight);
            // this.props.setPageHeight(pageHeight);
            this.props.setFlow(selectedFlow,index,pageHeight,flowRelation);
        }else {
            alert('已经是最后一步！');
        }
        this.setState({
            rspBCFlag:''
        });
    },

    clearAllParameters(){
        if (confirm("清除所有变量缓存！")){
            var allRsp = window.localStorage.getItem("allRsp");
            window.localStorage.clear();
            window.localStorage.setItem("allRsp",allRsp);   
        }
    },

    clearCache(){
        window.localStorage.setItem("allRsp","");
        var o = this.refs['sectionForm'];
        var textarea = o.getElementsByTagName('textarea');
        o.getElementsByTagName('textarea')[textarea.length-1].value = "";
        // o.getElementsByTagName('textarea')[1].style.height = '';
        // this.props.setPageHeight(document.documentElement.clientHeight-50+'px');

    },

    CurentTime(){
        var now = new Date();
        var year = now.getFullYear();       //年
        var month = now.getMonth() + 1;     //月
        var day = now.getDate();            //日
        var hh = now.getHours();            //时
        var mm = now.getMinutes();          //分
        var ss = now.getSeconds();           //秒
        var clock = year + "-";
        if(month < 10)
            clock += "0";
            clock += month + "-";
        if(day < 10)
            clock += "0";
            clock += day + " ";
        if(hh < 10)
            clock += "0";
            clock += hh + ":";
        if (mm < 10) clock += '0';
            clock += mm + ":";
        if (ss < 10) clock += '0';
            clock += ss;
        return(clock);
    },

    render() {
        var arrflowData = this.props.arrflowData;

        arrflowData.map(function(o,index){
            var parameters = [];
            var bodyParameters = [];
            if (o.bodyParameters != null){
                bodyParameters = o.bodyParameters;
            }else {
                // console.log(o);
                o.parameters.map(function(oo,index){
                    if (oo.in === 'body'){
                        bodyParameters.push(oo);
                    }else {
                        parameters.push(oo);
                    }
                });
                arrflowData[index].parameters = parameters;
                arrflowData[index].bodyParameters = bodyParameters;
            }
        });

        // console.log(arrflowData);
        var selectedFlow = this.props.selectedFlow;
        var flowLen = selectedFlow.length;
        var flowIndex = this.props.flowIndex;
        var flowRelation = this.props.flowRelation;
        var rspBCFlag = this.state.rspBCFlag;
        var allRsp = window.localStorage.getItem('allRsp');
        allRsp = allRsp==null?'':allRsp;
        return <div className="container" style={{width:'70%',margin:'10px',float:'left'}}>
            <section id="Reportsec" ref="sectionForm">
            {
                arrflowData.map(o=>
                <form key={o.index}>
                    <div className="row" style={{fontWeight:'bold'}}>
                        <div className="col-lg-3">
                            <label for="name">接口名称及描述：</label>
                        </div>
                        <div className="col-lg-8">
                            <label for="name">{o.wsName} - {o.description}</label>
                        </div>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '10px'}}></hr>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-lg-2">
                            <a onClick={this.sendMessage.bind(this,o.url,o.type,flowLen,flowIndex,selectedFlow)} className="large blue button" filetype="0" >
                            Submit</a>
                        </div>
                        <div className="col-lg-4" style={{fontSize:'12px',textAlign:'left'}}>
                            <label for="name">第{flowIndex+1}步，一共{flowLen}个步骤。</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2" id={flowIndex>0?'':'disC'}>
                            <a href="#" onClick={this.prevFlow.bind(this,selectedFlow,flowLen,flowIndex,flowRelation)} className="large blue button">
                                Prev
                            </a>
                        </div>
                        <div className="col-lg-2" id={flowIndex<flowLen-1?'':'disC'}>
                            <a href="#" onClick={this.nextFlow.bind(this,selectedFlow,flowLen,flowIndex,flowRelation)} className="large blue button">
                                Next
                            </a>
                        </div>
                        <div className="col-lg-3">
                            <a style={{width:'150px'}} onClick={this.clearAllParameters} className="large red button">
                                清除所有变量缓存
                            </a>
                        </div>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>

                    {
                        o.parameters.map(o=>
                            <div key={o.description} className="row">
                                <div className="col-lg-2">
                                    <label for="name">{o.name}：</label>
                                </div>
                                <div className="col-lg-4">
                                    <input type="text" className="form-control" defaultValue={o.default} in={o.in} name={o.name}/>
                                </div>
                                <div className="col-lg-5">
                                    <label for="name">{o.description}</label>
                                </div>
                            </div>)
                    }
                    {
                        o.bodyParameters.map(o=>
                            <div key={o.description} className="row">
                                <div className="col-lg-2">
                                    <label for="name">{o.name}：</label>
                                </div>
                                <div className="col-lg-6">
                                    <textarea ref="jsonText" style={{height:'300px',fontWeight:'bold'}} className="form-control" defaultValue={JSON.stringify(o.default,null,4)} in={o.in} name={o.name}/>
                                </div>
                                <div className="col-lg-5">
                                    <label for="name">{o.description}</label>
                                </div>
                            </div>)
                    }
                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>
                    <div className="rsp">
                        <div className="form-group">
                            <label className="col-lg-2" style={{paddingLeft:'0px'}} for="name">接口返回：</label>
                        </div>
                        <div>
                            <textarea ref="rspBody" readOnly="true" className="form-control" rows="3" style={{borderColor:rspBCFlag===''?'':rspBCFlag?'green':'red',borderWidth:rspBCFlag===''?'':'2px',background:'white',color:'black',marginBottom:'30px'}}></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <label for="name">全部接口返回：</label>
                        </div>
                        <div className="col-lg-3">
                            <a onClick={this.clearCache} style={{width:'100px'}} className="large orange button">清除缓存</a>
                        </div>
                    </div>
                        <div>
                            <textarea ref="allRspBody" value={allRsp} readOnly="true" className="form-control" rows="3" style={{height:'1000px',background:'white',color:'black',marginBottom:'100px',overflowY:'visible',borderColor:'orange',borderWidth:'2px'}}></textarea>
                        </div>
                </form>)
            }            
            </section>
        </div>;
    }

});

export default FlowData;