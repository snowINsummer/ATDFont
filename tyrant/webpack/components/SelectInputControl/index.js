/**
 * Created by snow.zhang on 2017/6/27.
 */

import React from 'react';
// import './index.css';

var SelectInputControl = React.createClass({
	getInitialState: function () {
	        return {
	        	selectedPlat:-1,
	        	inputWidth:"100px"
	        };
	    },

	componentDidMount(){
		var select = this.refs['selectM'];
		this.setState({
			inputWidth:select.offsetWidth-20+"px"
		});
		// console.log(select.offsetWidth);
	},

	getInputText(inputType,event){
		// console.log(inputType);
		this.props.setInputValue(event.target.value);
		this.props.setInputType(inputType);
	},

    render() {
    	var optionData = this.props.optionData;
    	var classN = this.props.classN;
    	var desN = this.props.desN;
		var des = "请填写"+desN+"名称";
		var inputDisplay = this.props.inputDisplay;
		var inputType = this.props.inputType;
    	// console.log(inputType);
    	return <div className={classN}>
					<select ref="selectM" className="form-control" value={this.state.selectedPlat} onChange={this.changePlat}>
					  <option style={{display:this.state.selectedPlat===-1?'block':'none'}} value="-1">--请选择{desN}--</option>
					  {
					  	optionData.map(o=>
					  		<option key={o.id} value={o.id}>{o.description}</option>
					  	)
					  }
					</select>
					<input type="text" className="form-control" placeholder={des} onBlur={this.getInputText.bind(this,inputType)}
						style={{display:inputDisplay,position: 'absolute',left:'16px',top:'1px',width:this.state.inputWidth,height:'32px',borderBottom:'0px',borderTop:'0px',borderLeft:'0px',borderRight:'0px'}}/>
					
				</div>;
    }

});

export default SelectInputControl;