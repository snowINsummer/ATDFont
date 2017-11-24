/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import Echars from '@en/echarts-react';
// import './index.css';

var SendmailPageviewsVisitorDailyRecord = React.createClass({

	getyAxisMaxValue(data){
		var yAxisMaxValue = 25;
		var max = data[0];
		for(var i=1;i<data.length;i++){ 
			if(Number(max) < Number(data[i])){
		  		max = data[i];
			}
		}
		if (max>25 && max<=50){
			yAxisMaxValue = 50;
		}else if(max>50 && max<=100){
			yAxisMaxValue = 100;
		}else if(max>100 && max<=150){
			yAxisMaxValue = 150;
		}else if(max>150 && max<=250){
			yAxisMaxValue = 250;
		// }else if(max>200 && max<=250){
		// 	yAxisMaxValue = 250;
		}else if(max>250 && max<=500){
			yAxisMaxValue = 500;
		// }else if(max>300 && max<=400){
		// 	yAxisMaxValue = 400;
		// }else if(max>400 && max<=500){
		// 	yAxisMaxValue = 400;
		}else if(max>500 && max<=1000){
			yAxisMaxValue = 1000;
		}else if(max>1000 && max<=1500){
			yAxisMaxValue = 1500;
		}else if(max>1500 && max<=2000){
			yAxisMaxValue = 2500;
		}else if(max>2000 && max<=2500){
			yAxisMaxValue = 2500;
		}else if(max>2500 && max<=3000){
			yAxisMaxValue = 3000;
		}else if(max>3000 && max<=3500){
			yAxisMaxValue = 3500;
		}else if(max>3500 && max<=4000){
			yAxisMaxValue = 4000;
		}else if(max>4000 && max<=4500){
			yAxisMaxValue = 4500;
		}else if(max>4500 && max<=5000){
			yAxisMaxValue = 5000;
		}else if(max>5000){
			yAxisMaxValue = 10000;
		}
		return yAxisMaxValue;
	},

	render(){
		var projectName = this.props.projectName;
		var chartData = this.props.chartData;
		console.log(chartData);
		var dateStr = [];
		var dailyVisitor = [];
		var dailyPageviews = [];
		var sendMail = [];
		for (var i=0;i<chartData.length;i++) {
			dateStr.push(chartData[i].dateStr);
			dailyVisitor.push(chartData[i].dailyVisitor);
			dailyPageviews.push(chartData[i].dailyPageviews);
			sendMail.push(chartData[i].sendMail);
		}
		console.log(dateStr);
		console.log(dailyVisitor);
		console.log(dailyPageviews);
		return <Echars style={{position:'relative',width:'970px',height:'400px'}} onClick={e=>e}
					option={{
						title : {
							x : 'center',
							text: projectName,
							textStyle : {
								color : '#3E576F',
								fontStyle : 'normal',
								fontSize : '16'
							},
							subtext : '流量统计',
							subtextStyle : {
								color : '#6D869F',
								fontStyle : 'italic',
								fontSize : '12'
							}
						},
					    tooltip: {
					        trigger: 'axis',
					        axisPointer: {
					            type: 'shadow',
					            crossStyle: {
					                color: '#999'
					            }
					        }
					    },
					    toolbox: {
					        feature: {
					            dataView: {show: true, readOnly: false},
					            magicType: {show: true, type: ['line', 'bar']},
					            restore: {show: true},
					            saveAsImage: {show: true}
					        }
					    },
					    calculable : true,
					    legend: {
					    	y : 'bottom',
					    	selectedMode:true,
					        data:['访客量','浏览量','发送量']
					    },
					    xAxis: [
					        {
					        	splitLine : false,
					   //      	axisTick : {
								// 	show : false
								// },
					            type: 'category',
					            data: dateStr,      // x轴数据
					            axisPointer: {
					                type: 'shadow'
					            }
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value',
					            name: '访客、浏览量',
					            min: 0,
					            max: 250,
					            interval: 50,
					            axisLabel: {
					                formatter: '{value}'
					            }
					        },
					        {
					            type: 'value',
					            name: '发送量',
					            min: 0,
					            max: 500,
					            interval: 100,
					            axisLabel: {
					                formatter: '{value}'
					            }
					        }
					    ],
					    series: [
					        {
					            name:'访客量',
					            type:'bar',
								itemStyle: {
									normal: {
										color: '#1183d4',
										barBorderColor: 'white',
										barBorderWidth: 0,
										barBorderRadius:[10, 10, 0, 0],
	                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
	                                    shadowBlur: 10,
										label : {
											show: true,
											position: 'inside',
											textStyle: {
												color: 'white',
												fontWeight : 'bold'
											}
										}
									}
								},
					            data:dailyVisitor
					        },
					        {
					            name:'浏览量',
					            type:'bar',
								itemStyle: {
									normal: {
										color: '#b6a2de',
										barBorderColor: 'white',
										barBorderWidth: 0,
										barBorderRadius:[10, 10, 0, 0],
	                                    shadowColor: 'rgba(0, 0, 0, 0.5)',
	                                    shadowBlur: 10,
										label : {
											show: true,
											position: 'inside',
											textStyle: {
												color: 'white',
												fontWeight : 'bold'
											}
										}
									}
								},
					            data:dailyPageviews
					        },
					        {
					            name:'发送量',
					            type:'line',
					            yAxisIndex: 1,
					            smooth : true,
								itemStyle: {
									normal: {
	                                    color : '#63D126',
										lineStyle : {
											color : '#63D126',
											type : 'solid'
										}
									}
								},
					            data:sendMail
					        }
					    ]
		}}>
		</Echars>

	}

});

export default SendmailPageviewsVisitorDailyRecord;