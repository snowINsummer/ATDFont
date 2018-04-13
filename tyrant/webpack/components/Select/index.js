/**
 * Created by snow.zhang on 2017/6/27.
 */

import React from 'react';
// import './index.css';

var Select = React.createClass({

    // 切换数据源
    changeValue(wsData,event){
        var value = event.target.innerText;
        this.props.changeValue(value);
    },

    render() {
    	var wsData = {};
    	var name = this.props.name;
    	var data = this.props.data;
    	var classN = this.props.classN+" dropdown-toggle";
    	// console.log(data);
    	return <div className="col-lg-2">
                        <div className="btn-group">
                          <button type="button" className={classN} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {name} <span className="caret"></span>
                          </button>
                          <ul className="dropdown-menu">
                              {
                                data.map(o=>
                                    <li key={o.id} onClick={this.changeValue.bind(this,wsData)}><a style={{fontWeight:'bold',cursor:'pointer'}}>{o.description}</a></li>
                                )
                              }
                          </ul>
                        </div>
                    </div>;
    }

});

export default Select;