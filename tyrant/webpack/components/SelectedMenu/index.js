/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import WriteWSTestcase from 'WriteWSTestcase';
import BorrowTender from 'BorrowTender';
import CreditorTransfer from 'CreditorTransfer';
import CreditorMatching from 'CreditorMatching';
import CreditorExit from 'CreditorExit';
import Fdd from 'Fdd';
import CompanyRegister from 'CompanyRegister';
// import './index.css';

var SelectedMenu = React.createClass({

    getInitialState(){
        return {
            // 数据源
            dbSource:[
                {
                    id:0,
                    description:"test"
                },
                {
                    id:1,
                    description:"stage"
                }
            ]
        }
    },
    changeText(data){
        // console.log(data);
        var bttButton = data.bttButton;
        if (bttButton === 0){
            bttButton = 1;
        }else if(bttButton === 1){
            bttButton = 0;
        }
        data.bttButton = bttButton;
        return data;
    },

	iFrameHeight(event){
        var iframe = event.target;
        var contentWrapper = event.target.parentNode.parentNode.parentNode;
        // var subWeb = document.frames ? document.frames["iframe"].document :
		// iframe.contentDocument;
		// console.log(subWeb);
	    if(iframe != null) {
            var height = contentWrapper.offsetHeight;
            iframe.style.height = height + "px";
            height = contentWrapper.offsetHeight;
            this.props.setMainSidebarHeight(height);
	    }
	},

    httpClient (url,postData,returnData,selectedDb) {
        var def = $.Deferred();
        //做一些异步操作
        $.ajax({
            type:"post", 
            dataType:"json",
            "processData": false,
            contentType: "application/json; charset=utf-8",
            data : postData,
            url:url, 
            success:data=>{
                console.log(data);
                // returnData.loadingIconDisplay = 0;
                returnData.selectedDb = selectedDb;
                returnData.dbName = this.state.dbSource.find(item=>item.id===returnData.selectedDb).description;
                returnData.flag = true;
                var getData = data.data;
                if (getData.length>0){
                    var arr = [];
                    for(var key in getData[0]){
                        arr.push({name:key});
                    }
                    returnData.title = arr;
                    var valueArr = [];
                    getData.forEach((item,index)=>{
                        var valueArrT = [];
                        for(var key in item){
                            valueArrT.push(item[key]);
                        }
                        valueArr.push(valueArrT);
                    })
                    returnData.data = valueArr;
                    returnData.bttButton = 0;
                }
                def.resolve(returnData);
            },
            error:function(e){
                alert(JSON.stringify(e.responseJSON,null,4));
            }.bind(this)
        });
        return def.promise();
    },

    render() {
        var props = {};
        props.dbSource = this.state.dbSource;
        props.changeText = this.changeText;
        props.httpClient = this.httpClient;
        props.setMainSidebarHeight = this.props.setMainSidebarHeight;
        // props.iFrameHeight = this.props.iFrameHeight;
    	var selectedMenu = this.props.selectedMenu;
    	// console.log(ws);
    	return <div>
	    			<section className="content-header">
				      <h1>
				        {selectedMenu.name}
				        <small>{selectedMenu.description}</small>
				      </h1>
				      <ol className="breadcrumb">
				        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
				        <li className="active">{selectedMenu.name}</li>
				      </ol>
				    </section>
                    <hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>

	   				<section className="content">
				    	{

				    		selectedMenu.id===102
				    		?
				    			<div>test</div>
				    			/*
				    			<WriteWSTestcase
				    				setSelectedMenu={this.props.setSelectedMenu}
				    				setMainSidebarHeight={this.props.setMainSidebarHeight}
				    				/>
				    				*/
	                        :

	                        	selectedMenu.id===101
	                        	?
	                        		<iframe src="http://192.168.33.47:8080/font/tyrant/dist/wsReport.html" onLoad={this.iFrameHeight} style={{width:'100%',borderWidth:'0px'}} scrolling="no"/>
	                        	:
	                        		selectedMenu.id===201
	                        		?
	                        			<CreditorTransfer {...props}/>
	                        		:
		                        		selectedMenu.id===202
		                        		?
		                        			<CreditorMatching {...props}/>
		                        		:
			                        		selectedMenu.id===203
			                        		?
			                        			<CreditorExit {...props}/>
			                        		:
					                        	selectedMenu.id===204
					                        	?
					                        		<Fdd {...props}/>
			                        			:
						                        	selectedMenu.id===205
						                        	?
						                        		<CompanyRegister {...props}/>
				                        			:
						                        		<div>
						                        			test
						                        		</div>
				    	}
		    		</section>
				</div>;
    }

});

export default SelectedMenu;