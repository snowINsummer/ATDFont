/**
 * Created by snow.zhang on 2017/5/22.
 */
import $ from 'jquery';
import React from 'react';
import dom from 'react-dom';
import MainHeader from 'MainHeader';
import ProductList from 'ProductList';
import FlowData from 'FlowData';
// import BorderLeftSolid from 'BorderLeftSolid';

var Content = React.createClass({

    getInitialState(){
        return {
                    pageHeight : document.documentElement.clientHeight-50+'px',
                    // 定义所有接口相关信息
                    allWSData:{
                        basePath:"/integrationPlatform",
                        host:"dev.xxd.com",
                        paths:{
                            "/bids":{
                                get:{
                                    summary:"标的列表",
                                    description:"分页查询所有记录",
                                    parameters:[
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端I D"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "0878b0790e427c8a35b05d0b5b4ff113",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "keyType",
                                            "default": 2,
                                            "in": "query",
                                            "description": "查询类型,1产品ID2申请单编号3全部"
                                        },
                                        {
                                            "name": "keyValue",
                                            "default": "LOAN_APPLY20170511152658000222",
                                            "in": "query",
                                            "description": "key值,查询类型为3时可不传"
                                        },
                                        {
                                            "name": "status",
                                            "default": "BIDDING",
                                            "in": "query",
                                            "description": "状态,不传为查所有"
                                        },
                                        {
                                            "name": "productCategory",
                                            "default": "P001",
                                            "in": "query",
                                            "description": "产品大类"
                                        },
                                        {
                                            "name": "currentPage",
                                            "default": 1,
                                            "in": "query",
                                            "description": "页码"
                                        },
                                        {
                                            "name": "pageSize",
                                            "default": 10,
                                            "in": "query",
                                            "description": "每页数据的条目"
                                        }
                                    ]
                                }
                            },
                            "/bids/{bidCode}": {
                                "get": {
                                    "summary": "标的详情",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端I D"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "0878b0790e427c8a35b05d0b5b4ff113",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "bidCode",
                                            "default": "BO20160000000006",
                                            "in": "path",
                                            "description": "标的编号"
                                        }
                                    ]
                                }
                            }

                        }
                    },
                    // allWSData:{"swagger":"2.0","info":{"description":"com.xxdai.integration","version":"1.0","title":"module_integration","termsOfService":"www.xinxindai.com","contact":{"name":"sharker","url":"integration.xinxindai.com","email":"shixiangyang@xinxindai.com"}},"host":"dev.xxd.com","basePath":"/integrationPlatform","tags":[{"name":"Receipts","description":"进件"},{"name":"Client 包的验证码 Demo","description":" 获取验证码 uri: /kaptcha.jpg"},{"name":"Credits","description":"征信记录"},{"name":"Form","description":"贷款申请单"},{"name":"User","description":"用户"},{"name":"Bids","description":"标的"},{"name":"Client 包的通用 Demo","description":"仅作示意之用"},{"name":"Files","description":"影像资料"},{"name":"Products","description":"可申请产品"}],"paths":{"/bids":{"get":{"tags":["Bids"],"summary":"标的列表","description":"分页查询所有记录","operationId":"listUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"keyType","in":"query","description":"查询类型,1产品ID2申请单编号3全部","required":false,"type":"integer","default":2,"format":"int32"},{"name":"keyValue","in":"query","description":"key值,查询类型为3时可不传","required":false,"type":"string","default":"LOAN_APPLY20170511152658000222"},{"name":"status","in":"query","description":"状态,不传为查所有","required":false,"type":"string","default":"BIDDING"},{"name":"productCategory","in":"query","description":"产品大类","required":true,"type":"string","default":"P001"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}":{"get":{"tags":["Bids"],"summary":"标的详情","description":"查询单条记录","operationId":"getByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BO20160000000006"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}/investment":{"get":{"tags":["Bids"],"summary":"标的投标记录","description":"查询单条记录","operationId":"getInvestmentByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BW201412100356"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}/repayment":{"get":{"tags":["Bids"],"summary":"标的还款记录","description":"查询单条记录","operationId":"getRepaymentByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BO20170418000111"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/bank-statement-urls/{userId}":{"get":{"tags":["Credits"],"summary":"获取银行流水采集的URL页面","description":"从神州融获取","operationId":"getBankStatementUrlUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"themeColor","in":"query","description":"页面主题颜色","required":true,"type":"string","default":"#0000"},{"name":"backUrl","in":"query","description":"跳转URL地址","required":true,"type":"string","default":"www.xinxindai.com"},{"name":"userId","in":"path","description":"用户Id","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/cities":{"get":{"tags":["Credits"],"summary":"获取公积金、社保支持区域","description":"从神州融获取","operationId":"listCitiesUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"type","in":"query","description":"征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE","required":true,"type":"string","default":"RESERVED_FUND"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/cities/{cityCode}":{"get":{"tags":["Credits"],"summary":"获取公积金、社保区域表单","description":"从神州融获取","operationId":"getCityFormUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"type","in":"query","description":"征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE","required":true,"type":"string","default":"RESERVED_FUND"},{"name":"cityCode","in":"path","description":"区域编号","required":true,"type":"string","default":"00312900"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/loginStatuses":{"post":{"tags":["Credits"],"summary":"魔蝎银行登录回调","description":"神州融调用","operationId":"loginStatusesUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"d331f1f8df6634c70d6f3d3db4db7cc5"},{"in":"body","name":"requestData","description":"{\"data\":{\"username\":\"6222001001112435988\",\"result\":\"true\",\"message\":\"登录成功\",\"token\":\"d48ac090-3bb2-11e7-b86d-00163e0cf9f8\",\"user_id\":1    }}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/results/{typeCode}":{"post":{"tags":["Credits"],"summary":"验证征信","description":"从神州融获取","operationId":"verifyCreditUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"b20b4293d35fd405a231d1afb5f9514b"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo="},{"in":"body","name":"requestData","description":"RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}","required":true,"schema":{"type":"string"}},{"name":"typeCode","in":"path","description":"征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT","required":true,"type":"string","default":"1"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/statuses":{"post":{"tags":["Credits"],"summary":"是否已验证成功过","description":"查询状态","operationId":"listStatusUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"ff29ae6913d0f00c769bb0a196bf6b70"},{"in":"body","name":"requestData","description":"{\"data\":{\"userId\":\"1\",\"type\":[\"RESERVED_FUND\",\"SOCIAL_INSURANCE\",\"CREDIT_REPORT\"]}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/common":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a common demo","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"commonDemoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"api-version","in":"header","description":"1.0","required":false,"type":"string","default":"1.0"},{"name":"jsonp","in":"query","description":"jsonp function name","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/createClientSign":{"get":{"tags":["Client 包的通用 Demo"],"summary":"createClientSign","description":"生成clientSign","operationId":"createClientSignUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"},{"name":"client_id","in":"query","description":"client_id","required":true,"type":"string"},{"name":"client_time","in":"query","description":"client_time","required":true,"type":"string"},{"name":"client_key","in":"query","description":"client_key","required":true,"type":"string"},{"name":"bodyString","in":"query","description":"bodyString","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test":{"post":{"tags":["Client 包的通用 Demo"],"summary":"test","operationId":"testUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-with-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用自定义类测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"requestData","description":"requestData","required":false,"schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-without-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用纯文本测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithoutCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"},{"in":"body","name":"requestData","description":"{\n  \"data\": {\n    \"field\": \"value\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testClientChecker":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a demo to test ClientChecher","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"testClientCheckerUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationApiUtil":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationApiUtil","description":"测试ConfigurationApiUtil工具类的方法","operationId":"testConfigurationApiUtilUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationSysconfig":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationSysconfig","description":"测试从configuration获得sysconfig","operationId":"testGetSysconfigUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testGetServerUrls":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testGetServerUrls","description":"测试从configuration获得serverUrls","operationId":"testGetServerUrlsUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testNoCheckSign":{"post":{"tags":["Client 包的通用 Demo"],"summary":"testNoCheckSign","operationId":"testNoCheckSignUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"temp","in":"query","description":"temp","required":false,"type":"string"},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"md5","required":true,"type":"string","default":"71824bd75e1b757773d738537f2c9441"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/files":{"get":{"tags":["Files"],"summary":"查看列表","description":"分页查询所有记录","operationId":"filesUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"applyCode","in":"query","description":"进件编号","required":true,"type":"string","default":"AO20170412000042"},{"name":"bidCode","in":"query","description":"标的编号","required":false,"type":"string","default":"test"},{"name":"categoryCode","in":"query","description":"分类ID","required":false,"type":"integer","default":111,"format":"int64"},{"name":"userId","in":"query","description":"用户ID","required":false,"type":"integer","default":1000,"format":"int64"},{"name":"sourceType","in":"query","description":"进件来源（FRONTEND:前台,BACKEND:后台）","required":true,"type":"string","default":"FRONTEND"},{"name":"watermarkFlag","in":"query","description":"是否需要水印","required":false,"type":"string","default":"WATERMARK_NO"},{"name":"thumbnailFlag","in":"query","description":"是否需要缩略图","required":false,"type":"string","default":"THUMBNAIL_NO"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int64"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"put":{"tags":["Files"],"summary":"上传","description":"新增或修改记录","operationId":"uploadUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"520a3efcbba3969cebeb56f9807fffd7"},{"in":"body","name":"requestData","description":"{\"data\":{\"userId\":116245,\n\"applyCode\":\"AO20170412000042\",\n\"bidCode\":\"test\",\n\"categoryCode\":\"111\",\n\"sourceType\":\"FRONTEND\",\n\"propertyCodes\":\"1\",\n\"fileId\":23,\n\"fileType\":\"TXT\",\n\"applyFileId\":111}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms":{"put":{"tags":["Form"],"summary":"生成/更新贷款申请单","description":"生成/更新","operationId":"saveApplicationFormUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"1e23c0cd354c1a79726fb8d3c1f3651c"},{"in":"body","name":"requestData","description":"{\"data\": {\"applyCode\":\"\",\n            \"productId\":\"2c9093f65bd29951015bd2a0f981000a\",\n            \"userId\":1,\n            \"mobile\":\"13122223333\",\n            \"channel\":\"mobile\",\n            \"productName\":\"审批产品一\",\n            \"productType\":\"P001\",\n            \"productSubType\":\"\",\n            \"instalmentPlanId\":\"2c9093f65bd29951015bd2a03edb0000\",\n            \"instalmentPlanName\":\"等额本息一\",\n            \"repaymentMethod\":\"001\",\n            \"loanAmount\":1000000,\n            \"period\":12,\n            \"periodUnit\":\"MONTH\",\n            \"rate\":0.12,\n            \"rateType\":\"MONTH\",\n            \"loanTitle\":\"loanTitle\",\n            \"loanDescription\":\"loanDescription\",\n            \"loanPurpose\":\"001\",\n            \"awardType\":\"NONE\",\n            \"awardValue\":0,\n            \"expiryDay\":15}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/reapplyStatuses":{"get":{"tags":["Form"],"summary":"进件检查","description":"是否允许重新进件","operationId":"selectReapplyStatusByIdNoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"idNo","in":"query","description":"身份证号","required":true,"type":"string","default":"232700198912067312"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/repayment-plan-trial":{"post":{"tags":["Form"],"summary":"还款计划试算","description":"预览","operationId":"repaymentPlanUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"requestData","description":"{\"data\":{\"applyCode\":\"AO20170412000042\",\n\"loanAmount\":2000.44,\n\"loanDate\":1459845047000,\n\"peroidValue\":12,\n\"instalmentPlanId\":\"2c9093f65bd29951015bd2a03edb0000\"}}","required":true,"schema":{"$ref":"#/definitions/BaseRequest"}},{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"dd2a2f38d14be81783f5898e41ae545d"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/statuses/{applyCode}":{"patch":{"tags":["Form"],"summary":"更改申请单状态","description":"更改状态","operationId":"updateStatusUsingPATCH","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"a00a198e46175b736a8748800f84f63b"},{"in":"body","name":"requestData","description":"{\"data\": {\"status\":\"APPLY_SUCCESS\",\n            \"notifyUser\":\"Y\"            }}","required":true,"schema":{"type":"string"}},{"name":"applyCode","in":"path","description":"申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}},"/forms/{applyCode}":{"get":{"tags":["Form"],"summary":"申请单详情","description":"查询单条记录","operationId":"findByApplyCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"applyCode","in":"path","description":"申请单号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/{userId}/{productId}":{"get":{"tags":["Form"],"summary":"未提交申请单详情","description":"查询单条记录","operationId":"unsubmittedFormUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"userId","in":"path","description":"用户id","required":true,"type":"integer","default":1,"format":"int64"},{"name":"productId","in":"path","description":"产品id","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromCache":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromCache","operationId":"getKaptchaFromCacheUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromSession":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromSession","operationId":"getKaptchaFromSessionUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products":{"get":{"tags":["Products"],"summary":"可申请产品列表","description":"分页查询所有记录","operationId":"listUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products/instalment-plans/{productId}":{"get":{"tags":["Products"],"summary":"分期计划","description":"查询单条记录","operationId":"findInstalmentPlanByIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"productId","in":"path","description":"产品ID","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products/{productId}":{"get":{"tags":["Products"],"summary":"产品详情","description":"查询单条记录","operationId":"findByIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"productId","in":"path","description":"产品ID","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts":{"get":{"tags":["Receipts"],"summary":"申请件列表","description":"根据身份证号和进件状态分页查询所有记录","operationId":"listUsingGET_2","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"},{"name":"idNo","in":"query","description":"每页数据的条目","required":true,"type":"string","default":"232700198912067312"},{"name":"applyStatus","in":"query","description":"每页数据的条目","required":false,"type":"string","default":"SUBMIT"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/contracts/{contractNo}":{"get":{"tags":["Receipts"],"summary":"合同详情","description":"查询详情","operationId":"findContractByContractNoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"contractNo","in":"path","description":"合同编号","required":true,"type":"string","default":"XXD170512000020"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/{applyCode}":{"get":{"tags":["Receipts"],"summary":"申请件详情","description":"查询详情","operationId":"findByApplyCodeUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"put":{"tags":["Receipts"],"summary":"提交进件","description":"拼接所有必需参数提交给神州融","operationId":"saveUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"2b3464ae43ba5628e3e5a79d8cd4039d"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd1wYibVnD7mD0maJvRJYRUouLs7vVPcwfD642B8uk2UeA0YHECuksbX20Y8mjDbudE7xTcd6NhNmKFXDUF5bCi8="},{"in":"body","name":"requestData","description":"{\"data\":{\"deviceType\":1,\"gpsInfo\":{\"gpsAuthorized\":\"Y\",\"gpsProvince\":\"CODE\",\"gpsCity\":\"CODE\",\n\"gpsDistrict\":\"CODE\",\"gpsPosition\":\"具体地址\",\"ipAddress\":\"127.0.0.1\"},\n\"mobileContactList\":[{\"contactName\":\"联系人姓名\",\"contactMobile\":\"手机\",\"contactBizPhone\":\"单位电话\"}],\n\"mobileAppList\":[{\"name\":\"qq\"}],\"smsList\":[],\"tdBlackBox\":\"blackBoxValue\"}}","required":true,"schema":{"type":"string"}},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/{applyCode}/contracts":{"get":{"tags":["Receipts"],"summary":"合同列表","description":"分页查询所有记录","operationId":"listContractsUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/users/{userId}":{"get":{"tags":["User"],"summary":"个人信息详情","description":"查询单条记录","operationId":"findByIdUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qdw2zj2cwldwVabyI3cbd9IFim64lbxMcrAMjimC91hCsH3/qA9+p7Kc5kFkBGMhh8uPRT0aqwfpdyGkDzXqa8HY="},{"name":"userId","in":"path","description":"用户ID","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"patch":{"tags":["User"],"summary":"修改个人信息","description":"修改","operationId":"updateUsingPATCH","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"78316f08bc8635effdce79e41edb3d8f"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qdw2zj2cwldwVabyI3cbd9IFim64lbxMcrAMjimC91hCsH3/qA9+p7Kc5kFkBGMhh8uPRT0aqwfpdyGkDzXqa8HY="},{"in":"body","name":"requestData","description":"{\"data\": \n{ \"resideType\":\"Y\", \n \"resideProvinceCode\":\"310000\", \n \"resideCityCode\":\"310000\", \n \"resideAddress\":\"更新的居住地址\", \n \"homeTel\":\"更新的家庭电话\", \n \"companyName\":\"更新的公司名称\", \n \"industry\":\"3\", \n \"postType\":\"2\", \n \"companyProvinceCode\":\"310000\", \n \"companyCityCode\":\"310000\", \n \"companyAddress\":\"更新的单位地址\", \n \"companyTel\":\"更新的单位电话\", \n \"contactInfoList\": [{ \n \"contactName\":\"更新的姓名\", \n \"contactType\":\"2\", \n \"mobile\":\"更新的手机号\", \n \"relationship\":\"7\", \n \"homePhone\":\"家庭电话\", \n \"comPhone\":\"单位电话\" \n }] \n } \n}","required":true,"schema":{"type":"string"}},{"name":"userId","in":"path","description":"用户ID","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}}},"definitions":{"BusiCodeRule":{"type":"object","properties":{"columnName":{"type":"string"},"id":{"type":"integer","format":"int64"},"padChar":{"type":"string"},"padLenth":{"type":"string"},"prefix_F":{"type":"string"},"prefix_S":{"type":"string"},"seqName":{"type":"string"},"tableName":{"type":"string"}}},"DemoDataBusiCodeRule":{"type":"object","properties":{"data":{"$ref":"#/definitions/BusiCodeRule"}}}}},
                    flowIndex:0,
                    arrflowData:[],
                    selectedFlow:[],
                    flowRelation:[],
                    replaceParameters:{},
                    // 定义左侧树的流程列表
                    projectList:[{
                        "id":1,
                        "projectId": 1,
                        "moduleName":"进件平台",
                        "flowData":[
                                    {"flowId":1,"flowName":"获取标的详情"},
                                    {"flowId":2,"flowName":"进件失败"}
                        ]
                    },
                    {
                        "id":2,
                        "projectId": 1,
                        "moduleName":"交易中心",
                        "flowData":[
                                    {"flowId":3,"flowName":"交易成功"},
                                    {"flowId":4,"flowName":"交易失败"}
                        ]
                    }],
                    // 定义接口流程顺序、关联的字段及定位路径
                    // relation[0] 代表 wsFlow[0]和wsFlow[1] 之间的关系
                    wsFlow:[{
                        "flowId":1,
                        "wsFlow":['/bids','/bids/{bidCode}'],
                        "relation":[{"bidCode":"['data']['data']['items'][0]['bidCode']"}]
                    }]
                };
    },
    componentDidMount(){
        $.ajax({
            type : "GET",
            // contentType: "application/json; charset=utf-8",
            crossDomain: true,
            // url : "http://dev.xxd.com/integrationPlatform/bids?keyType=2&keyValue=AO20170412000042&status=BIDDING&productCategory=P001&currentPage=1&pageSize=10s",
            url : "http://172.16.16.136:8080/tyrant/integrationPlatform/api-docs",
            success : function(data){
                // console.log(data);
                var wsName = '/bids/{bidCode}';
                var pathsData = {};
                var newP = [];
                var parameters = data.data.paths[wsName].get.parameters;
                parameters.map(function(o,index){
                    var mapP = {};
                    mapP.name = o.name
                    mapP.default = o.default
                    mapP.in = o.in
                    mapP.description = o.description
                    newP.push(mapP);
                });
                var getData = {};
                getData.summary = data.data.paths[wsName].get.summary;
                getData.description = data.data.paths[wsName].get.description;
                getData.parameters = newP;
                var getO = {"get":getData}
                pathsData[wsName] = getO;
                // console.log(JSON.stringify(pathsData,null,4));
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                // this.setState({
                //     allWSData:data.data
                // });
            }.bind(this)
        });
    },

	setFlow(data,index,pageHeight,flowRelation){
        this.setState({
            flowIndex:index,
            selectedFlow:data,
            pageHeight:pageHeight,
            flowRelation:flowRelation
        });
        var allWSData = this.state.allWSData;
        // console.log(allWSData);
        var paths = allWSData.paths;
        var wsName = data[index];
        var getWSData = paths[wsName];
        var type = [];
        for(var key in getWSData){
            type.push(key);
        }
        var getData = getWSData[type[0]];
        var flowData = {
            // http://dev.xxd.com/integrationPlatform/bids
            "url":"http://"+allWSData.host+allWSData.basePath+wsName,
            "index":index,
            "wsName":wsName,
            "type":type[0],
            "description":getData['summary'] + "," + getData['description'],
            "parameters":getData['parameters']
            // 增加body属性，区别POST\PUT\PATCH请求，
            // 这里做第一次遍历属性(in)值
            // 需要增加textarea，调接口时也要增加对应属性。
            // 需要更改后台数据类
        };
        var arrflowData = []
        arrflowData.push(flowData);
        this.setState({
            arrflowData:arrflowData
        });
        // console.log(this.state.allWSData);
        // console.log(flowData);

/*
// MOKE
        var flowData = {
            // http://dev.xxd.com/integrationPlatform/bids
            "url":"http://dev.xxd.com/integrationPlatform/bids",
            "index":0,
            "wsName":"/bids",
            "type":"get",
            "description":"MOKE DATA",
            "parameters":[{
                in:"header",
                name:"key1",
                default:"value1",
                description:"description1"
            },
            {
                in:"header",
                name:"key2",
                default:"value2",
                description:"description2"
            },
            {
                in:"query",
                name:"key1",
                default:"value1",
                description:"description3"
            },
            {
                in:"query",
                name:"key2",
                default:"value2",
                description:"description4"
            }]
        };
        var arrflowData = []
        arrflowData.push(flowData);
        this.setState({
            arrflowData:arrflowData
        });
*/
		// 把请求方法传给需要触发的组件，处理请求的数据在这一层
		// 把接口的数据传给需要用的组件，生成dom
	},

    setReplaceParameters(replaceParameters){
        this.setState({
            replaceParameters:replaceParameters
        });
    },

    setPageHeight(pageHeight){
        this.setState({
            pageHeight:pageHeight
        });
    },

    render(){
        return(
            <div>
                <MainHeader></MainHeader>
                <ProductList projectList={this.state.projectList}
                             wsFlow={this.state.wsFlow}
                             setFlow={this.setFlow}
                             >
                </ProductList>
                <div ref="borderLeftSolid" style={{borderLeft:'1px solid #000',width:'10px',height:this.state.pageHeight,float:'left'}}></div>
                <FlowData ref="flowDataRef" arrflowData={this.state.arrflowData}
                            prevFlow={this.prevFlow}
                            nextFlow={this.nextFlow}
                            setFlow={this.setFlow}
                            flowIndex={this.state.flowIndex}
                            selectedFlow={this.state.selectedFlow}
                            flowRelation={this.state.flowRelation}
                            setReplaceParameters={this.setReplaceParameters}
                            replaceParameters={this.state.replaceParameters}
                            setPageHeight={this.setPageHeight}
                            >
                </FlowData>

            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));