/**
 * Created by snow.zhang on 2017/6/27.
 */

import React from 'react';
import Table from 'Table';
// import './index.css';

var Form = React.createClass({

    // 切换数据源
    changeValue(wsData,event){
      var value = event.target.innerText;
      this.props.changeValue(value);
    },

    queryFunc(wsData,event){
        this.props.queryFunc(wsData,event);
    },

    changeData(wsData,event){
      this.props.changeData(wsData,event);
    },
    submitForm(wsData,event){
        var form = event.target.nextSibling;
        form.click();
    },

    render() {
    	var wsData = {};
    	var data = this.props.data;
        var inputText = data.inputText;
        var buttonText = data.buttonText;
        var buttonWidth = data.buttonWidth;
        var loadingIconDisplay = data.loadingIconDisplay;
    	// console.log(data);
    	return <form className="wsform" onSubmit={this.queryFunc.bind(this,wsData)}>
                    <div className="row" style={{fontWeight:'bold',textAlign:'left',marginTop:'15px'}}>
                        {
                            inputText.map(o=>
                                <div key={o.id} className="col-lg-2" style={{width:o.width}}>
                                    <input id={o.id} type="text" className="form-control" placeholder={o.placeholder} defaultValue=""/>
                                </div>
                              )
                        }
                        <div className="col-lg-2" style={{width:buttonWidth}}>
                            <a onClick={this.submitForm.bind(this,wsData)} className="large blue button">{buttonText}</a>
                            <input type="submit" style={{display:'none'}}/>
                        </div>
                            <i className="fa fa-spinner fa-pulse fa-fw" style={{width:'74px',marginTop:'5px',fontSize:'20px',display:loadingIconDisplay===1?'inline-block':'none'}}></i>
                        <div className="col-lg-1">
                            <a onClick={this.changeData.bind(this,data)} style={{width:'100px'}} className="large orange button">{data.bttButton===0?'隐藏结果':'显示结果'}</a>
                        </div>

                    </div>
                    <Table 
                        dbName={data.dbName}
                        data={data}
                    />
                </form>;
    }

});

export default Form;