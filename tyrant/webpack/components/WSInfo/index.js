/**
 * Created by snow.zhang on 2017/6/27.
 */

import React from 'react';
import SelectInputControl from 'SelectInputControl';
import ButtonControl from 'ButtonControl';
// import './index.css';

var WSInfo = React.createClass({
	getInitialState: function () {
        return {
        	inputTypeList:[
        		{
        			id:0,
        			description:"项目"
        		},
        		{
        			id:1,
        			description:"平台"
        		},
        		{
        			id:2,
        			description:"用例集"
        		}
        	],
        	inputType:{},
        	platList:[
        		{
        			id:0,
        			name:"integrationPlatform",
        			description:"进件平台"
        		},
        		{
        			id:1,
        			name:"userCenter",
        			description:"用户中心"
        		},
        		{
        			id:2,
        			name:"fileCenter",
        			description:"影像平台"
        		}
        	],
        	moduleList:[],
        	wsAllMap:{},
        	wsList:[],
        	ws:{},
        	wsData:{},
            selectedPlat: -1,
            selectedModule: -1,
            selectedWS: -1,
            swaggerData:{},
            inputDisplay:'none',
            buttonName:"新建",
            inputValue:""
        };
    },

    setInputVar(display){
    	this.setState({
    		inputDisplay:display
    	});
    },

    setButtonVar(name){
    	this.setState({
    		buttonName:name
    	});
    },

    setInputValue(inputValue){
    	this.setState({
    		inputValue:inputValue
    	});
    },
    setInputType(inputType){
    	this.setState({
    		inputType:inputType
    	});
    },
    render() {
    	// var selectedMenu = this.props.selectedMenu;
		var ws = this.state.ws;
		var buttonName = this.state.buttonName;
    	// console.log(this.state.inputTypeList[0]);
    	return <div className="row">
    					<SelectInputControl
    						optionData={this.state.platList}
    						classN="col-lg-2"
    						desN="项目"
    						inputDisplay={this.state.inputDisplay}
    						setInputValue={this.setInputValue}
    						inputType={this.state.inputTypeList[0]}
    						setInputType={this.setInputType}
    					 />
    					<ButtonControl 
    						buttonName={this.state.buttonName}
    						setInputVar={this.setInputVar}
    						setButtonVar={this.setButtonVar}
    						inputValue={this.state.inputValue}
    						inputType={this.state.inputType}
    					/>
    					<SelectInputControl
    						optionData={this.state.moduleList}
    						classN="col-lg-2"
    						desN="平台"
    					 />
						<div className="col-lg-2">
							<select className="form-control" value={this.state.selectedPlat} onChange={this.changePlat}>
							  <option style={{display:this.state.selectedPlat===-1?'block':'none'}} value="-1">--请选择项目--</option>
							  {
							  	this.state.platList.map(o=>
							  		<option key={o.id} value={o.id}>{o.description}</option>
							  	)
							  }
							</select>
							<input type="text" className="form-control" style={{position: 'absolute',left:'16electpx',top:'1px',width:'140px',height:'30px',borderBottom:'0px',borderTop:'0px',borderLeft:'0px',borderRight:'0px'}}/>
						</div>
						<div className="col-lg-2">
							<select className="form-control" placeholder="test" value={this.state.selectedModule} onChange={this.changeModule}>
							  <option style={{display:this.state.selectedModule===-1?'block':'none'}} value="-1">--请选择平台--</option>
							  {
							  	this.state.moduleList.map(o=>
							  		<option key={o.id} value={o.id}>{o.name}</option>
							  	)
							  }
							</select>
						</div>
						<div className="col-lg-2">
							<select className="form-control" value={this.state.selectedWS} onChange={this.changeWS} 
									data-toggle="tooltip" data-placement="top" data-original-title={ws.title}>
							  <option style={{display:this.state.selectedWS===-1?'block':'none'}} value="-1">--请选择用例集--</option>
							  {
							  	this.state.wsList.map(o=>
							  		<option key={o.id} value={o.id}>{o.title}</option>
							  	)
							  }
							</select>
						</div>
						<div className="col-lg-3">
							<select className="form-control" value={this.state.selectedWS} onChange={this.changeWS} 
									data-toggle="tooltip" data-placement="top" data-original-title={ws.title}>
							  <option style={{display:this.state.selectedWS===-1?'block':'none'}} value="-1">--请选择用例--</option>
							  {
							  	this.state.wsList.map(o=>
							  		<option key={o.id} value={o.id}>{o.title}</option>
							  	)
							  }
							</select>
						</div>
					</div>;
    }

});

export default WSInfo;