/**
 * Created by snow.zhang on 2018/1/10.
 */

import React from 'react';
// import './index.css';

var Table = React.createClass({

    render() {
    	var dbName = this.props.dbName;
    	var data = this.props.data;
      var len = data.data.length;
      // console.log(len);
    	// var classN = this.props.classN+" dropdown-toggle";
    	console.log(JSON.stringify(data.flag,null,4));
    	return <div>
                <div className="panel panel-default" style={{display:data.flag===false?'none':data.bttButton===0?'block':'none'}}>
                      <div className="panel-heading">{dbName}.{data.tableInfo}</div>
                      <div style={{overflow:'scroll',height:len>7?'300px':''}}>
                          <table className="table" style={{backgroundColor:'#C5EEC9'}}>
                            <thead>
                              <tr>
                                {
                                    data.title.map(o=>
                                            <th key={o.name}>{o.name}</th>
                                        )
                                }
                              </tr>
                            </thead>
                            <tbody>
                                {
                                    data.data.map(o=>
                                      <tr key={o[0]}>
                                        {
                                            o.map(oo=>
                                                <td>{oo}</td>
                                            )
                                        }
                                      </tr>
                                    )
                                }
                            </tbody>
                          </table>
                      </div>
                    </div>
                    <hr style={{height:'2px',border:'none',borderTop:'2px dotted green',marginTop: '10px'}}></hr>
                  </div>;
    }

});

export default Table;