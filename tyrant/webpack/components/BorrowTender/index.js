/**
 * Created by snow.zhang on 2017/6/15.
 */

import React from 'react';
import '../WSData/index.css';

var BorrowTender = React.createClass({

    checkTransfer(wsData,event){
        console.log(event);
        console.log(11);
        event.preventDefault(); // 阻止表单提交
    },

    render() {
        var wsData = {};
        return <form className="wsform" onSubmit={this.checkTransfer.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        <div className="col-lg-1">
                            <label for="name">borrowID：</label>
                        </div>
                        <div className="col-lg-2">
                            <input type="text" className="form-control" defaultValue=""/>
                        </div>
                        <div className="col-lg-2">
                            <input type="submit" id="submit" className="large blue button" value="Submit">
                            </input>
                        </div>
                    </div>
                    <hr style={{border:'1px solid #000',marginTop: '10px'}}></hr>
                </form>
                    ;
    }

});

export default BorrowTender;