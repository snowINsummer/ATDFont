/**
 * Created by snow.zhang on 2016/6/27.
 */

import React from 'react';
import style from'./index.css';
import PassRateEchartData from 'PassRateEchartData';


var ProjectData = React.createClass({


    render(){

    	var index = 1;
    	var lastResultDetail = this.props.lastResultDetail;
    	var chartData = this.props.chartData;
    	var projectName = this.props.projectName;
    	// console.log(lastResultDetail.map(o=>o.testcaseName));
        return  <div className="container" style={{width:'70%',margin:'10px',float:'left'}}>
			        <section id="Reportsec">
			            <article>
			                <h4 style={{marginTop:'20px',fontSize:'20px'}}>项目执行情况</h4>
			                <div id="Report" style={{height:'600px',margin:'0 auto',fontSize:'18px',marginBottom:'2em'}}>
			                	<PassRateEchartData chartData={chartData} projectName={projectName}></PassRateEchartData>
			                </div>
			            </article>
			        </section>

			        <section id="detail">
			            <article>
			                <h4 style={{marginTop:'20px',fontSize:'20px'}}>执行案例列表</h4>
			                <table id="d" className='bordered' style={{fontSize:'14px',marginBottom:'2em'}}>
			                	<tbody>
			                		<tr>
			                			<th style={{width:'80px'}}>案例编号</th>
			                			<th>模块名称</th>
			                			<th>案例名称</th>
			                			<th style={{width:'200px'}}>案例描述</th>
			                			<th style={{width:'90px'}}>执行状态</th>
			                			<th style={{width:'110px'}}>执行时间</th>
			                			<th style={{width:'80px'}}>持续时间</th>
			                		</tr>
			                		{
			                			lastResultDetail.map(o=>
			                				<tr key={o.testcaseName}>
					                			<td>{index++}</td>
					                			<td>{o.moduleName}</td>
					                			<td>{o.testcaseName}</td>
					                			<td>{o.description}</td>
					                			<td>{o.status}</td>
					                			<td>{new Date(o.beginTime).Format('yyyy-MM-dd H:m:s')}</td>
					                			<td>{o.lastTime}</td>
				                			</tr>)
			                		}
			                	</tbody>
			                </table>
			            </article>
			        </section>
			    </div>;
    }

});

export default ProjectData;