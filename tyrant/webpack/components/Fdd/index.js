/**
 * Created by snow.zhang on 2018/01/03.
 */

import React from 'react';
import $ from 'jquery';
import server from 'server';
import Select from 'Select';
// import '../WSData/index.css';

var Fdd = React.createClass({

    getInitialState(){
        return {
            signatoryMessage:{
                flag:false,
                tableInfo:"XXD_MESSAGE_SITE_SENDLOGS '系统发送信件日志表'",
                data:[],
                title:[]
            }
            // signatoryMessage:[],
            // signatoryMessageTitle:[]
        };
    },

    getSignatoryMessage(wsData,event){
        event.preventDefault(); // 阻止表单提交
        var mobileNum = $("#mobile").val();
        // console.log(mobileNum);
        var url = server.redqueen + "/fdd/stage/getSignatoryMessage";
        var data = JSON.stringify({data:{mobile:mobileNum}});
        // console.log(JSON.stringify(data,null,4));
        console.log(data);
        var contentType = "application/json; charset=utf-8";
        $.ajax({
            type:"post", 
            dataType:"json",
            "processData": false,
            contentType: contentType,
            data : data,
            url:url, 
            success:function(data){
                console.log(data);
                var signatoryMessage = this.state.signatoryMessage;
                signatoryMessage.flag = true;
                var getData = data.data;
                if (getData.length>0){
                    var arr = [];
                    for(var key in getData[0]){
                        arr.push({name:key});
                    }
                    signatoryMessage.title = arr;
                    signatoryMessage.data = getData;

                }
                this.setState({
                    signatoryMessage:signatoryMessage
                });
                // console.log(this.state.signatoryMessage);
            }.bind(this)
        });
    },

    render() {
        var wsData = {};
        // var signatoryMessageTitle = this.state.signatoryMessageTitle;
        var signatoryMessage = this.state.signatoryMessage;
        return <form className="wsform" onSubmit={this.getSignatoryMessage.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        <div className="col-lg-2">
                            <input id="mobile" type="text" className="form-control" placeholder="请填写手机号" defaultValue=""/>
                        </div>
                        <div className="col-lg-3">
                            <input type="submit" id="submit" className="large blue button" value="查询签约短信">
                            </input>
                        </div>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '10px'}}></hr>
                    <div className="panel panel-default" style={{display:signatoryMessage.flag===false?'none':'block'}}>
                      <div className="panel-heading">{signatoryMessage.tableInfo}</div>
                      <table className="table" style={{backgroundColor:'#C5EEC9'}}>
                        <thead>
                          <tr>
                            {
                                signatoryMessage.title.map(o=>
                                    o.name==='sendTime'?
                                        <th style={{width:'100px'}} key={o.name}>{o.name}</th>
                                    :
                                        <th key={o.name}>{o.name}</th>
                                    )
                            }
                          </tr>
                        </thead>
                        <tbody>
                            {
                                signatoryMessage.data.map(o=>
                                  <tr key={o.sendTime}>
                                    <td>{o.userId}</td>
                                    <td>{o.sendReason}</td>
                                    <td>{o.context}</td>
                                    <td>{o.sendTime}</td>
                                  </tr>
                                )
                            }
                        </tbody>
                      </table>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '10px'}}></hr>
                </form>
                    ;
    }

});

export default Fdd;