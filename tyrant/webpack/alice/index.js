/**
 * Created by snow.zhang on 2017/6/14.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import server from 'server';
import SendmailPageviewsVisitorDailyRecord from 'SendmailPageviewsVisitorDailyRecord';

var Content = React.createClass({

    getInitialState(){
    	return {
            chartData:{}
    	};
    },

    componentDidMount(){
        var url = server.alice + "/statistics/queryDailyPageviewsAndVisitorAndSendMail";
        var listTestcaseId = {
        };
        var data = JSON.stringify({});
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
    },

	render(){
        var props = {};
        var chartData = this.state.chartData;
        // console.log(chartData);
        var projectName = "访客、浏览、广告";
        return(
            <div className="container" style={{margin:'10px',float:'left'}}>
                    <section id="Reportsec">
                        <article>
                            <h4 style={{marginTop:'20px',fontSize:'20px',textAlign:'center'}}></h4>
                            <div id="Report" style={{margin:'0 auto',fontSize:'18px',marginBottom:'2em'}}>
                                <SendmailPageviewsVisitorDailyRecord chartData={chartData} projectName={projectName}>
                                </SendmailPageviewsVisitorDailyRecord>
                            </div>
                        </article>
                    </section>
            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));

