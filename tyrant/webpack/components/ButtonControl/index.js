/**
 * Created by snow.zhang on 2017/6/30.
 */

import React from 'react';
import server from 'server';
// import './index.css';

var ButtonControl = React.createClass({
	getInitialState: function () {
	        return {
	        	displayFlag:"block"
	        };
	    },

	componentDidMount(){
	},

	clickButton(inputName,inputType,event){
		if (event.target.innerText == '新建'){
			this.props.setInputVar("block");
			this.props.setButtonVar("确定");
		}else if(event.target.innerText == '确定'){
			if (inputName == ''){
				alert("名称不能为空！")
			}else{
				var url,data;
				if (inputType.id === 0){
					// 项目
					data = {projectName:inputName};
					url = server.tyrant + "/project/save";
				}else if(inputType.id === 1){
					// 平台

				}else if(inputType.id === 2){
					// 用例集

				}
				// console.log(inputName);
				// console.log(inputType);
				// console.log(event.target);
		        $.ajax({
		            type : "post",
		            dataType : 'json',
		            contentType: "application/json; charset=utf-8",
		            data : JSON.stringify({data:data}),
            		processData: false,
		            url : url,
		            success : function(data){
		            	if (data.code != 10000){
		            		alert(data.message);
		            	}
		            	// console.log(data);
		                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
		                // this.setState({
		                //     projectList:data.data
		                // });
		            }.bind(this)
		        });
			}

		}
	},

    render() {
    	var buttonName = this.props.buttonName;
    	var inputValue = this.props.inputValue;
    	var inputType = this.props.inputType;
    	// console.log(this.props.inputType);
    	return <div className="col-lg-1" style={{paddingLeft:'0px'}}>
                    <a onClick={this.clickButton.bind(this,inputValue,inputType)} style={{display:this.state.displayFlag}} className="large orange button">{buttonName}</a>
                </div>;
    }

});

export default ButtonControl;