/**
 * Created by snow.zhang on 2017/6/14.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import server from 'server';
import LastFiveDaysResult from '../wsAutomationTestReport/components/LastFiveDaysResult';

var Content = React.createClass({

    getInitialState(){
    	return {
            chartData:{},
            historyReportInfo:[]
    	};
    },

    componentDidMount(){
        // 获取最近五天执行用例情况
        var url = server.tyrant + "/testcase/queryLastFiveDaysResult";
        var listTestcaseId = {
            testcaseInfoList:[
                {
                    testcaseName:"IntegrationPlatform_WS_dev",
                    evironment:"dev"
                },
                {
                    testcaseName:"TradeCenter_WS_stage",
                    evironment:"stage"
                },
                {
                    testcaseName:"UserCenter_WS_stage",
                    evironment:"stage"
                }
            ]
        };
        var data = JSON.stringify({data:listTestcaseId});
        // console.log(data);
        var contentType = "application/json; charset=utf-8";
        $.ajax({
            type:"post", 
            dataType:"json",
            "processData": false,
            contentType: contentType,
            data : data,
            url:url, 
            success:function(data){
                // console.log(data);
                this.setState({
                    chartData:data.data
                });
            }.bind(this)
        });

        // 获取最近五天测试报告链接
        url = server.tyrant + "/testcase/queryLastFiveDaysResultReport";
        $.ajax({
            type:"post", 
            dataType:"json",
            "processData": false,
            contentType: contentType,
            data : data,
            url:url, 
            success:function(data){
                // console.log(data);
                this.setState({
                    historyReportInfo:data.data
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
        var projectName = "最近五天";
        var historyReportInfo = this.state.historyReportInfo;
        console.log(historyReportInfo);
      
        return(
            <div className="container" style={{margin:'10px'}}>
                    <section style={{textAlign:'left',float:'left'}} id="Menu">
                        <h4 style={{textAlign:'left',fontSize:'20px',width:'200px'}}>报告链接</h4>
                        {
                            historyReportInfo.map(o=>
                            <ul key={o.testcaseName} style={{textAlign:'left',width:'200px',color:'#000080'}} id="l">
                                <div>
                                    <span>{o.moduleName}</span>
                                </div>
                                {
                                    o.listReport.map(o=>
                                        <li key={o.reportTime}>
                                            <a target='_blank' href={o.reportLink} style={{fontSize:'12px',color:'#000080'}}>{o.reportTime}</a>
                                        </li>
                                        )
                                }
                            </ul>)
                        }
                    </section>
                    <section id="Reportsec" style={{float:'left'}}>
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

