/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import Echars from '@en/echarts-react';
// import './index.css';

var LastFiveDaysResult = React.createClass({

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
			yAxisMaxValue = 2000;
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
		var chartData = this.props.chartData;
		if (Object.keys(chartData).length == 0){
			return <div></div>
		}
		var projectName = this.props.projectName;
		var categoryList = chartData.categoryList;
		var passData = chartData.series.passData;
		var failData = chartData.series.failData;
		var totalData = chartData.series.totalData;
		var passRateData = chartData.series.passRateData;
		var newPassData = [];
		var newFailData = [];
		var allData = [];
		for(var index in categoryList){
			allData.push(0);
		}
		for(var index in passData){
			var oData = passData[index];
			if (passData[index] == totalData[index] && passData[index] != 0){
				oData = {
						        value : passData[index],
						        itemStyle:{
						            normal:{
						                barBorderRadius:[10,10,0,0],
						            }
						        }
						    };
			}else if(passData[index] == 0){
				oData = {
						        value : passData[index],
						        label : {
						            normal : {
						                show : false
						            }
						        }
						    };
			}else{
				//newPassData.push(passData[index]);
			}
			newPassData.push(oData);
		}
		for(var index in failData){
			var oData = failData[index];
			if (failData[index] == 0){
				oData = {
					value : failData[index],
					label : {
						normal : {
							show : false
						}
					}
				}
			}
			newFailData.push(oData);
		}
		var yAxisMax = this.getyAxisMaxValue(totalData);
		return <Echars style={{position:'relative',width:'1000px',height:'400px'}} 
		onClick={e=>e}
					option={{
								title : {
									x : 'center',
									text: projectName+'执行统计',
									textStyle : {
										color : '#3E576F',
										fontStyle : 'normal',
										fontSize : '16'
									},
									subtext : '接口自动化测试',
									subtextStyle : {
										color : '#6D869F',
										fontStyle : 'italic',
										fontSize : '12'
									}
								},
								legend: {
									y : 'bottom',
									selectedMode:true,
									data:['Pass', 'Fail','PassRate']
								},
								tooltip : {
									trigger: 'axis',
									axisPointer : {
										type : 'shadow'
									},
									backgroundColor : 'rgba(0,0,0,0.5)',
									borderWidth : 3,
									borderRadius : [10,10,10,10],
									borderColor : '#C760D1',
									formatter: function (params){
										// console.log(JSON.stringify(params));
										// console.log(categoryList);
										return categoryList[params[0].dataIndex]+'<br/>PassRate: '+passRateData[params[0].dataIndex]+'%<br/>Total: '+totalData[params[0].dataIndex];//'2016-07-04<br/>Pass:260<br/>Total:300';
									}
								},
								toolbox: {
									show : true,
									feature : {
										mark : {show: true},
										dataView : {show: true, readOnly: false},
										magicType : {show: true, type: ['tiled']},
										restore : {show: true},
										saveAsImage : {show: true}
									}
								},
								// grid : {
								// 	borderWidth : 0
								// },
								calculable : false, //是否启用拖拽重计算特性
								xAxis : [
									{
										splitLine : false,
										axisTick : {
											show : false
										},
										type : 'category',
										data : categoryList
									}
								],
								yAxis : [
									{
										name : 'Cases',
										position : 'left',
										nameTextStyle : {
											rotate : 100
										},
										axisTick : {
											show : false
										},
										type : 'value',		
										max : yAxisMax,
										min : 0,
										splitNumber : 5,
										// boundaryGap: [0, 0.01]
									},
									{
										name : 'PassRate',
										position : 'right',
										axisTick : {
											show : false
										},
										type : 'value',
										boundaryGap: false,
										max : 100,
										min : 0,
										splitNumber : 5
										//data: [0,25,50,75,100]
									}
								],

								series : [
									{
										name:'PassRate',
										type:'line',
										yAxisIndex : 1,
										zlevel : 100,
										smooth : true,
										symbol : 'circle',
										symbolSize : 6,
										stack: 'PassRate',
										connectNulls : true,
										itemStyle: {
											normal: {
			                                    color : '#C760D1',
												lineStyle : {
													color : '#C760D1',
													type : 'solid'
												}
											}
										},
										data:passRateData
									},
									{
										name:'Pass',
										type:'bar',
										stack: 'sum',
										barCategoryGap: '50%',
										tooltip : {
											show : true,
											backgroundColor : 'rgba(0,0,0,0.5)',
											borderWidth : 3,
											borderRadius : [10,10,10,10],
											borderColor : '#63D126',
											trigger: 'item',
											formatter: function (params){
												//console.log(JSON.stringify(params));
												return categoryList[params.dataIndex]+'<br/>Pass: '+passData[params.dataIndex]+'<br/>Total: '+totalData[params.dataIndex];//'2016-07-04<br/>Pass:260<br/>Total:300';
											}
										},
										itemStyle: {
											normal: {
												color: '#B3E64C',
												barBorderColor: 'white',
												barBorderWidth: 0,
												barBorderRadius:[0,0,0,0],
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
										data : newPassData
									},
									{
										name:'Fail',
										type:'bar',
										barCategoryGap: '50%',
										stack: 'sum',
										tooltip : {
											show : true,
											backgroundColor : 'rgba(0,0,0,0.5)',
											borderWidth : 3,
											borderRadius : [10,10,10,10],
											borderColor : '#FF1B1B',
											trigger: 'item',
											formatter: function (params){
												//console.log(JSON.stringify(params));
												return categoryList[params.dataIndex]+'<br/>Fail: '+failData[params.dataIndex]+'<br/>Total: '+totalData[params.dataIndex];//'2016-07-04<br/>Fail:40<br/>Total:300';
											}
										},
										itemStyle: {
											normal: {
												color: '#FF1B1B',
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
										data : newFailData
									},
									{
										name:'All',
										type:'bar',
										stack: 'sum',
										tooltip : {
											show : false,
											trigger: 'item'
										},
										itemStyle: {
											normal: {
												color: '#fff',
												barBorderColor: 'tomato',
												barBorderWidth: 0,
												barBorderRadius:0,
												label : {
													show: true, 
													position: 'top',
													formatter: function (params) {
														return totalData[params.dataIndex];                           
													},
													textStyle: {
														color: 'black',
														fontWeight : 'bold'
													}
												}
											}
										},
										data : allData
									}
								]
		}}>
		</Echars>

	}

});

export default LastFiveDaysResult;