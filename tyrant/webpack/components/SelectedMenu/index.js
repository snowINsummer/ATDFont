/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import './index.css';

var SelectedMenu = React.createClass({
    getInitialState: function () {
        return {
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
            selectedPlat: -1,
            selectedModule: -1,
            selectedWS: -1,
            swaggerData:{}
        };
    },
	clickMenu(menu){
		this.props.setSelectedMenu(menu);
	},

	changePlat(event){
		var platId = event.target.value;
		this.setState({
			selectedPlat:platId
		});
		// console.log(platId);
		var platList = this.state.platList;
		// console.log(platList);
		// var plat = platList.find(function(item,index){
		// 	console.log(item.id===platId);
		// 	if (item.id==platId){
		// 		return item;
		// 	}
		// })
		var plat = platList.find(item=>item['id']==platId);
		// console.log(plat);
		$.ajax({
            type : "GET",
            crossDomain: true,
            url : "http://172.16.16.136:8080/tyrant/swagger/api-docs?platformName="+plat.name,
            success : function(data){
                // console.log(data);
                this.setState({
                	swaggerData:data
                }); 
                var modules = data.data.tags;
                var moduleList = [];
                modules.map(function(module,index){
                	if (module.name.indexOf("Demo") == -1){
	                	var map = {};
	                	map.id = index;
	                	map.name = module.name + "：" + module.description;
	                	moduleList.push(map);
                	}
                });
                this.setState({
                	moduleList:moduleList
                });
                // console.log(moduleList);
                var ws = data.data.paths;
                var wsMap = {};
                var indexTemp = -1;
                for(var key in ws){
                	var wsListTemp = ws[key];
                	for(var keyT in wsListTemp){
                		var wsTemp = wsListTemp[keyT];
                		// console.log(wsTemp);
                		var wsTag = wsTemp.tags[0];
		            	moduleList.map(function(module){
		            		// console.log(module);
		            		if (indexTemp == -1 || indexTemp != module.id){
		            			indexTemp = module.id;
		            			if (undefined == wsMap[indexTemp]){
		            				wsMap[indexTemp] = []; 		
		            			}
		            		}
	                		if (module.name.indexOf(wsTag) == 0){
	                			var map = {};
	                			map.name = key;
	                			map.title = keyT.toUpperCase() + " " + key;
	                			wsMap[indexTemp].push(map);
	                		}
        				});
                		// break;
                	}
                		// break;
        		}
                	// console.log(wsMap);
                this.setState({
                	wsAllMap:wsMap
                });
/*
                var arr = ['/receipts/{applyCode}','put'];
                var wsName = arr[0];
                var pathsData = {};
                var newP = [];
                if (arr[1] != 'get'){
                    newP.push({name:"Content-Type",default:data.data.paths[wsName][arr[1]].consumes[0],
                                in:"header",description:"Response Content Type"});
                }
                var parameters = data.data.paths[wsName][arr[1]].parameters;
                parameters.map(function(o,index){
                    var mapP = {};
                    var value = "";
                    var description = "";
                    if (o.in == "body"){
                        var valueT = o.description;
                        eval("value = "+valueT);
                        o.default = JSON.stringify(value);
                        o.description = "";
                    }else {
                        value = o.default;
                        description = o.description;
                    }
                    mapP.name = o.name;
                    mapP.default = value;
                    mapP.in = o.in;
                    mapP.description = o.description;
                    newP.push(mapP);
                });
                var getData = {};
                getData["basePath"] = data.data.basePath;
                getData.summary = data.data.paths[wsName][arr[1]].summary;
                getData.description = data.data.paths[wsName][arr[1]].description;
                getData.parameters = newP;
                var getO = {};
                getO[arr[1]] = getData;
                pathsData[wsName] = getO;
                console.log(pathsData);
                // console.log(JSON.stringify(pathsData,null,4));
                // 
*/
            }.bind(this),
            error: function(e){

                console.log(e);
            }.bind(this)
        });
	},

	changeModule(event){
		var value = event.target.value;
		this.setState({
			selectedModule:value
		});
		var wsAllMap = this.state.wsAllMap;
		var wsList = wsAllMap[value];
		wsList.map(function(ws,index){
			ws.id = index;
		});
		this.setState({
			wsList:wsList
		});
		console.log(wsList);
	},

	changeWS(event){
		var value = event.target.value;
		this.setState({
			selectedWS:value
		});
	},

    render() {
    	var selectedMenu = this.props.selectedMenu;
    	// console.log(selectedMenu);
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
	   					<form>
				    	{
				    		selectedMenu.id===102
				    		?
				    			<div className="row">
				    				<div className="col-lg-2">
										<select className="form-control" value={this.state.selectedPlat} onChange={this.changePlat}>
										  <option style={{display:this.state.selectedPlat===-1?'block':'none'}} value="-1">--请选择平台--</option>
										  {
										  	this.state.platList.map(o=>
										  		<option key={o.id} value={o.id}>{o.description}</option>
										  	)
										  }
										</select>
									</div>
				    				<div className="col-lg-2">
										<select className="form-control" placeholder="test" value={this.state.selectedModule} onChange={this.changeModule}>
										  <option style={{display:this.state.selectedModule===-1?'block':'none'}} value="-1">--请选择模块--</option>
										  {
										  	this.state.moduleList.map(o=>
										  		<option key={o.id} value={o.id}>{o.name}</option>
										  	)
										  }
										</select>
									</div>
				    				<div className="col-lg-2">
										<select className="form-control" value={this.state.selectedWS} onChange={this.changeWS}>
										  <option style={{display:this.state.selectedWS===-1?'block':'none'}} value="-1">--请选择接口--</option>
										  {
										  	this.state.wsList.map(o=>
										  		<option key={o.id} value={o.id}>{o.title}</option>
										  	)
										  }
										</select>
									</div>
								</div>
	                        :
	                        	<div>
	                        		test
	                        	</div>
				    	}
				    	</form>
		    		</section>
				</div>;
    }

});

export default SelectedMenu;