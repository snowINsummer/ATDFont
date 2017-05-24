/**
 * Created by snow.zhang on 2016/6/24.
 */

import $ from 'jquery';
import React from 'react';


var ProjectList = React.createClass({

    getInitialState(){
        return {projectList:[]};
    },

    componentDidMount(){
        $.ajax({
            type : "post",
            dataType : 'json',
            data : {},
            crossDomain: true,
            url : "http://localhost:8080/ws/rest/project/queryProjectList",
            success : function(data){
                this.setState({
                    projectList:data.data
                });
            }.bind(this)
        });
    },

    render(){
        var projectList = this.state.projectList;
        // console.log(projectList);
        return <div></div>;
    }

});

export default ProjectList;