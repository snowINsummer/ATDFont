/**
 * Created by snow.zhang on 2017/6/14.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import server from 'server';
import LastFiveDaysResult from 'LastFiveDaysResult';

var Content = React.createClass({

    getInitialState(){
    	return {
            chartData:{}
    	};
    },

    componentDidMount(){
        var url = server.tyrant + "/testcase/queryLastSevenDaysResult";
        var listTestcaseId = {
            testcaseInfoList:[
                {
                    testcaseName:"IntegrationPlatform_WS_dev",
                    evironment:"dev"
                },
                {
                    testcaseName:"FileCenter_WS_dev",
                    evironment:"dev"
                },
                {
                    testcaseName:"TradeCenter_WS_stage",
                    evironment:"stage"
                },
                {
                    testcaseName:"UserCenter_WS_stage",
                    evironment:"stage"
                },
                {
                    testcaseName:"PayGate_WS_dev",
                    evironment:"dev"
                },
                {
                    testcaseName:"ApprovingSystem_WS_test",
                    evironment:"test"
                }
            ]
        };
        var data = JSON.stringify({data:listTestcaseId});
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
                this.setState({
                    chartData:data.data
                });
            }.bind(this)
        });
    },

	render(){
        // TODO 
        // phantomjs 部署到服务器
        // phantomjs 脚本加入到自动化测试框架中
        // jenkins 中配置插入图片
        // 
        // 后期，做一个接口，实时统计不同项目的数据，新建job-根据参数指定testcaseName-统计
        // 前段请求根据数据库配置来动态生成数据图表。
        // 
        var props = {};
        var chartData = this.state.chartData;
        console.log(chartData);
        var projectName = "最近七天";
        return(
            <div className="container" style={{margin:'10px',float:'left'}}>
                    <section id="Reportsec">
                        <article>
                            <h4 style={{marginTop:'20px',fontSize:'20px',textAlign:'center'}}></h4>
                            <div id="Report" style={{margin:'0 auto',fontSize:'18px',marginBottom:'2em'}}>
                                <LastFiveDaysResult chartData={chartData} projectName={projectName}>
                                </LastFiveDaysResult>
                            </div>
                        </article>
                    </section>
            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));

