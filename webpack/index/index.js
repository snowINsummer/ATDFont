/**
 * Created by snow.zhang on 2016/6/16.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import MainHeader from 'MainHeader';
import ProductList from 'ProductList';
import ProjectData from 'ProjectData';

var Content = React.createClass({

    getInitialState(){
        return {
                    lastResultDetail:[],
                    historyReport:{},
                    chartData:{},
                    projectName : '',
                    solidFlag : false,
                };
    },

	getChartData(projectId){
	    $.ajax({
	        type:"post", 
	        dataType:"json",
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify({'projectId': projectId}),
	        url:"http://localhost:8080/ws/rest/project/queryChartData", 
	        success:function(chartParam){ 
	        	
	        	this.setState({
	        		chartData : chartParam.data
	        	});
/*	            var seriesLength = chart.series.length;
	            //动态设置categories数据
	            chart.xAxis[0].setCategories(chartParam.categoryList);
	            chart.setTitle({
	                text:value+"执行统计"
	            },{
	                text:'实时报表'
	            })
	            var seriesList = chartParam.seriesList;
	            if(seriesLength < 1){
	                for(i=0;i<seriesList.length;i++){
	                    chart.addSeries(seriesList[i]);
	                    chart.allTotal = seriesList[i].allTotal;
	                }
	            }else{
	                //动态更新serier数据
	                for(i=0;i<seriesLength;i++){
	                    chart.series[i].setData(seriesList[i].data);
	                    chart.allTotal = seriesList[i].allTotal;
	                }
	            }*/
	            // 设置竖线高度
	            //setLineHeight();
	        }.bind(this)
	    });
		// 把请求方法传给需要触发的组件，处理请求的数据在这一层
		// 把接口的数据传给需要用的组件，生成dom
	},

	getHistoryReport(projectName){
		// 历史的报告链接
		$.ajax({
            type : "post",
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify({'projectName': projectName}),
            crossDomain: true,
            url : "http://localhost:8080/ws/rest/project/getReportInfo",
            success : function(data){
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                this.setState({
                    historyReport : data.data,
                    projectName : projectName,
                    solidFlag : true
                });
            }.bind(this)
		});
	},

	getLastDetail(projectId){
		//最近一次执行用例的信息
		$.ajax({
            type : "post",
            dataType : 'json',
            contentType: "application/json; charset=utf-8",
            data : JSON.stringify({'projectId': projectId}),
            crossDomain: true,
            url : "http://localhost:8080/ws/rest/result/getLastDetail",
            success : function(data){
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                this.setState({
                    lastResultDetail:data.data
                });
            }.bind(this)
		});
	},

    render(){
    	var lastResultDetail = this.state.lastResultDetail;
    	var historyReport = this.state.historyReport;
    	var projectName = this.state.projectName;
    	var chartData = this.state.chartData;
    	//console.log(historyReport.projectName);
        return(
            <div>
                <MainHeader></MainHeader>
                <ProductList getChartData={this.getChartData}
                			 getHistoryReport={this.getHistoryReport}
                			 getLastDetail={this.getLastDetail}
                			 historyReport={historyReport}>
                </ProductList>
                <div style={{borderLeft:'1px solid #000',width:'10px',height:this.state.solidFlag==true?document.body.scrollHeight:'887px',float:'left'}}></div>
                <ProjectData lastResultDetail={lastResultDetail}
                			 chartData={chartData}
                			 projectName={projectName}>
                </ProjectData>
            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));