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
                wsFlow:[{
                    "flowId":1,
                    "wsFlow":['/bids','/bids/{bidCode}']
                }]
            };

    },

    sendMessage:function(url,type){
        // 定义请求报文
        var req = {
            url:url,
            type:type,
            headers:{},
            parameters:{},
            body:""
        };

        var o = this.refs['sectionForm'];
        var inputs = o.getElementsByTagName('input');
        var len = inputs.length;
        var headers = {};
        var parameters ={};
        for(var i=0;i<len;i++){
            var input = inputs[i];
            if (input.getAttribute('in') === 'header'){
                headers[input.name] = input.value;
            }else if(input.getAttribute('in') === 'query'){
                parameters[input.name] = input.value;
            }else if(input.getAttribute('in') === 'body'){
                req['body'] = input.value
            }
        }
        req['headers'] = headers;
        req['parameters'] = parameters;
        var data = {data:req}
        console.log(JSON.stringify(data));
        // o.getElementsByTagName('textarea')[0].value = 111;
        // 由于跨域问题，发送请求，后端调用接口
        $.ajax({
            type:"post", 
            dataType:"json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify(data),
            url:"http://172.16.16.136:8080/tyrant/ws/sendMessage", 
            success:function(data){ 
                o.getElementById('rspBody').value = data;
            }.bind(this)
        });
    },
    prevFlow(){
        // console.log('未减 '+this.props.flowIndex);
        var index = this.props.flowIndex-1;
        // console.log('已减 '+index);
        this.props.setFlow(this.state.wsFlow,index);
    },
    nextFlow(){
        // console.log('未加 '+this.props.flowIndex);
        var index = this.props.flowIndex+1;
        // console.log('已加 '+index);
        this.props.setFlow(this.state.wsFlow,index);
    },

    render() {
        var arrflowData = this.props.arrflowData;
        console.log(arrflowData);
        // var prevFlow = this.props.prevFlow;
        // console.log(prevFlow);
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

                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>
                    <div className="row" style={{marginTop:'20px'}}>
                        <div className="col-lg-2">
                            <a id="uploadFile" onClick={this.sendMessage.bind(this,o.url,o.type)} className="large blue button" filetype="0" >
                            Submit</a>
                        </div>
                        <div className="col-lg-2" style={{display:'none',fontSize:'12px',textAlign:'left'}} id="infoLog">
                            <label for="name"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <a id="uploadFile" onClick={this.prevFlow} className="large blue button">Prev</a>
                        </div>
                        <div className="col-lg-2">
                            <a id="uploadFile" onClick={this.nextFlow} className="large blue button">Next</a>
                        </div>
                    </div>
                    <div className="rsp">
                        <div className="form-group">
                            <label className="col-lg-2" style={{paddingLeft:'0px'}} for="name">接口返回：</label>
                        </div>
                        <div>
                            <textarea readOnly="true" className="form-control" rows="3" style={{height:'300px',background:'white',color:'black'}}></textarea>
                        </div>
                    </div>
                </form>)
            }            
            </section>
        </div>;
    }

});

export default FlowData;