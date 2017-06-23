/**
 * Created by snow.zhang on 2017/5/22.
 */

import React from 'react';
import $ from 'jquery';
// import WSFormData from 'WSFormData';
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// import './index.css';

var WSData = React.createClass({

    getInitialState(){

        return {
                rspBCFlag:'',
                popUpFrameDisplay:true
            };

    },
    
    componentDidMount(){
        this.props.setMainSidebarHeight(document.body.scrollHeight+'px');
    },

    handleClick(wsData){
        this.setState({
            wsData:wsData
        });
    },
    submitHandler(wsData,event){
        console.log(wsData);

        event.preventDefault(); // 阻止表单提交
        // var wsData = this.state.wsData;
        var url = "http://" + wsData.host + wsData.basePath + wsData.name;
        var type = wsData.type;
        // 标记参数类型json||FormData
        var isFormData = false;
        var file;
        // 定义请求报文
        var req = {
            url:url,
            type:type,
            headers:{},
            parameters:{},
            json:""
        };
        var headers = {};
        var parameters ={};

        var inputs = event.target.getElementsByTagName('input');
        var len = inputs.length;
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
            }else if(input.getAttribute('in') === 'formData'){
                isFormData = true;
                file = input.files[0];
            }
        }
        req['headers'] = headers;
        req['parameters'] = parameters;
        var textareas = event.target.getElementsByTagName('textarea');
        var textareaLen = textareas.length;
        // console.log(textareas);
        var jsonText;
        if (type.toLowerCase() != 'get'){
            for(var i=0;i<textareaLen;i++){
                if (textareas[i].id == "jsonText"){
                    jsonText = textareas[i];
                    break;
                }
            }
            // var jsonText = this.refs['jsonText'];
            // req['json'] = jsonText===undefined?'':jsonText.value;
        }
        req['json'] = jsonText===undefined?'':jsonText.value;


        var data;
        var contentType;
        var url;
        var mimeType;
        if (isFormData){
            data = new FormData();
            data.append("file",file);
            data.append("data",JSON.stringify(req));
            contentType = false;
            // mimeType = "multipart/form-data";
            url = "http://172.16.16.136:8080/tyrant/ws/uploadFile";
            // url = "http://localhost:8080/ws/uploadFile";
            console.log(file);
            console.log(JSON.stringify(req));
        }else {
            data = JSON.stringify({data:req});
            contentType = "application/json; charset=utf-8";
            // mimeType = "text/plain;charset=UTF-8";
            url = "http://172.16.16.136:8080/tyrant/ws/sendMessage";
            // url = "http://localhost:8080/ws/sendMessage";
            console.log(data);
        }

        var allRsp = window.localStorage.getItem('allRsp');
        allRsp = allRsp=="null"?'':allRsp;
        allRsp += this.CurentTime() + "---->\n "+wsData.name + " 接口请求信息 ：" + JSON.stringify(req) + "\n"

        // 由于跨域问题，发送请求，后端调用接口
        $.ajax({
            type:"post", 
            dataType:"json",
            "processData": false,
            contentType: contentType,
            data : data,
            // mimeType: mimeType,
            url:url, 
            success:function(data){
                // 保存全局变量
                // var saveParameters = selectedFlow[flowIndex].saveParameters;
                var saveParameters = {};
                var requestP = saveParameters.request;
                var responseP = saveParameters.response;
                // console.log(requestP);
                try{
                    for(var saveP in requestP){
                        var tempData = JSON.parse(req['json']);
                        var tempValue = "";
                        eval("tempValue = tempData"+requestP[saveP]);
                        window.localStorage.setItem(saveP,tempValue);
                    }

                    for(var saveP in responseP){
                        var tempValue = "";
                        eval("tempValue = data"+responseP[saveP]);
                        if (undefined != tempValue){
                            window.localStorage.setItem(saveP,tempValue);
                        }
                        // console.log(tempValue);
                        // console.log(window.localStorage.getItem(saveP));
                    }
                }catch(err){
                   console.log(err);
                }

                this.refs['rspBody'].style.height = '500px';
                this.refs['rspBody'].value = JSON.stringify(data,null,4);

                allRsp += this.CurentTime() + "---->\n "+wsData.name+ " 接口响应信息 ：" + JSON.stringify(data,null,4) + "\n\n";
                window.localStorage.setItem("allRsp", allRsp);
                this.refs['allRspBody'].value = allRsp;
                this.setState({
                    rspBCFlag:true
                });
                this.props.setMainSidebarHeight(document.body.scrollHeight+'px');



            }.bind(this),
            error:function(e,textStatus){
                this.refs['rspBody'].style.height = '500px';
                this.refs['rspBody'].value = JSON.stringify(e,null,4);
                var allRsp = window.localStorage.getItem('allRsp');
                allRsp += this.CurentTime() + " "+wsData.name + " 接口响应信息---->：\n" + JSON.stringify(e,null,4) + "\n\n";
                window.localStorage.setItem("allRsp", allRsp);
                this.refs['allRspBody'].value = allRsp;
                // o.getElementsByTagName('textarea')[1].style.height = '1000px';
                this.setState({
                    rspBCFlag:false
                });
            }.bind(this)
        });


    },

    clearAllParameters(){
        if (confirm("清除所有变量缓存！")){
            var allRsp = window.localStorage.getItem("allRsp");
            window.localStorage.clear();
            window.localStorage.setItem("allRsp",allRsp);
            var o = this.refs['popUpFrame'];
            o.innerText = "";
        }
    },

    clearCache(){
        window.localStorage.setItem("allRsp","");
        var textarea = this.refs['allRspBody'];
        textarea.value = "";
        // this.props.setPageHeight(document.documentElement.clientHeight-50+'px');

    },

    popUpFrame(){
        var clearPara = this.refs['clearPara'];
        var clearParaParent = clearPara.parentNode;
        var clearParaParentOffsetWidth = clearParaParent.offsetWidth;
        var clearParaWidth = clearPara.clientWidth;
        var clearParaLeft = clearParaParentOffsetWidth - clearParaWidth - 15
        var popUpFrame = this.refs['popUpFrame'];
        popUpFrame.style.left = "-"+clearParaLeft+"px";
        var allRsp = window.localStorage.getItem("allRsp");
        window.localStorage.removeItem("allRsp");
        if (window.localStorage.length > 0){
            popUpFrame.value = JSON.stringify(window.localStorage,null,4);
        }else {
            popUpFrame.value = "";
        }
        window.localStorage.setItem("allRsp", allRsp);
        this.setPopDownFrameVisiable();
    },
    setPopDownFrameVisiable(){
        this.setState({
            popUpFrameDisplay:false
        });
    },
    popDownFrame(){
        this.setState({
            popUpFrameDisplay:true
        });
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
        // console.log(this.props.setMainSidebarHeight);
        var wsData = this.props.wsData;
        var wsDescription = wsData.summary + "，" + wsData.description;

        // var selectedFlow = this.props.selectedFlow;
        // var flowRelation = this.props.flowRelation;

            var parameters = [];
            var bodyParameters = [];
            if (wsData.bodyParameters != null){
                bodyParameters = wsData.bodyParameters;
            }else {
                // var flowRelation = selectedFlow[flowIndex].relation;
                // TODO 调接口，实时从数据库获取关系。
                var flowRelation = {};
                wsData.parameters.map(function(oo,index){
                    // console.log(oo);
                    if (oo.in === 'body'){
                        for(var key in flowRelation){
                            // var tempJsonData = oo.default;
                            // var tempVar = "";
                            if(key.indexOf("[") === 0){
                                eval("oo.default"+key+"='"+window.localStorage.getItem(flowRelation[key])+"'");
                            }
                        }
                        bodyParameters.push(oo);
                    }else {
                        for(var key in flowRelation){
                            // var tempJsonData = oo.default;
                            // var tempVar = "";
                            if(key.indexOf("[") === -1){
                                if (key === oo.name){
                                    oo.default = window.localStorage.getItem(flowRelation[key]);
                                }
                            }
                        }
                        parameters.push(oo);
                    }
                });
                wsData.parameters = parameters;
                wsData.bodyParameters = bodyParameters;
            }


        // console.log(wsData);

        var rspBCFlag = this.state.rspBCFlag;
        var allRsp = window.localStorage.getItem('allRsp');
        // console.log(allRsp);
        allRsp = allRsp=="null"?'':allRsp;
        return <form className="wsform" onSubmit={this.submitHandler.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        <div className="col-lg-2">
                            <label for="name">接口名称及描述：</label>
                        </div>
                        <div className="col-lg-8">
                            <label for="name">{wsData.name} - {wsDescription}</label>
                        </div>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '10px'}}></hr>

                    <div className="row">
                        <div className="col-lg-2">
                            <input type="submit" id="submit" className="large blue button" value="Submit">
                            </input>
                        </div>
                        <div className="col-lg-3" style={{display:'none',fontSize:'12px',textAlign:'left'}}>
                            <label for="name">加载进度条</label>
                        </div>
                        <div className="col-lg-3">
                            <a id="a" ref="clearPara" style={{width:'150px'}} onClick={this.clearAllParameters} onMouseOver={this.popUpFrame} onMouseOut={this.popDownFrame}
                                className="large red button">
                                清除所有变量缓存
                            </a>
                        </div>
                        <div id="b" className="col-lg-3">
                            <textarea ref="popUpFrame" style={{display:this.state.popUpFrameDisplay?'none':'block',left:this.state.popUpFrameLeft}} 
                                    onMouseOver={this.setPopDownFrameVisiable} onMouseOut={this.popDownFrame}
                                        className='pop-up-frame' readOnly="true"></textarea>
                        </div>
                    </div>


                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>
                    {
                        wsData.parameters.map(o=>
                            o.in==='formData'
                            ?
                            <div key={o.description} className="row">
                                <div className="col-lg-2">
                                    <label for="name">{o.name}：</label>
                                </div>
                                <div className="col-lg-4">
                                    <input type="file" className="form-control" defaultValue={o.default} in={o.in} name={o.name}/>
                                </div>
                                <div className="col-lg-5">
                                    <label for="name">{o.description}</label>
                                </div>
                            </div>
                            :
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
                            </div>
                            )
                    }

                    {
                        wsData.bodyParameters.map(o=>
                            <div key={o.description} className="row">
                                <div className="col-lg-2">
                                    <label for="name">{o.name}：</label>
                                </div>
                                <div className="col-lg-6">
                                    <textarea id="jsonText" style={{height:'300px',fontWeight:'bold'}} className="form-control" defaultValue={JSON.stringify(o.default,null,4)} in={o.in} name={o.name}/>
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
                    <hr style={{border:'1px solid #000',marginTop: '40px',marginBottom:'50px'}}></hr>
                    <div className="row" style={{marginBottom:'10px'}}>
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
                </form>
            ;
    }

});

export default WSData;