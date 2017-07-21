/**
 * Created by snow.zhang on 2017/6/20.
 */

import React from 'react';
import WSData from 'WSData';
import WSInfo from 'WSInfo';
// import './index.css';

var WriteWSTestcase = React.createClass({

	getInitialState: function () {
        return {
        	showEditFlag:false,
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
            swaggerData:{}
        };
    },

	clickMenu(menu){
		this.props.setSelectedMenu(menu);
	},

	changePlat(event){
		var platId = event.target.value;
		this.setState({
			selectedPlat:platId,
			selectedModule:-1,
			selectedWS:-1,
			ws:{}
		});
		var platList = this.state.platList;
		var plat = platList.find(item=>item['id']==platId);
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
                		var description = wsTemp.description;
                		var summary = wsTemp.summary;
                		var titleDesc = description + "，" + summary;
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
	                			map.type = keyT;
	                			map.title = keyT.toUpperCase() + " " + key + "：" + titleDesc;
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
            }.bind(this),
            error: function(e){

                console.log(e);
            }.bind(this)
        });
	},

	changeModule(event){
		var value = event.target.value;
		this.setState({
			selectedModule:value,
			selectedWS:-1,
			ws:{}
		});
		var wsAllMap = this.state.wsAllMap;
		var wsList = wsAllMap[value];
		wsList.map(function(ws,index){
			ws.id = index;
		});
		this.setState({
			wsList:wsList
		});
		// console.log(wsList);
	},

	changeWS(event){
		event.target.blur();
		var value = event.target.value;
		var wsList = this.state.wsList;
		var ws = wsList.find(o=>o.id==value);
		var swaggerData = this.state.swaggerData;
		console.log(swaggerData);
		// console.log(ws);
        var wsName = ws.name;
        var type = ws.type;
        var swaggerWSData = swaggerData.data.paths[wsName][type];
        var pathsData = {};
        var newP = [];
        if (type != 'get'){
            newP.push({name:"Content-Type",default:swaggerWSData.consumes[0],
                        in:"header",description:"Response Content Type"});
        }
        var parameters = swaggerWSData.parameters;
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
        getData.host = swaggerData.data.host;
        getData.basePath = swaggerData.data.basePath;
        getData.name = wsName;
        getData.type = type;
        getData.summary = swaggerWSData.summary;
        getData.description = swaggerWSData.description;
        getData.parameters = newP;
        // var getO = {};
        // getO[type] = getData;
        // pathsData[wsName] = getO;

        // console.log(getData);
        // console.log(pathsData);

		this.setState({
			selectedWS:value,
			ws:ws,
			wsData:getData
		});
        // this.props.setMainSidebarHeight(document.body.scrollHeight+'px');
		// console.log(document.body.scrollHeight);
	},

	setMainSidebarHeight(height){
		this.props.setMainSidebarHeight(height);
	},

    render() {

		var ws = this.state.ws;
    	return <div>
    			<form>
    				<WSInfo/>
    				{
    					this.state.showEditFlag===true
    					?
    					<div>
	    					<hr style={{border:'1px solid #000',marginTop: '20px'}}></hr>
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
								<div className="col-lg-3">
									<select className="form-control" placeholder="test" value={this.state.selectedModule} onChange={this.changeModule}>
									  <option style={{display:this.state.selectedModule===-1?'block':'none'}} value="-1">--请选择模块--</option>
									  {
									  	this.state.moduleList.map(o=>
									  		<option key={o.id} value={o.id}>{o.name}</option>
									  	)
									  }
									</select>
								</div>
								<div className="col-lg-3">
									<select className="form-control" value={this.state.selectedWS} onChange={this.changeWS} 
											data-toggle="tooltip" data-placement="top" data-original-title={ws.title}>
									  <option style={{display:this.state.selectedWS===-1?'block':'none'}} value="-1">--请选择接口--</option>
									  {
									  	this.state.wsList.map(o=>
									  		<option key={o.id} value={o.id}>{o.title}</option>
									  	)
									  }
									</select>
								</div>
							</div>
						</div>
						:
						<div/>
    				}
                    
				</form>
				{
					$.isEmptyObject(this.state.wsData)
					?
					<div/>
					:
					<WSData
						wsData={this.state.wsData}
						setMainSidebarHeight={this.props.setMainSidebarHeight}
					/>
				}
				
			</div>;
    }

});

export default WriteWSTestcase;