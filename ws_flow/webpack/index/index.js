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
                        host:"dev.xxd.com",
                        paths:{

                            // 进件平台全流程
                            "/user/regist": {
                                "post": {
                                    "basePath": "/userCenter",
                                    "summary": "用户注册",
                                    "description": "三端用户注册",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_INTEGRATION_PLATFORM",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "de42212bdc77b66092a9211cc08b2313",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "data",
                                            "default": {
                                                "data": {
                                                    "userName": "ws_flow",
                                                    "phone": "",
                                                    "password": "123456",
                                                    "code": "mark"
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/user/login": {
                                "post": {
                                    "basePath": "/userCenter",
                                    "summary": "登录操作",
                                    "description": "用户中心统一登录接口",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_FRONT_END",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "de42212bdc77b66092a9211cc08b2313",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "data",
                                            "default": {
                                                "data": {
                                                    "userName": "",
                                                    "password": "123456"
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },

                            "/products": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "可申请产品列表",
                                    "description": "分页查询所有记录",
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
                            "/user/appro/realname": {
                                "get": {
                                    "basePath": "/userCenter",
                                    "summary": "实名认证信息",
                                    "description": "用户实名认证信息",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_INTEGRATION_PLATFORM",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "de42212bdc77b66092a9211cc08b2313",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        }
                                    ]
                                }
                            },
                            "/user/appro/autoRealname": {
                                "post": {
                                    "basePath": "/userCenter",
                                    "summary": "提交鹏元审核实名认证接口",
                                    "description": "提交到鹏元审核实名认证",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_INTEGRATION_PLATFORM",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "登录令牌"
                                        },
                                        {
                                            "name": "data",
                                            "default": {
                                                "data": {
                                                    "realName": "王刚",
                                                    "idCardNumber": "310112198703043425",
                                                    "cardType": "1"
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/forms/reapplyStatuses": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "进件检查",
                                    "description": "是否允许重新进件",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "idNo",
                                            "default": "",
                                            "in": "query",
                                            "description": "身份证号"
                                        }
                                    ]
                                }
                            },
                            "/products/{productId}": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "产品详情",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "productId",
                                            "default": "",
                                            "in": "path",
                                            "description": "产品ID"
                                        }
                                    ]
                                }
                            },
                            "/products/instalment-plans/{productId}": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "分期计划",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "productId",
                                            "default": "",
                                            "in": "path",
                                            "description": "产品ID"
                                        }
                                    ]
                                }
                            },
                            "/forms/{productId}/unsubmittedForms": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "未提交申请单详情",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "s",
                                            "default": "0878b0790e427c8a35b05d0b5b4ff113",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "productId",
                                            "default": "",
                                            "in": "path",
                                            "description": "产品id"
                                        }
                                    ]
                                }
                            },
                            "/forms/repayment-plan-trial": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "还款计划试算",
                                    "description": "预览",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {
                                                "data": {
                                                    "applyCode": "",
                                                    "loanAmount": 2000.44,
                                                    "loanDate": "2017-01-01",
                                                    "peroidValue": 12,
                                                    "instalmentPlanId": ""
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "dd2a2f38d14be81783f5898e41ae545d",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        }
                                    ]
                                }
                            },
                            "/forms": {
                                "put": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "生成/更新贷款申请单",
                                    "description": "生成/更新",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "1beca755494cb21f92521d6a6beefe30",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {
                                                "data": {
                                                    "applyCode": "",
                                                    "productId": "",
                                                    "mobile": "13122223333",
                                                    "channel": "mobile",
                                                    "productName": "审批产品一",
                                                    "productType": "P001",
                                                    "productSubType": "",
                                                    "instalmentPlanId": "",
                                                    "instalmentPlanName": "等额本息一",
                                                    "repaymentMethod": "001",
                                                    "loanAmount": 1000000,
                                                    "period": 12,
                                                    "periodUnit": "MONTH",
                                                    "rate": 0.12,
                                                    "rateType": "MONTH",
                                                    "loanTitle": "loanTitle",
                                                    "loanDescription": "loanDescription",
                                                    "loanPurpose": "001",
                                                    "awardType": "NONE",
                                                    "awardValue": 0,
                                                    "expiryDay": 15
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/users_get": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "个人信息详情",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "8a9c3d50f1a2b9426346be59b94b2e36",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        }
                                    ]
                                }
                            },
                            "/users_patch": {
                                "patch": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "修改个人信息",
                                    "description": "修改",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "78316f08bc8635effdce79e41edb3d8f",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {
                                                "data": {
                                                    "resideType": "Y",
                                                    "resideProvinceCode": "310000",
                                                    "resideCityCode": "310000",
                                                    "resideAddress": "永和路318弄",
                                                    "homeTel": "66660000",
                                                    "companyName": "xxd",
                                                    "industry": "3",
                                                    "postType": "2",
                                                    "companyProvinceCode": "310000",
                                                    "companyCityCode": "310000",
                                                    "companyAddress": "永和路318弄",
                                                    "companyTel": "66661111",
                                                    "contactInfoList": [
                                                        {
                                                            "contactName": "ft2",
                                                            "contactType": "2",
                                                            "mobile": "13012345678",
                                                            "relationship": "7",
                                                            "homePhone": "66660000",
                                                            "comPhone": "66661111"
                                                        }
                                                    ]
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/credits/statuses": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "是否已验证成功过",
                                    "description": "查询状态",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "9e35d01f94c048e60b07e68cd1d3db58",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {
                                                "data": {
                                                    "type": [
                                                        "RESERVED_FUND",
                                                        "SOCIAL_INSURANCE",
                                                        "CREDIT_REPORT",
                                                        "EB",
                                                        "OPERATOR",
                                                        "BANK_STATEMENT"
                                                    ]
                                                }
                                            },
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/credits/bank-statement-urls": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "获取银行流水采集的URL页面",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "themeColor",
                                            "default": "%230000",
                                            "in": "query",
                                            "description": "页面主题颜色"
                                        },
                                        {
                                            "name": "backUrl",
                                            "default": "www.xinxindai.com",
                                            "in": "query",
                                            "description": "跳转URL地址"
                                        }
                                    ]
                                }
                            },
                            "/credits/cities_RESERVED_FUND": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "获取公积金",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "type",
                                            "default": "RESERVED_FUND",
                                            "in": "query",
                                            "description": "征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE"
                                        }
                                    ]
                                }
                            },
                            "/credits/cities/{cityCode}_RESERVED_FUND": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "获取公积金",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "type",
                                            "default": "RESERVED_FUND",
                                            "in": "query",
                                            "description": "征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE"
                                        },
                                        {
                                            "name": "cityCode",
                                            "default": "00312900",
                                            "in": "path",
                                            "description": "区域编号"
                                        }
                                    ]
                                }
                            },
                            "/credits/results/{typeCode}_RESERVED_FUND": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "验证征信--公积金",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "b20b4293d35fd405a231d1afb5f9514b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo=",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default":  {"data":{"type":"auth_auto","sort":"002122200000-1212","website":"housingfund_dalian", "name":"张君未","id_card_num":"211422198903060925","cell_phone_num":"18500817089", "field_info":[{"field_name":"joint_card_num","field_value":"6212263400006390636"}, {"field_name":"password","field_value":"198936"}]}},
                                            "in": "body",
                                            // "description": "RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}"
                                        },
                                        {
                                            "name": "typeCode",
                                            "default": "1",
                                            "in": "path",
                                            "description": "征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT"
                                        }
                                    ]
                                }
                            },

                            "/credits/cities_SOCIAL_INSURANCE": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "社保支持区域",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "type",
                                            "default": "SOCIAL_INSURANCE",
                                            "in": "query",
                                            "description": "征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE"
                                        }
                                    ]
                                }
                            },
                            "/credits/cities/{cityCode}_SOCIAL_INSURANCE": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "社保区域表单",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "type",
                                            "default": "SOCIAL_INSURANCE",
                                            "in": "query",
                                            "description": "征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE"
                                        },
                                        {
                                            "name": "cityCode",
                                            "default": "00312900",
                                            "in": "path",
                                            "description": "区域编号"
                                        }
                                    ]
                                }
                            },
                            "/credits/results/{typeCode}_SOCIAL_INSURANCE": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "验证征信--社保",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "b20b4293d35fd405a231d1afb5f9514b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default":  {"data":{"type":"auth_auto","sort":"005151020000-1202","website":"si_sichuansheng", "name":"陈泽","id_card_num":"410426197809205515","cell_phone_num":"13908207986", "field_info":[{"field_name":"account","field_value":"010619495"}, {"field_name":"password","field_value":"13896222"}]}},
                                            "in": "body",
                                            // "description": "RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}"
                                        },
                                        {
                                            "name": "typeCode",
                                            "default": "2",
                                            "in": "path",
                                            "description": "征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT"
                                        }
                                    ]
                                }
                            },
                            "/credits/results/{typeCode}_CREDIT_REPORT": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "验证征信--个人",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "b20b4293d35fd405a231d1afb5f9514b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default":  {"data":{"apply_info":{"basic_info":{"name":"许传龙","phone":"13987106275","idNo":"532424198201060910"}}, "account":"xuchuanlong06","password":"19840720lyh","captcha":"d4prse"}},
                                            "in": "body",
                                            // "description": "RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}"
                                        },
                                        {
                                            "name": "typeCode",
                                            "default": "3",
                                            "in": "path",
                                            "description": "征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT"
                                        }
                                    ]
                                }
                            },
                            "/credits/results/{typeCode}_EB": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "验证征信--电商",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "b20b4293d35fd405a231d1afb5f9514b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default":  {"data":{"name":"姓名","phone":"手机号码","idNo":"身份证号码","account":"京东账号","password":"密码", "captcha":"","type":"","queryPwd":"","website":"","skip_mobile":"true"}},
                                            "in": "body",
                                            // "description": "RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}"
                                        },
                                        {
                                            "name": "typeCode",
                                            "default": "4",
                                            "in": "path",
                                            "description": "征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT"
                                        }
                                    ]
                                }
                            },
                            "/credits/results/{typeCode}_OPERATOR": {
                                "post": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "验证征信-运营商",
                                    "description": "从神州融获取",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "b20b4293d35fd405a231d1afb5f9514b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default":  {"data":{"name":"姓名","phone":"手机号码","idNo":"身份证号码","account":"京东账号","password":"密码", "captcha":"","type":"","queryPwd":"","website":"","skip_mobile":"true"}},
                                            "in": "body",
                                            // "description": "RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}"
                                        },
                                        {
                                            "name": "typeCode",
                                            "default": "5",
                                            "in": "path",
                                            "description": "征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT"
                                        }
                                    ]
                                }
                            },
                            "/files_get": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "查看影像列表",
                                    "description": "分页查询所有记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "applyCode",
                                            "default": "",
                                            "in": "query",
                                            "description": "进件编号"
                                        },
                                        {
                                            "name": "bidCode",
                                            "default": "",
                                            "in": "query",
                                            "description": "标的编号"
                                        },
                                        {
                                            "name": "categoryCode",
                                            "default": "RECEIPT_CONTRACT",
                                            "in": "query",
                                            "description": "分类ID"
                                        },
                                        {
                                            "name": "sourceType",
                                            "default": "FRONTEND",
                                            "in": "query",
                                            "description": "进件来源（FRONTEND:前台,BACKEND:后台）"
                                        },
                                        {
                                            "name": "watermarkFlag",
                                            "default": "WATERMARK_NO",
                                            "in": "query",
                                            "description": "是否需要水印"
                                        },
                                        {
                                            "name": "thumbnailFlag",
                                            "default": "THUMBNAIL_NO",
                                            "in": "query",
                                            "description": "是否需要缩略图"
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
                            "/files_post": {
                                "post": {
                                    "basePath": "/fileCenter",
                                    "summary": "单个文件上传",
                                    "description": "单个文件上传",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "multipart/form-data",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "bizCode",
                                            "default":"RECEIPT_APPLY_FILE",
                                            "in": "query",
                                            "description": "bizCode"
                                        },
                                        {
                                            "name": "fileDir",
                                            "in": "query",
                                            "description": "fileDir"
                                        },
                                        {
                                            "name": "file",
                                            "in": "formData",
                                            "description": "file"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "SHENZHOURONG",
                                            "in": "header",
                                            "description": "clientId"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "1459845047000"
                                        },
                                        {
                                            "name": "s",
                                            "default": "f7e69ef50cffb34c14f7dd59e1da4f89",
                                            "in": "header",
                                            "description": "clientSign"
                                        }
                                    ]
                                }
                            },
                            "/files_put": {
                                "put": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "上传",
                                    "description": "新增或修改记录",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "d8ea65d826debbcb0469b7a0201fc88c",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {"data":{"applyCode":"", "bidCode":"", "categoryCode":"RECEIPT_CONTRACT", "sourceType":"FRONTEND", "propertyCodes":"1", "fileId":23, "fileType":"TXT", "applyFileId":111}},
                                            "in": "body",
                                            "description": ""
                                        }
                                    ]
                                }
                            },
                            "/user/userInfoByToken": {
                                "get": {
                                    "basePath": "/userCenter",
                                    "summary": "获取用户信息",
                                    "description": "通过Token从用户中心获取用户信息",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_INTEGRATION_PLATFORM",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "de42212bdc77b66092a9211cc08b2313",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        }
                                    ]
                                }
                            },
                            "/user/capitalAccount/openFuiouOpenAccountPage/staticMobile": {
                                "post": {
                                    "basePath": "/userCenter",
                                    "summary": "用户调转到富友开户页面接口--供移动端使用",
                                    "description": "用户富友开户接口--供移动端使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_STATIC_MOBILE",
                                            "in": "header",
                                            "description": "分配给前端的客户端id"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "de42212bdc77b66092a9211cc08b2313",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "",
                                            "in": "header",
                                            "description": "令牌"
                                        }
                                    ]
                                }
                            },
                            "/receipts/{applyCode}": {
                                "put": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "提交进件",
                                    "description": "拼接所有必需参数提交给神州融",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "2b3464ae43ba5628e3e5a79d8cd4039d",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "token",
                                            "default": "hqB+6NnSabFXgMFRTQ2Qd1wYibVnD7mD0maJvRJYRUouLs7vVPcwfD642B8uk2UeA0YHECuksbX20Y8mjDbudE7xTcd6NhNmKFXDUF5bCi8=",
                                            "in": "header",
                                            "description": "令牌"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {"data":{"deviceType":1,"gpsInfo":{"gpsAuthorized":"Y","gpsProvince":"CODE","gpsCity":"CODE", "gpsDistrict":"CODE","gpsPosition":"具体地址","ipAddress":"127.0.0.1"}, "mobileContactList":[{"contactName":"联系人姓名","contactMobile":"手机","contactBizPhone":"单位电话"}], "mobileAppList":[{"name":"qq"}],"smsList":[],"tdBlackBox":"blackBoxValue"}},
                                            "in": "body",
                                            "description": ""
                                        },
                                        {
                                            "name": "applyCode",
                                            "default": "",
                                            "in": "path",
                                            "description": "贷款申请单编号"
                                        }
                                    ]
                                }
                            },
                            "/forms/statuses/{applyCode}": {
                                "patch": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "更改申请单状态",
                                    "description": "更改状态",
                                    "parameters": [
                                        {
                                            "name": "Content-Type",
                                            "default": "application/json",
                                            "in": "header",
                                            "description": "Response Content Type"
                                        },
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
                                        },
                                        {
                                            "name": "clientTime",
                                            "default": "1459845047000",
                                            "in": "header",
                                            "description": "客户端当前时间"
                                        },
                                        {
                                            "name": "s",
                                            "default": "a00a198e46175b736a8748800f84f63b",
                                            "in": "header",
                                            "description": "32 LENGTH CHARS"
                                        },
                                        {
                                            "name": "requestData",
                                            "default": {"data": {"status":"APPLY_SUCCESS", "notifyUser":"Y" }},
                                            "in": "body",
                                            "description": ""
                                        },
                                        {
                                            "name": "applyCode",
                                            "default": "",
                                            "in": "path",
                                            "description": "申请单编号"
                                        }
                                    ]
                                }
                            },
                            "/forms/{applyCode}": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "申请单详情",
                                    "description": "查询单条记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "applyCode",
                                            "default": "",
                                            "in": "path",
                                            "description": "申请单号"
                                        }
                                    ]
                                }
                            },
                            "/receipts": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "申请件列表",
                                    "description": "根据身份证号和进件状态分页查询所有记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                        },
                                        {
                                            "name": "idNo",
                                            "default": "232700198912067312",
                                            "in": "query",
                                            "description": "身份证号"
                                        },
                                        {
                                            "name": "applyStatus",
                                            "default": "",
                                            "in": "query",
                                            "description": "进件状态（SUBMIT-提交申请、APPROVE-审批中、 FINISHED-审批结束、SIGN_SUCCESS-签约完成、 SIGN_FAILURE-签约失败）"
                                        }
                                    ]
                                }
                            },
                            "/receipts/{applyCode}": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "申请件详情",
                                    "description": "查询详情",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "applyCode",
                                            "default": "",
                                            "in": "path",
                                            "description": "贷款申请单编号"
                                        }
                                    ]
                                }
                            },
                            "/receipts/{applyCode}/contracts": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "合同列表",
                                    "description": "分页查询所有记录",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                        },
                                        {
                                            "name": "applyCode",
                                            "default": "LOAN_APPLY20170511152658000222",
                                            "in": "path",
                                            "description": "贷款申请单编号"
                                        }
                                    ]
                                }
                            },
                            "/receipts/contracts/{contractNo}": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "合同详情",
                                    "description": "查询详情",
                                    "parameters": [
                                        {
                                            "name": "clientId",
                                            "default": "XXD_LOAN_API",
                                            "in": "header",
                                            "description": "客户端ID"
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
                                            "name": "contractNo",
                                            "default": "XXD170512000020",
                                            "in": "path",
                                            "description": "合同编号"
                                        }
                                    ]
                                }
                            },
                            "/bid/create": {
                                "post": {
                                    "basePath": "/tradeCenter",
                                    "summary": "生成标的订单",
                                    "description": "签约后自动调用，检查标的是否存在，可根据进件单号查询。神州融调用请求，生成标的订单",
                                    "parameters": [
                                    ]
                                }
                            },
                            "/bids": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "标的列表",
                                    "description": "分页查询所有记录",
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
                                            "name": "keyType",
                                            "default": 2,
                                            "in": "query",
                                            "description": "查询类型,1产品ID2申请单编号3全部"
                                        },
                                        {
                                            "name": "keyValue",
                                            "default": "",
                                            "in": "query",
                                            "description": "key值,查询类型为3时可不传"
                                        },
                                        {
                                            "name": "status",
                                            "default": "",
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
                                    "basePath": "/integrationPlatform",
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
                                            "default": "",
                                            "in": "path",
                                            "description": "标的编号"
                                        }
                                    ]
                                }
                            },
                            "XXX": {
                                "post": {
                                    "basePath": "",
                                    "summary": "债权匹配和投标",
                                    "description": "这个接口还没有做，所以只能造数据。具体和开发沟通",
                                    "parameters": [
                                    ]
                                }
                            },
                            "/bids/{bidCode}/investment": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "标的投标记录",
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
                                            "default": "",
                                            "in": "path",
                                            "description": "标的编号"
                                        }
                                    ]
                                }
                            },
                            "XXXXX": {
                                "post": {
                                    "basePath": "",
                                    "summary": "还款",
                                    "description": "满标后，进入神州融触发还款",
                                    "parameters": [
                                    ]
                                }
                            },
                            "/bids/{bidCode}/repayment": {
                                "get": {
                                    "basePath": "/integrationPlatform",
                                    "summary": "标的还款记录",
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
                                            "default": "",
                                            "in": "path",
                                            "description": "标的编号"
                                        }
                                    ]
                                }
                            }





                        }
                    },
                     // allWSData:{"swagger":"2.0","info":{"description":"com.xxdai.integration","version":"1.0","title":"module_integration","termsOfService":"www.xinxindai.com","contact":{"name":"sharker","url":"integration.xinxindai.com","email":"shixiangyang@xinxindai.com"}},"host":"dev.xxd.com","basePath":"/integrationPlatform","tags":[{"name":"Receipts","description":"进件"},{"name":"Client 包的验证码 Demo","description":" 获取验证码 uri: /kaptcha.jpg"},{"name":"Credits","description":"征信记录"},{"name":"Form","description":"贷款申请单"},{"name":"User","description":"用户"},{"name":"Bids","description":"标的"},{"name":"Client 包的通用 Demo","description":"仅作示意之用"},{"name":"Files","description":"影像资料"},{"name":"Products","description":"可申请产品"}],"paths":{"/bids":{"get":{"tags":["Bids"],"summary":"标的列表","description":"分页查询所有记录","operationId":"listUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"keyType","in":"query","description":"查询类型,1产品ID2申请单编号3全部","required":false,"type":"integer","default":2,"format":"int32"},{"name":"keyValue","in":"query","description":"key值,查询类型为3时可不传","required":false,"type":"string","default":"LOAN_APPLY20170511152658000222"},{"name":"status","in":"query","description":"状态,不传为查所有","required":false,"type":"string","default":"BIDDING"},{"name":"productCategory","in":"query","description":"产品大类","required":true,"type":"string","default":"P001"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}":{"get":{"tags":["Bids"],"summary":"标的详情","description":"查询单条记录","operationId":"getByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BO20160000000006"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}/investment":{"get":{"tags":["Bids"],"summary":"标的投标记录","description":"查询单条记录","operationId":"getInvestmentByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BW201412100356"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/bids/{bidCode}/repayment":{"get":{"tags":["Bids"],"summary":"标的还款记录","description":"查询单条记录","operationId":"getRepaymentByBidCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"bidCode","in":"path","description":"标的编号","required":true,"type":"string","default":"BO20170418000111"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/bank-statement-urls":{"get":{"tags":["Credits"],"summary":"获取银行流水采集的URL页面","description":"从神州融获取","operationId":"getBankStatementUrlUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo="},{"name":"themeColor","in":"query","description":"页面主题颜色","required":true,"type":"string","default":"#0000"},{"name":"backUrl","in":"query","description":"跳转URL地址","required":true,"type":"string","default":"www.xinxindai.com"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/cities":{"get":{"tags":["Credits"],"summary":"获取公积金、社保支持区域","description":"从神州融获取","operationId":"listCitiesUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"type","in":"query","description":"征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE","required":true,"type":"string","default":"RESERVED_FUND"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/cities/{cityCode}":{"get":{"tags":["Credits"],"summary":"获取公积金、社保区域表单","description":"从神州融获取","operationId":"getCityFormUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"type","in":"query","description":"征信类型，一律以字符串传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE","required":true,"type":"string","default":"RESERVED_FUND"},{"name":"cityCode","in":"path","description":"区域编号","required":true,"type":"string","default":"00312900"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/loginStatuses":{"post":{"tags":["Credits"],"summary":"魔蝎银行登录回调","description":"神州融调用","operationId":"loginStatusesUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"d331f1f8df6634c70d6f3d3db4db7cc5"},{"in":"body","name":"requestData","description":"{\"data\":{\"username\":\"6222001001112435988\",\"result\":\"true\",\"message\":\"登录成功\",\"token\":\"d48ac090-3bb2-11e7-b86d-00163e0cf9f8\",\"user_id\":1    }}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/results/{typeCode}":{"post":{"tags":["Credits"],"summary":"验证征信","description":"从神州融获取","operationId":"verifyCreditUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"b20b4293d35fd405a231d1afb5f9514b"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo="},{"in":"body","name":"requestData","description":"RESERVED_FUND： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"002122200000-1212\",\"website\":\"housingfund_dalian\",\n\"name\":\"张君未\",\"id_card_num\":\"211422198903060925\",\"cell_phone_num\":\"18500817089\",\n\"field_info\":[{\"field_name\":\"joint_card_num\",\"field_value\":\"6212263400006390636\"},\n{\"field_name\":\"password\",\"field_value\":\"198936\"}]}}\n\nSOCIAL_INSURANCE： {\"data\":{\"type\":\"auth_auto\",\"sort\":\"005151020000-1202\",\"website\":\"si_sichuansheng\",\n\"name\":\"陈泽\",\"id_card_num\":\"410426197809205515\",\"cell_phone_num\":\"13908207986\",\n\"field_info\":[{\"field_name\":\"account\",\"field_value\":\"010619495\"},\n{\"field_name\":\"password\",\"field_value\":\"13896222\"}]}}\n\nCREDIT_REPORT： {\"data\":{\"apply_info\":{\"basic_info\":{\"name\":\"许传龙\",\"phone\":\"13987106275\",\"idNo\":\"532424198201060910\"}},\n\"account\":\"xuchuanlong06\",\"password\":\"19840720lyh\",\"captcha\":\"d4prse\"}}\n\nEB： {\"data\":{\"name\":\"姓名\",\"phone\":\"手机号码\",\"idNo\":\"身份证号码\",\"account\":\"京东账号\",\"password\":\"密码\",\n\"captcha\":\"\",\"type\":\"\",\"queryPwd\":\"\",\"website\":\"\",\"skip_mobile\":\"true\"}}","required":true,"schema":{"type":"string"}},{"name":"typeCode","in":"path","description":"征信类型，一律以数字传值。1： RESERVED_FUND 2： SOCIAL_INSURANCE 3： CREDIT_REPORT 4：EB 5： OPERATOR 6: BANK_STATEMENT","required":true,"type":"string","default":"1"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/credits/statuses":{"post":{"tags":["Credits"],"summary":"是否已验证成功过","description":"查询状态","operationId":"listStatusUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"9e35d01f94c048e60b07e68cd1d3db58"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo="},{"in":"body","name":"requestData","description":"{\"data\":{\"type\":[\"RESERVED_FUND\",\"SOCIAL_INSURANCE\",\"CREDIT_REPORT\"\n,\"EB\",\"OPERATOR\",\"BANK_STATEMENT\"]}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/common":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a common demo","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"commonDemoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"api-version","in":"header","description":"1.0","required":false,"type":"string","default":"1.0"},{"name":"jsonp","in":"query","description":"jsonp function name","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/createClientSign":{"get":{"tags":["Client 包的通用 Demo"],"summary":"createClientSign","description":"生成clientSign","operationId":"createClientSignUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"},{"name":"client_id","in":"query","description":"client_id","required":true,"type":"string"},{"name":"client_time","in":"query","description":"client_time","required":true,"type":"string"},{"name":"client_key","in":"query","description":"client_key","required":true,"type":"string"},{"name":"bodyString","in":"query","description":"bodyString","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test":{"post":{"tags":["Client 包的通用 Demo"],"summary":"test","operationId":"testUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-with-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用自定义类测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"requestData","description":"requestData","required":false,"schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-without-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用纯文本测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithoutCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"},{"in":"body","name":"requestData","description":"{\n  \"data\": {\n    \"field\": \"value\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testClientChecker":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a demo to test ClientChecher","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"testClientCheckerUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationApiUtil":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationApiUtil","description":"测试ConfigurationApiUtil工具类的方法","operationId":"testConfigurationApiUtilUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationSysconfig":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationSysconfig","description":"测试从configuration获得sysconfig","operationId":"testGetSysconfigUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testGetServerUrls":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testGetServerUrls","description":"测试从configuration获得serverUrls","operationId":"testGetServerUrlsUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testNoCheckSign":{"post":{"tags":["Client 包的通用 Demo"],"summary":"testNoCheckSign","operationId":"testNoCheckSignUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"temp","in":"query","description":"temp","required":false,"type":"string"},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"md5","required":true,"type":"string","default":"71824bd75e1b757773d738537f2c9441"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/files":{"get":{"tags":["Files"],"summary":"查看列表","description":"分页查询所有记录","operationId":"filesUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd0r1hedvdTmBBDiY/PBJuzdB5pm3KHnlWY5QBUnojpvo7PMuMDUegpa/sGVUMF/zaaAw3tS9scaDx+sxN/ZlLXo="},{"name":"applyCode","in":"query","description":"进件编号","required":true,"type":"string","default":"AO20170412000042"},{"name":"bidCode","in":"query","description":"标的编号","required":false,"type":"string","default":"test"},{"name":"categoryCode","in":"query","description":"分类ID","required":false,"type":"integer","default":111,"format":"int64"},{"name":"sourceType","in":"query","description":"进件来源（FRONTEND:前台,BACKEND:后台）","required":true,"type":"string","default":"FRONTEND"},{"name":"watermarkFlag","in":"query","description":"是否需要水印","required":false,"type":"string","default":"WATERMARK_NO"},{"name":"thumbnailFlag","in":"query","description":"是否需要缩略图","required":false,"type":"string","default":"THUMBNAIL_NO"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int64"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"put":{"tags":["Files"],"summary":"上传","description":"新增或修改记录","operationId":"uploadUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"d8ea65d826debbcb0469b7a0201fc88c"},{"in":"body","name":"requestData","description":"{\"data\":{\"applyCode\":\"AO20170412000042\",\n\"bidCode\":\"test\",\n\"categoryCode\":\"111\",\n\"sourceType\":\"FRONTEND\",\n\"propertyCodes\":\"1\",\n\"fileId\":23,\n\"fileType\":\"TXT\",\n\"applyFileId\":111}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms":{"put":{"tags":["Form"],"summary":"生成/更新贷款申请单","description":"生成/更新","operationId":"saveApplicationFormUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"1e23c0cd354c1a79726fb8d3c1f3651c"},{"in":"body","name":"requestData","description":"{\"data\": {\"applyCode\":\"\",\n            \"productId\":\"2c9093f65bd29951015bd2a0f981000a\",\n            \"userId\":1,\n            \"mobile\":\"13122223333\",\n            \"channel\":\"mobile\",\n            \"productName\":\"审批产品一\",\n            \"productType\":\"P001\",\n            \"productSubType\":\"\",\n            \"instalmentPlanId\":\"2c9093f65bd29951015bd2a03edb0000\",\n            \"instalmentPlanName\":\"等额本息一\",\n            \"repaymentMethod\":\"001\",\n            \"loanAmount\":1000000,\n            \"period\":12,\n            \"periodUnit\":\"MONTH\",\n            \"rate\":0.12,\n            \"rateType\":\"MONTH\",\n            \"loanTitle\":\"loanTitle\",\n            \"loanDescription\":\"loanDescription\",\n            \"loanPurpose\":\"001\",\n            \"awardType\":\"NONE\",\n            \"awardValue\":0,\n            \"expiryDay\":15}}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/reapplyStatuses":{"get":{"tags":["Form"],"summary":"进件检查","description":"是否允许重新进件","operationId":"selectReapplyStatusByIdNoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"idNo","in":"query","description":"身份证号","required":true,"type":"string","default":"232700198912067312"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/repayment-plan-trial":{"post":{"tags":["Form"],"summary":"还款计划试算","description":"预览","operationId":"repaymentPlanUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"requestData","description":"{\"data\":{\"applyCode\":\"AO20170412000042\",\n\"loanAmount\":2000.44,\n\"loanDate\":1459845047000,\n\"peroidValue\":12,\n\"instalmentPlanId\":\"2c9093f65bd29951015bd2a03edb0000\"}}","required":true,"schema":{"$ref":"#/definitions/BaseRequest"}},{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"dd2a2f38d14be81783f5898e41ae545d"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/statuses/{applyCode}":{"patch":{"tags":["Form"],"summary":"更改申请单状态","description":"更改状态","operationId":"updateStatusUsingPATCH","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"a00a198e46175b736a8748800f84f63b"},{"in":"body","name":"requestData","description":"{\"data\": {\"status\":\"APPLY_SUCCESS\",\n            \"notifyUser\":\"Y\"            }}","required":true,"schema":{"type":"string"}},{"name":"applyCode","in":"path","description":"申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}},"/forms/{applyCode}":{"get":{"tags":["Form"],"summary":"申请单详情","description":"查询单条记录","operationId":"findByApplyCodeUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"applyCode","in":"path","description":"申请单号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/forms/{userId}/{productId}":{"get":{"tags":["Form"],"summary":"未提交申请单详情","description":"查询单条记录","operationId":"unsubmittedFormUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"userId","in":"path","description":"用户id","required":true,"type":"integer","default":1,"format":"int64"},{"name":"productId","in":"path","description":"产品id","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromCache":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromCache","operationId":"getKaptchaFromCacheUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromSession":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromSession","operationId":"getKaptchaFromSessionUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products":{"get":{"tags":["Products"],"summary":"可申请产品列表","description":"分页查询所有记录","operationId":"listUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端I D","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products/instalment-plans/{productId}":{"get":{"tags":["Products"],"summary":"分期计划","description":"查询单条记录","operationId":"findInstalmentPlanByIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"productId","in":"path","description":"产品ID","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/products/{productId}":{"get":{"tags":["Products"],"summary":"产品详情","description":"查询单条记录","operationId":"findByIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"productId","in":"path","description":"产品ID","required":true,"type":"string","default":"2c9093f65bd29951015bd2a0f981000a"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts":{"get":{"tags":["Receipts"],"summary":"申请件列表","description":"根据身份证号和进件状态分页查询所有记录","operationId":"listUsingGET_2","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"},{"name":"idNo","in":"query","description":"每页数据的条目","required":true,"type":"string","default":"232700198912067312"},{"name":"applyStatus","in":"query","description":"每页数据的条目","required":false,"type":"string","default":"SUBMIT"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/contracts/{contractNo}":{"get":{"tags":["Receipts"],"summary":"合同详情","description":"查询详情","operationId":"findContractByContractNoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"contractNo","in":"path","description":"合同编号","required":true,"type":"string","default":"XXD170512000020"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/{applyCode}":{"get":{"tags":["Receipts"],"summary":"申请件详情","description":"查询详情","operationId":"findByApplyCodeUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"put":{"tags":["Receipts"],"summary":"提交进件","description":"拼接所有必需参数提交给神州融","operationId":"saveUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"2b3464ae43ba5628e3e5a79d8cd4039d"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qd1wYibVnD7mD0maJvRJYRUouLs7vVPcwfD642B8uk2UeA0YHECuksbX20Y8mjDbudE7xTcd6NhNmKFXDUF5bCi8="},{"in":"body","name":"requestData","description":"{\"data\":{\"deviceType\":1,\"gpsInfo\":{\"gpsAuthorized\":\"Y\",\"gpsProvince\":\"CODE\",\"gpsCity\":\"CODE\",\n\"gpsDistrict\":\"CODE\",\"gpsPosition\":\"具体地址\",\"ipAddress\":\"127.0.0.1\"},\n\"mobileContactList\":[{\"contactName\":\"联系人姓名\",\"contactMobile\":\"手机\",\"contactBizPhone\":\"单位电话\"}],\n\"mobileAppList\":[{\"name\":\"qq\"}],\"smsList\":[],\"tdBlackBox\":\"blackBoxValue\"}}","required":true,"schema":{"type":"string"}},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipts/{applyCode}/contracts":{"get":{"tags":["Receipts"],"summary":"合同列表","description":"分页查询所有记录","operationId":"listContractsUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"currentPage","in":"query","description":"页码","required":true,"type":"integer","default":1,"format":"int32"},{"name":"pageSize","in":"query","description":"每页数据的条目","required":true,"type":"integer","default":10,"format":"int32"},{"name":"applyCode","in":"path","description":"贷款申请单编号","required":true,"type":"string","default":"LOAN_APPLY20170511152658000222"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/users/{userId}":{"get":{"tags":["User"],"summary":"个人信息详情","description":"查询单条记录","operationId":"findByIdUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"0878b0790e427c8a35b05d0b5b4ff113"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qdw2zj2cwldwVabyI3cbd9IFim64lbxMcrAMjimC91hCsH3/qA9+p7Kc5kFkBGMhh8uPRT0aqwfpdyGkDzXqa8HY="},{"name":"userId","in":"path","description":"用户ID","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"patch":{"tags":["User"],"summary":"修改个人信息","description":"修改","operationId":"updateUsingPATCH","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"客户端ID","required":true,"type":"string","default":"XXD_LOAN_API"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"78316f08bc8635effdce79e41edb3d8f"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"hqB+6NnSabFXgMFRTQ2Qdw2zj2cwldwVabyI3cbd9IFim64lbxMcrAMjimC91hCsH3/qA9+p7Kc5kFkBGMhh8uPRT0aqwfpdyGkDzXqa8HY="},{"in":"body","name":"requestData","description":"{\"data\": \n{ \"resideType\":\"Y\", \n \"resideProvinceCode\":\"310000\", \n \"resideCityCode\":\"310000\", \n \"resideAddress\":\"更新的居住地址\", \n \"homeTel\":\"更新的家庭电话\", \n \"companyName\":\"更新的公司名称\", \n \"industry\":\"3\", \n \"postType\":\"2\", \n \"companyProvinceCode\":\"310000\", \n \"companyCityCode\":\"310000\", \n \"companyAddress\":\"更新的单位地址\", \n \"companyTel\":\"更新的单位电话\", \n \"contactInfoList\": [{ \n \"contactName\":\"更新的姓名\", \n \"contactType\":\"2\", \n \"mobile\":\"更新的手机号\", \n \"relationship\":\"7\", \n \"homePhone\":\"家庭电话\", \n \"comPhone\":\"单位电话\" \n }] \n } \n}","required":true,"schema":{"type":"string"}},{"name":"userId","in":"path","description":"用户ID","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}}},"definitions":{"BusiCodeRule":{"type":"object","properties":{"columnName":{"type":"string"},"id":{"type":"integer","format":"int64"},"padChar":{"type":"string"},"padLenth":{"type":"string"},"prefix_F":{"type":"string"},"prefix_S":{"type":"string"},"seqName":{"type":"string"},"tableName":{"type":"string"}}},"DemoDataBusiCodeRule":{"type":"object","properties":{"data":{"$ref":"#/definitions/BusiCodeRule"}}}}},
                    // allWSData:{"swagger":"2.0","info":{"description":"com.xxdai.usercenter","version":"1.0","title":"module_usercenter","termsOfService":"www.xinxindai.com","contact":{"name":"aiden","url":"usercenter.xinxindai.com","email":"zhuzongwei@xinxindai.com"}},"host":"dev.xxd.com","basePath":"/userCenter","tags":[{"name":"userDetail","description":"用户详细信息"},{"name":"mobileAppro","description":"手机认证"},{"name":"sign","description":"用户签约相关接口"},{"name":"user","description":"用户信息查询相关接口"},{"name":"userBank","description":"用户银行卡信息查询相关接口"},{"name":"eload","description":"e贷通-用户信息查询相关接口"},{"name":"Client 包的验证码 Demo","description":" 获取验证码 uri: /kaptcha.jpg"},{"name":"token","description":"根据 token 获取信息"},{"name":"password","description":"用户信息查询相关接口"},{"name":"realNameAppro","description":"实名认证"},{"name":"Client 包的通用 Demo","description":"仅作示意之用"},{"name":"capitalAccount","description":"用户开通富友金账户相关接口"},{"name":"sms","description":"短信相关接口"}],"paths":{"/demo/common":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a common demo","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"commonDemoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"api-version","in":"header","description":"1.0","required":false,"type":"string","default":"1.0"},{"name":"jsonp","in":"query","description":"jsonp function name","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/createClientSign":{"get":{"tags":["Client 包的通用 Demo"],"summary":"createClientSign","description":"生成clientSign","operationId":"createClientSignUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"},{"name":"client_id","in":"query","description":"client_id","required":true,"type":"string"},{"name":"client_time","in":"query","description":"client_time","required":true,"type":"string"},{"name":"client_key","in":"query","description":"client_key","required":true,"type":"string"},{"name":"bodyString","in":"query","description":"bodyString","required":false,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test":{"post":{"tags":["Client 包的通用 Demo"],"summary":"test","operationId":"testUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-with-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用自定义类测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"requestData","description":"requestData","required":false,"schema":{"$ref":"#/definitions/DemoDataBusiCodeRule"}},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/test-request-data-without-customized-class":{"post":{"tags":["Client 包的通用 Demo"],"summary":"用纯文本测试 Request Data 是否工作正常","description":"测试","operationId":"testRequestDataWithoutCustomizedClassUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"},{"in":"body","name":"requestData","description":"{\n  \"data\": {\n    \"field\": \"value\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testClientChecker":{"get":{"tags":["Client 包的通用 Demo"],"summary":"show a demo to test ClientChecher","description":"检查 clientId, clientTime 和 s 的合法性。","operationId":"testClientCheckerUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":true,"type":"string","default":"288b37ff76355eba1a0c200c4c95e4e9"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationApiUtil":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationApiUtil","description":"测试ConfigurationApiUtil工具类的方法","operationId":"testConfigurationApiUtilUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testConfigurationSysconfig":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testConfigurationSysconfig","description":"测试从configuration获得sysconfig","operationId":"testGetSysconfigUsingGET","consumes":["application/json"],"produces":["text/plain"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testGetServerUrls":{"get":{"tags":["Client 包的通用 Demo"],"summary":"testGetServerUrls","description":"测试从configuration获得serverUrls","operationId":"testGetServerUrlsUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"xxdTest"},{"name":"clientTime","in":"header","description":"clientTime","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/demo/testNoCheckSign":{"post":{"tags":["Client 包的通用 Demo"],"summary":"testNoCheckSign","operationId":"testNoCheckSignUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"temp","in":"query","description":"temp","required":false,"type":"string"},{"name":"clientId","in":"header","description":"BOSS","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"md5","required":true,"type":"string","default":"71824bd75e1b757773d738537f2c9441"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromCache":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromCache","operationId":"getKaptchaFromCacheUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/getKaptchaFromSession":{"get":{"tags":["Client 包的验证码 Demo"],"summary":"getKaptchaFromSession","operationId":"getKaptchaFromSessionUsingGET","consumes":["application/json"],"produces":["*/*"],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/autoRealname":{"post":{"tags":["realNameAppro"],"summary":"提交鹏元审核实名认证接口","description":"提交到鹏元审核实名认证","operationId":"autoRealNameApproUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"token","in":"header","description":"登录令牌","required":true,"type":"string","default":"xxx"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"realName\": \"王刚\",\n    \"idCardNumber\": \"59466ce0191505196fd7eb6fa6590ae4\",\n    \"cardType\": \"1\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/bindMobile":{"post":{"tags":["mobileAppro"],"summary":"绑定、更新绑定手机号码","description":"绑定、更新绑定手机号码","operationId":"bindMobileUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"smsCode\": \"手机验证码\",\n    \"phone\": \"新手机号码\",\n  }\n}","required":true,"schema":{"type":"string"}},{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/checkMobileIsUnique":{"get":{"tags":["mobileAppro"],"summary":"检查手机号码是否唯一","description":"通过手机号码直接检查数据库中是否存在一样的用户名数据","operationId":"checkMobileIsUniqueUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"phone","in":"query","description":"phone","required":true,"type":"string","default":"13524690241"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/manualRealname":{"post":{"tags":["realNameAppro"],"summary":"提交人工审核实名认证接口","description":"提交到后台人工审核实名认证","operationId":"manualRealNameApproUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"token","in":"header","description":"登录令牌","required":true,"type":"string","default":"xxx"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"realName\": \"王刚\",\n    \"idCardNumber\": \"59466ce0191505196fd7eb6fa6590ae4\",\n    \"cardType\": \"1\",\n    \"positivePicID\": \"111\",\n    \"negativePicID\": \"222\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/queryMobileApproInfoByToken":{"get":{"tags":["mobileAppro"],"summary":"查询手机认证信息","description":"查询用户手机认证信息：外部使用","operationId":"queryMobileApproInfoByTokenUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/queryMobileApproInfoByUserId":{"get":{"tags":["mobileAppro"],"summary":"查询手机认证信息","description":"查询用户手机认证信息：内部使用","operationId":"queryMobileApproInfoByUserIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"114422"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/realname":{"get":{"tags":["realNameAppro"],"summary":"实名认证信息","description":"用户实名认证信息","operationId":"getRealNameApproUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"KXQOjUH9ez+NMHJGBMl11VIorUFFff6quy8M4ToecSXMHVe8y2xw6ccP7VKXR3/rNhfTJiedyRIqP7Qf3NiZP/eIcfvXlkgNJTs5Hvl/OoA="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/appro/unBindMobile":{"post":{"tags":["mobileAppro"],"summary":"解除绑定手机号码","description":"解除绑定手机号码","operationId":"unBindMobileUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/bank/userBandedBank":{"get":{"tags":["userBank"],"summary":"客户绑定银行卡信息查询操作","description":"用户绑定的银行卡信息","operationId":"getUserBandedBankCardByUserIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"115702"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/bank/userBandedBankOutSideUse":{"get":{"tags":["userBank"],"summary":"客户绑定银行卡信息查询操作 前端使用","description":"用户绑定的银行卡信息 前端使用","operationId":"getUserBandedBankCardByUserIdOutSideUseUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/bank/userCheckingBankCardInfo":{"get":{"tags":["userBank"],"summary":"查询用户正在绑定银行卡信息","description":"查询用户正在绑定银行卡信息--需要传递token，返回参数existCheckingBankCard：0--不存在正在审核的银行卡，1--存在正在审核的银行卡","operationId":"getUserCheckingBankCardInfoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/beInLogging":{"get":{"tags":["user"],"summary":"判断用户是否处于登录状态","description":"判断用户是否处于登录状态：通过token访问","operationId":"beInLoggingUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/callBack/fuiouOpenAccountPageCallback/fengRong":{"post":{"tags":["capitalAccount"],"summary":"富友开户页面回调接口--FengRong使用","description":"富友开户页面回调接口--FengRong使用","operationId":"fuiouOpenAccountPageCallback4FengRongUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":false,"type":"string","default":"操作成功"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"OPEN_ACNT20170510153330000081"},{"name":"mobile_no","in":"query","description":"mobile_no","required":true,"type":"string","default":"15122222222"},{"name":"cust_nm","in":"query","description":"cust_nm","required":true,"type":"string","default":"栾迎天"},{"name":"certif_id","in":"query","description":"certif_id","required":true,"type":"string","default":"130822198112143928"},{"name":"email","in":"query","description":"email","required":false,"type":"string"},{"name":"city_id","in":"query","description":"city_id","required":true,"type":"string","default":"2900"},{"name":"parent_bank_id","in":"query","description":"parent_bank_id","required":true,"type":"string","default":"0308"},{"name":"bank_nm","in":"query","description":"bank_nm","required":false,"type":"string","default":"23123"},{"name":"capAcntNo","in":"query","description":"capAcntNo","required":true,"type":"string","default":"6214850215176105"},{"name":"user_id_from","in":"query","description":"user_id_from","required":false,"type":"string","default":"115397"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"MMHKfmjg/tRAJ+s2lNeThDZiZpiyhDp12Am6RmTDSiC9ys6Itj+nZOqmwKpmY+5NDucdS5PucxCtlOoTCTW7a+QSh2Ip5DMCuWjUuD8rpfMg8lmdq6vmv1PURp8RrlYQgcY0f1e/WDELBSyNtOJ0IFvxxuCZa/iJB4NF2+HpZVc="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/callBack/fuiouOpenAccountPageCallback/staticMobile":{"post":{"tags":["capitalAccount"],"summary":"富友开户页面回调接口--供移动端使用","description":"富友开户页面回调接口--供移动端使用","operationId":"fuiouOpenAccountPageCallback4StaticMobileUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":false,"type":"string","default":"操作成功"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"OPEN_ACNT20170510153330000081"},{"name":"mobile_no","in":"query","description":"mobile_no","required":true,"type":"string","default":"15122222222"},{"name":"cust_nm","in":"query","description":"cust_nm","required":true,"type":"string","default":"栾迎天"},{"name":"certif_id","in":"query","description":"certif_id","required":true,"type":"string","default":"130822198112143928"},{"name":"email","in":"query","description":"email","required":false,"type":"string"},{"name":"city_id","in":"query","description":"city_id","required":true,"type":"string","default":"2900"},{"name":"parent_bank_id","in":"query","description":"parent_bank_id","required":true,"type":"string","default":"0308"},{"name":"bank_nm","in":"query","description":"bank_nm","required":false,"type":"string","default":"23123"},{"name":"capAcntNo","in":"query","description":"capAcntNo","required":true,"type":"string","default":"6214850215176105"},{"name":"user_id_from","in":"query","description":"user_id_from","required":false,"type":"string","default":"115397"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"MMHKfmjg/tRAJ+s2lNeThDZiZpiyhDp12Am6RmTDSiC9ys6Itj+nZOqmwKpmY+5NDucdS5PucxCtlOoTCTW7a+QSh2Ip5DMCuWjUuD8rpfMg8lmdq6vmv1PURp8RrlYQgcY0f1e/WDELBSyNtOJ0IFvxxuCZa/iJB4NF2+HpZVc="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/callBack/fuiouOpenAccountPageCallback/staticPc":{"post":{"tags":["capitalAccount"],"summary":"富友开户页面回调接口--StaticPc使用","description":"富友开户页面回调接口--StaticPc使用","operationId":"fuiouOpenAccountPageCallback4StaticPcUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":false,"type":"string","default":"操作成功"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"OPEN_ACNT20170510153330000081"},{"name":"mobile_no","in":"query","description":"mobile_no","required":true,"type":"string","default":"15122222222"},{"name":"cust_nm","in":"query","description":"cust_nm","required":true,"type":"string","default":"栾迎天"},{"name":"certif_id","in":"query","description":"certif_id","required":true,"type":"string","default":"130822198112143928"},{"name":"email","in":"query","description":"email","required":false,"type":"string"},{"name":"city_id","in":"query","description":"city_id","required":true,"type":"string","default":"2900"},{"name":"parent_bank_id","in":"query","description":"parent_bank_id","required":true,"type":"string","default":"0308"},{"name":"bank_nm","in":"query","description":"bank_nm","required":false,"type":"string","default":"招商银行上海分行新客站支行"},{"name":"capAcntNo","in":"query","description":"capAcntNo","required":true,"type":"string","default":"6214850215176105"},{"name":"user_id_from","in":"query","description":"user_id_from","required":false,"type":"string","default":"115397"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"gqE/GrLQrxWf3NCIPlUWcOJkuikrcelBbJqnxmPTsph/6Goa94I+PVsU3+OPXsvjfUTWdzXuNBY6Mvnqm5nvVaae/xkw57JTrZwfuABnVy5wSPZTDDURfwrZHZ1GU2vYvFHf/x9wdKNWRLpAgzI7xcAXF/khpCMQgMRL/NYSldQ="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/callBack/fuiouOpenAccountPageCallback/staticWebapp":{"post":{"tags":["capitalAccount"],"summary":"富友开户页面回调接口--供前后端分离webapp使用","description":"富友开户页面回调接口--供前后端分离webapp使用","operationId":"fuiouOpenAccountPageCallback4StaticWebappUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":false,"type":"string","default":"操作成功"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"OPEN_ACNT20170510153330000081"},{"name":"mobile_no","in":"query","description":"mobile_no","required":true,"type":"string","default":"15122222222"},{"name":"cust_nm","in":"query","description":"cust_nm","required":true,"type":"string","default":"栾迎天"},{"name":"certif_id","in":"query","description":"certif_id","required":true,"type":"string","default":"130822198112143928"},{"name":"email","in":"query","description":"email","required":false,"type":"string"},{"name":"city_id","in":"query","description":"city_id","required":true,"type":"string","default":"2900"},{"name":"parent_bank_id","in":"query","description":"parent_bank_id","required":true,"type":"string","default":"0308"},{"name":"bank_nm","in":"query","description":"bank_nm","required":false,"type":"string","default":"23123"},{"name":"capAcntNo","in":"query","description":"capAcntNo","required":true,"type":"string","default":"6214850215176105"},{"name":"user_id_from","in":"query","description":"user_id_from","required":false,"type":"string","default":"115397"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"MMHKfmjg/tRAJ+s2lNeThDZiZpiyhDp12Am6RmTDSiC9ys6Itj+nZOqmwKpmY+5NDucdS5PucxCtlOoTCTW7a+QSh2Ip5DMCuWjUuD8rpfMg8lmdq6vmv1PURp8RrlYQgcY0f1e/WDELBSyNtOJ0IFvxxuCZa/iJB4NF2+HpZVc="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/openFuiouOpenAccountPage/fengRong":{"post":{"tags":["capitalAccount"],"summary":"用户调转到富友开户页面接口--供峰融app使用","description":"用户富友开户接口--供峰融app使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息","operationId":"openFuiouOpenAccountPage4FengRongUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_STATIC_FENGRONG"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"5C4AAzdmX8USro6lpUOUB5+R67+9GbVhknHklpdW1Wicd6mZEtO50qa50arHWil86zrSkB2mmA4GQen8MozQKHtAEegTjTxuO+6LJcCUNYs=+puLmtcq0yNLu5cfY0GBJUXC0r68en+KahWXF8KuOE="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/openFuiouOpenAccountPage/staticMobile":{"post":{"tags":["capitalAccount"],"summary":"用户调转到富友开户页面接口--供移动端使用","description":"用户富友开户接口--供移动端使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息","operationId":"openFuiouOpenAccountPage4StaticMobileUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_STATIC_MOBILE"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"5C4AAzdmX8USro6lpUOUB5+R67+9GbVhknHklpdW1Wicd6mZEtO50qa50arHWil86zrSkB2mmA4GQen8MozQKHtAEegTjTxuO+6LJcCUNYs=+puLmtcq0yNLu5cfY0GBJUXC0r68en+KahWXF8KuOE="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/openFuiouOpenAccountPage/staticPc":{"post":{"tags":["capitalAccount"],"summary":"用户调转到富友开户页面接口--供前后端分离pc使用","description":"用户富友开户接口--供前后端分离pc使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息","operationId":"openFuiouOpenAccountPage4StaticPcUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_STATIC_PC"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"5C4AAzdmX8USro6lpUOUB5+R67+9GbVhknHklpdW1Wicd6mZEtO50qa50arHWil86zrSkB2mmA4GQen8MozQKHtAEegTjTxuO+6LJcCUNYs=+puLmtcq0yNLu5cfY0GBJUXC0r68en+KahWXF8KuOE="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/openFuiouOpenAccountPage/staticWebapp":{"post":{"tags":["capitalAccount"],"summary":"用户调转到富友开户页面接口--供前后端分离webapp使用","description":"用户富友开户接口--供前后端分离webapp使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息","operationId":"openFuiouOpenAccountPage4StaticWebappUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_STATIC_MOBILE"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"5C4AAzdmX8USro6lpUOUB5+R67+9GbVhknHklpdW1Wicd6mZEtO50qa50arHWil86zrSkB2mmA4GQen8MozQKHtAEegTjTxuO+6LJcCUNYs=+puLmtcq0yNLu5cfY0GBJUXC0r68en+KahWXF8KuOE="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/userAccountInfo":{"get":{"tags":["capitalAccount"],"summary":"获取用户信息","description":"通过token从用户中心获取用户信息的信息 包含银行卡信息 开户信息","operationId":"getUserAccountInfoUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"5C4AAzdmX8USro6lpUOUB5+R67+9GbVhknHklpdW1Wicd6mZEtO50qa50arHWil86zrSkB2mmA4GQen8MozQKHtAEegTjTxuO+6LJcCUNYs=+puLmtcq0yNLu5cfY0GBJUXC0r68en+KahWXF8KuOE="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/capitalAccount/userInfo4openAccount":{"get":{"tags":["capitalAccount"],"summary":"查询用户开户所需信息","description":"查询用户开户所需信息：手机信息，实名信息，银行卡信息","operationId":"queryuserInfo4openAccountUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"155"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/changeCard/callBack/fuiouChangeCardCheckPassCallback":{"post":{"tags":["userBank"],"summary":"富友换绑银行卡审核通过回调接口","description":"富友换绑银行卡审核通过回调接口","operationId":"fuiouChangeCardCheckPassCallbackUsingPOST","consumes":["application/json"],"produces":["application/xml"],"parameters":[{"name":"mchnt_cd","in":"query","description":"商户代码","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"流水号","required":true,"type":"string","default":"CHG_BNKCRD20170511172702000025"},{"name":"user_id_from","in":"query","description":"userId","required":true,"type":"string","default":"115397"},{"name":"mobile_no","in":"query","description":"手机号码","required":true,"type":"string","default":"15122222222"},{"name":"cust_nm","in":"query","description":"客户姓名","required":true,"type":"string","default":"吕子健"},{"name":"certif_id","in":"query","description":"身份证号码","required":true,"type":"string","default":"35092319840410793X"},{"name":"email","in":"query","description":"邮箱地址","required":true,"type":"string","default":"9405646856168@qq.com"},{"name":"city_id","in":"query","description":"开户行地区代码","required":true,"type":"string","default":"1000"},{"name":"parent_bank_id","in":"query","description":"开户行行别","required":true,"type":"string","default":"0308"},{"name":"bank_nm","in":"query","description":"开户行支行名","required":true,"type":"string","default":"招商银行上海分行新客站支行"},{"name":"capAcntNo","in":"query","description":"账号","required":true,"type":"string","default":"6214850212331638"},{"name":"resp_code","in":"query","description":"返回码","required":true,"type":"string","default":"0000"},{"name":"signature","in":"query","description":"签名数据","required":true,"type":"string","default":"6D71FuXye1/suU73mUvk+LoBbGnxx+u6AmDfOqFmDCzy8G/Sl0UosTkGWbuT7OWgWf9NHaniZJ4Ctcm51jGwqR78f6LogL8fPLvJ0hz/veIMxHz7GDch8dYgK9Aid+btbIfC9mEOYorZlLwuLmO7p9iJtPf/jueuRwGOOZ1NklQ="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/changeCard/callBack/fuiouChangeCardPageCallback/staticPc":{"post":{"tags":["userBank"],"summary":"富友换绑银行卡页面回调接口--StaticPc使用","description":"富友换绑银行卡页面回调接口--StaticPc使用","operationId":"fuiouChangeCardPageCallback4StaticPcUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":true,"type":"string","default":"操作成功"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"CHG_BNKCRD20170511172702000025"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"bnby4IYoxhGAGvjifXGOjL/4bwPhhCVHMroCx2moyeqpltD2MsNQ6MWkrdgEXYOyk5fJFWt9X+cI9DZ/4UZPwYW6aRCmMV8qzfwqd4V5NKILHztEURQw4iw7sbuzRtzWjB+80vEO7jcBEiTWIS7zFRbjpYHatnIEbcyTy+79K28="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/changeCard/openFuiouChangeCardPage/staticPc":{"post":{"tags":["userBank"],"summary":"用户调转到富友换绑银行卡页面接口--供前后端分离pc使用","description":"用户调转到富友换绑银行卡页面接口--供前后端分离pc使用：获取富友开户页面的url & 需要的流水号回调地址签名等信息","operationId":"openFuiouChangeCardPage4StaticPcUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_STATIC_PC"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"Ejan28l0LFTRR8O6JBhFra7TuPVb50TAvEzwEkfyfBaP+XUfXQtmq1BV2klE1XLrlfz5UsSkJfipm/S0nHK8B6JG8K2uEMzj5JG0ixOe0TQ="}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/checkSMS":{"post":{"tags":["sms"],"summary":"预检查短信验证码","description":"只做检查短信验证码，不会删除redis中保存的值","operationId":"checkSMSUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"smsCode\": \"手机验证码\",\n    \"phone\": \"手机号码\",\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/checkUsernameIsUnique":{"get":{"tags":["user"],"summary":"检查用户名是否唯一","description":"通过username直接检查数据库中是否存在一样的用户名数据","operationId":"checkUsernameIsUniqueUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"username","in":"query","description":"username","required":true,"type":"string","default":"xuguohua"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/clearUserForbidPayStatus":{"post":{"tags":["password"],"summary":"清除用户禁止支付状态","description":"清除用户禁止支付状态","operationId":"clearUserForbidPayStatusUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"userId\": \"115397\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/confirmInitRemindByUserId":{"post":{"tags":["user"],"summary":"用户确认系统自动开户初始化提醒窗口","description":"用户确认系统自动开户初始化提醒窗口：系统自动开户的提示窗口只会提示一次，一旦用户确认，不再提醒。","operationId":"confirmInitRemindByUserIdUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"userId\": \"115397\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/getUsersByStatus":{"get":{"tags":["user"],"summary":"分页查询指定状态的用户","description":"分页查询指定状态的用户，status：1.正常 2.禁止登陆 3.禁止提现，pageIndex：第几页，从1开始，pageSize：每页大小。","operationId":"getUsersByStatusUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"status","in":"query","description":"status","required":true,"type":"string","default":"1"},{"name":"pageIndex","in":"query","description":"pageIndex","required":true,"type":"string","default":"1"},{"name":"pageSize","in":"query","description":"pageSize","required":true,"type":"string","default":"10"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/login":{"post":{"tags":["user"],"summary":"登录操作","description":"用户中心统一登录接口","operationId":"loginUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"userName\": \"18755605072\",\n    \"password\": \"59466ce0191505196fd7eb6fa6590ae4\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/logout":{"post":{"tags":["user"],"summary":"用户登出","description":"用户登出：通过token访问","operationId":"logoutUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/queryPayLockedUsers":{"get":{"tags":["password"],"summary":"根据userName/mobile/email分页查询禁止支付的用户","description":"根据userName/mobile/email分页查询禁止支付的用户，userName/mobile/email支持模糊查询，pageIndex：第几页，从1开始，pageSize：每页大小。","operationId":"queryPayLockedUsersUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"userName","in":"query","description":"userName","required":false,"type":"string","default":"aiden"},{"name":"mobile","in":"query","description":"mobile","required":false,"type":"string","default":"18651"},{"name":"email","in":"query","description":"email","required":false,"type":"string","default":"845@qq.com"},{"name":"pageIndex","in":"query","description":"pageIndex","required":true,"type":"string","default":"1"},{"name":"pageSize","in":"query","description":"pageSize","required":true,"type":"string","default":"10"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/regist":{"post":{"tags":["user"],"summary":"用户注册","description":"三端用户注册","operationId":"registUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"userName\": \"xuguohua\",\n    \"phone\": \"13524690241\",\n    \"password\": \"1\",\n    \"code\": \"短信验证码\",\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/resetPassword":{"post":{"tags":["password"],"summary":"重置用户的登录、支付密码","description":"重置的登录、支付密码","operationId":"resetPasswordUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"phone\": \"13524690241\",\n    \"password\": \"新密码\",\n    \"pswType\": \"2or4（2=登录密码，4=支付密码）\",\n    \"smsCode\": \"短信验证码\",\n  }\n}","required":true,"schema":{"type":"string"}},{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sendSMS":{"post":{"tags":["sms"],"summary":"短信验证码发送","description":"发送短信验证码","operationId":"sendSMSUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"phone\": \"13524690241\",\n    \"kaptcha\": \"图片验证码，调用http://localhost:8081/kaptcha.jpg 接口获取图片验证码\",\n    \"type\": \"1\",\n    \"scene\": \"1\",\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/setPayPassword":{"post":{"tags":["password"],"summary":"首次设置用户的支付密码","description":"设置支付密码，不验证旧密码","operationId":"setPayPasswordUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"password\": \"密码\",\n  }\n}","required":true,"schema":{"type":"string"}},{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sign/callBack/appSignCardCallBack":{"post":{"tags":["sign"],"summary":"APP 免登签约回调接口","description":"用户中心的签约状态回调接口","operationId":"appSignCardCallBackUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"resp_code","in":"query","description":"resp_code","required":true,"type":"string","default":"0000"},{"name":"resp_desc","in":"query","description":"resp_desc","required":false,"type":"string","default":"成功！"},{"name":"mchnt_cd","in":"query","description":"mchnt_cd","required":true,"type":"string","default":"0002900F0352818"},{"name":"mchnt_txn_ssn","in":"query","description":"mchnt_txn_ssn","required":true,"type":"string","default":"SIGN_CON20170525000017"},{"name":"login_id","in":"query","description":"login_id","required":true,"type":"string","default":"18755605074"},{"name":"signature","in":"query","description":"signature","required":true,"type":"string","default":"WzhItiBPkWrHQxHeAvUmvb3v8xTSOnoXwoDWxuEx+VVWQ9WBRICegMpb4CIVtAbVGPUyzQpx32aHSJw9IIRYo0p0ZOmPjdS8k+s8mOBDWpUMjEPbyK/zZQw8m0kuJVFsBa1BmY6/W6WEY5c2UB/BqpWTH7I246MY0DwuOChe2K4="}],"responses":{"200":{"description":"OK"},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sign/getFuiouAppSignCardUrl":{"get":{"tags":["sign"],"summary":"获得App免登签约的签约地址和参数","description":"提供给移动端使用的获得App免得签约地址和参数列表","operationId":"getFuiouAppSignCardUrlUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"},{"name":"mobile","in":"query","description":"mobile","required":true,"type":"string","default":"18852981776"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sign/getSignedInfo":{"get":{"tags":["sign"],"summary":"签约状态查询操作","description":"用户中心的签约状态查询接口","operationId":"getSignedInfoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sign/getSignedInfoInSideUse":{"get":{"tags":["sign"],"summary":"签约状态查询 内部系统相互调用的","description":"用户中心的签约状态查询接口","operationId":"getSignedInfoInSideUseUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"114422"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/sign/updateSignedInfo":{"put":{"tags":["sign"],"summary":"签约状态更新操作","description":"用户中心的签约状态更新接口","operationId":"updateSignedInfoUsingPUT","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"signed\": \"1\",\n    \"userId\": 114422,\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/token/createToken":{"get":{"tags":["token"],"summary":"create a token demo","description":"用假用户 ID 创建一个 token","operationId":"createTokenDemoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"服务端分发给客户端的 ID","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"f1fd61c58ad2e29dc072403144bbe78c"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"115397"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/token/getUserInfoByToken":{"get":{"tags":["token"],"summary":"获取用户信息","description":"将 token 解密后从缓存中取出用户信息","operationId":"getUserUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"服务端分发给客户端的 ID","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"invoke createToken first"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/token/testKaptcha":{"get":{"tags":["token"],"summary":"testKaptcha","operationId":"testKaptchaUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"服务端分发给客户端的 ID","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"}],"responses":{"200":{"description":"OK"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/updatePassword":{"post":{"tags":["password"],"summary":"更新用户的登录、支付密码","description":"更新用户的登录、支付密码","operationId":"updatePasswordUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"oldPassword\": \"旧密码\",\n    \"password\": \"新密码\",\n    \"pswType\": \"2or4（2=登录密码，4=支付密码）\",\n  }\n}","required":true,"schema":{"type":"string"}},{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userDetailInfo":{"get":{"tags":["user"],"summary":"提现前","description":"查询用户基本信息，实名认证信息，手机认证信息，白名单信息，银行卡信息","operationId":"queryUserForWithdrawUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"userId","in":"query","description":"用户Id","required":true,"type":"string","default":"114422"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userEntrustWithdraw":{"get":{"tags":["user"],"summary":"获取用户信息","description":"通过loginId从用户中心获取用户信息","operationId":"getUserInfoEntrustWithdrawUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"loginId","in":"query","description":"loginId","required":true,"type":"string","default":"18852981776"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userInfo":{"get":{"tags":["user"],"summary":"获取用户信息","description":"通过userId从用户中心获取用户信息","operationId":"getUserInfoUsingGET_1","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"userId","in":"query","description":"userId","required":true,"type":"string","default":"115397"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userInfoByLoginId":{"get":{"tags":["user"],"summary":"获取用户信息","description":"通过userId从用户中心获取用户信息","operationId":"getUserInfoByLoginIdUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"loginId","in":"query","description":"loginId","required":true,"type":"string","default":"18852981776"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userInfoByToken":{"get":{"tags":["user"],"summary":"获取用户信息","description":"通过Token从用户中心获取用户信息","operationId":"getUserInfoByTokenUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/userInfoNotOpAcnt4eLoad":{"get":{"tags":["eload"],"summary":"e-贷通：查询该信贷员名下未开户的用户","description":"e-贷通：查询该信贷员名下已注册，已实名认证，未开户的用户","operationId":"queryUserInfoOfEmployeeId4eLoadUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"name":"employeeId","in":"query","description":"employeeId","required":true,"type":"string","default":"370"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/validatePayPwdByToken":{"post":{"tags":["password"],"summary":"验证支付密码","description":"验证支付密码","operationId":"validatePayPwdByTokenUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"payPassword\": \"c2e0aa597b95f84180bf3989db89fc65\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/validatePayPwdByTokenWithValidate":{"post":{"tags":["password"],"summary":"验证支付密码","description":"验证支付密码：需要验证图片验证码","operationId":"validatePayPwdByTokenWithValidateUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":true,"type":"string","default":"xxx"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"picCode\": \"3e5d\",\n    \"payPassword\": \"c2e0aa597b95f84180bf3989db89fc65\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/user/validatePayPwdByUserId":{"post":{"tags":["password"],"summary":"登录操作","description":"用户中心统一登录接口","operationId":"validatePayPwdByUserIdUsingPOST","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_FRONT_END"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"in":"body","name":"data","description":"{\n  \"data\": {\n    \"userId\": \"115397\",\n    \"payPassword\": \"c2e0aa597b95f84180bf3989db89fc65\"\n  }\n}","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/userDetail/{userId}":{"get":{"tags":["userDetail"],"summary":"进件平台获取用户信息","description":"通过userId从用户中心获取用户信息","operationId":"getUserInfoUsingGET","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"userId","in":"path","description":"userId","required":true,"type":"string","default":"1"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"patch":{"tags":["userDetail"],"summary":"更新用户信息","description":"通过userId更新用户信息","operationId":"updateUserInfoUsingPATCH","consumes":["application/json"],"produces":["application/json;charset=UTF-8"],"parameters":[{"name":"clientId","in":"header","description":"分配给前端的客户端id","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"客户端当前时间","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"32 LENGTH CHARS","required":false,"type":"string","default":"de42212bdc77b66092a9211cc08b2313"},{"name":"token","in":"header","description":"令牌","required":false,"type":"string","default":"xxx"},{"in":"body","name":"requestData","description":"{\"data\": \n{ \"resideType\":\"Y\", \n \"resideProvinceCode\":\"310000\", \n \"resideCityCode\":\"310000\", \n \"resideAddress\":\"更新的居住地址\", \n \"homeTel\":\"更新的家庭电话\", \n \"companyName\":\"更新的公司名称\", \n \"industry\":\"3\", \n \"postType\":\"2\", \n \"companyProvinceCode\":\"310000\", \n \"companyCityCode\":\"310000\", \n \"companyAddress\":\"更新的单位地址\", \n \"companyTel\":\"更新的单位电话\", \n \"employmentType\":\"03\", \n \"contactInfoList\": [{ \n \"contactName\":\"更新的姓名\", \n \"contactType\":\"2\", \n \"mobile\":\"更新的手机号\", \n \"relationship\":\"7\", \n \"homePhone\":\"家庭电话\", \n \"comPhone\":\"单位电话\" \n }] \n } \n}","required":true,"schema":{"type":"string"}},{"name":"userId","in":"path","description":"userId","required":true,"type":"string","default":"1"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}}},"definitions":{"BusiCodeRule":{"type":"object","properties":{"columnName":{"type":"string"},"id":{"type":"integer","format":"int64"},"padChar":{"type":"string"},"padLenth":{"type":"string"},"prefix_F":{"type":"string"},"prefix_S":{"type":"string"},"seqName":{"type":"string"},"tableName":{"type":"string"}}},"DemoDataBusiCodeRule":{"type":"object","properties":{"data":{"$ref":"#/definitions/BusiCodeRule"}}}}},
                    // allWSData:{"swagger":"2.0","info":{"description":"com.xxdai.filecenter","version":"1.0","title":"module_filecenter","termsOfService":"www.xixnindai.com","contact":{"name":"ian","url":"filecenter.xinxindai.com","email":"gaojiahao@xinxindai.com"}},"host":"dev.xxd.com","basePath":"/fileCenter","tags":[{"name":"seven-bulls-controller","description":"Seven Bulls Controller"},{"name":"receipt-file-package-controller","description":"Receipt File Package Controller"},{"name":"file-controller","description":"File Controller"},{"name":"receipt-file-controller","description":"Receipt File Controller"}],"paths":{"/files":{"get":{"tags":["file-controller"],"summary":"查询文件列表","description":"查询文件列表","operationId":"getFileListUsingGET","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"f1fd61c58ad2e29dc072403144bbe78c"},{"name":"fileIds","in":"query","description":"文件IDs","required":true,"type":"string","default":"[1,2,3,4]"},{"name":"bizCode","in":"query","description":"业务存储配置表编号(LOAN_RISK/...)","required":true,"type":"string","default":"RECEIPT_APPLY_FILE"},{"name":"watermarkFlag","in":"query","description":"是否需要水印(WATERMARK_YES:需要,WATERMARK_NO:不需要)","required":false,"type":"string","default":"WATERMARK_NO"},{"name":"thumbnailFlag","in":"query","description":"是否需要缩略图(THUMBNAIL_YES:需要,THUMBNAIL_NO:不需要)","required":false,"type":"string","default":"THUMBNAIL_NO"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"post":{"tags":["file-controller"],"summary":"单个文件上传","description":"单个文件上传","operationId":"uploadFileUsingPOST","consumes":["multipart/form-data"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"bizCode","in":"query","description":"bizCode","required":true,"type":"string"},{"name":"fileDir","in":"query","description":"fileDir","required":false,"type":"string"},{"name":"file","in":"formData","description":"file","required":true,"type":"file"},{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"SHENZHOURONG"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"f7e69ef50cffb34c14f7dd59e1da4f89"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/files/packageCallback":{"post":{"tags":["seven-bulls-controller"],"summary":"打包回调","description":"打包回调","operationId":"packageCallbackUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"in":"body","name":"body","description":"body","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/files/videoCallback":{"post":{"tags":["seven-bulls-controller"],"summary":"音视频切片回调","description":"音视频切片回调","operationId":"videoCallbackUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"in":"body","name":"body","description":"body","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipt/categories":{"get":{"tags":["receipt-file-controller"],"summary":"查询影像资料分类","description":"根据code查询影像资料分类","operationId":"getCategoryListUsingGET","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"f1fd61c58ad2e29dc072403144bbe78c"},{"name":"code","in":"query","description":"分类的code","required":true,"type":"string","default":"RECEIPT_FILE"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipt/files":{"get":{"tags":["receipt-file-controller"],"summary":"查询影像文件列表","description":"查询影像文件列表","operationId":"getReceiptFileListUsingGET","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"f1fd61c58ad2e29dc072403144bbe78c"},{"name":"applyCode","in":"query","description":"进件编号","required":true,"type":"string","default":"APPLYCODE"},{"name":"bidCode","in":"query","description":"标的编号","required":false,"type":"string","default":"test"},{"name":"categoryCode","in":"query","description":"分类Code","required":false,"type":"string","default":"RECEIPT_CONTRACT"},{"name":"userId","in":"query","description":"用户ID","required":false,"type":"integer","default":1,"format":"int64"},{"name":"sourceType","in":"query","description":"进件来源(FRONTEND:前台,BACKEND:后台)","required":true,"type":"string","default":"BACKEND"},{"name":"watermarkFlag","in":"query","description":"是否需要水印(WATERMARK_YES:需要,WATERMARK_NO:不需要)","required":false,"type":"string","default":"WATERMARK_NO"},{"name":"thumbnailFlag","in":"query","description":"是否需要缩略图(THUMBNAIL_YES:需要,THUMBNAIL_NO:不需要)","required":false,"type":"string","default":"THUMBNAIL_NO"},{"name":"currentPage","in":"query","description":"页码(默认值1)","required":false,"type":"integer","default":1,"format":"int64"},{"name":"pageSize","in":"query","description":"每页记录数(默认值10)","required":false,"type":"integer","default":10,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"post":{"tags":["receipt-file-controller"],"summary":"上传/修改影像资料文件","description":"上传/修改影像资料文件","operationId":"uploadReceiptFileUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"XXD_INTEGRATION_PLATFORM"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"8fa1fbbfc335e3b86ace21a6069902a2"},{"in":"body","name":"body","description":"body","required":true,"schema":{"type":"string"}}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}}},"/receipt/packages":{"get":{"tags":["receipt-file-package-controller"],"summary":"查询影像资料打包列表","description":"根据进件编号查询影像资料打包列表","operationId":"getReceiptPackagesListUsingGET","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"SHENZHOURONG_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"47826dd9114cd4da8f87a57a1d2feddd"},{"name":"applyCode","in":"query","description":"进件编号","required":true,"type":"string","default":"applyCode"},{"name":"currentPage","in":"query","description":"页码(默认值1)","required":false,"type":"integer","default":1,"format":"int64"},{"name":"pageSize","in":"query","description":"每页记录数(默认值10)","required":false,"type":"integer","default":10,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"post":{"tags":["receipt-file-package-controller"],"summary":"打包影像资料","description":"根据进件编号打包影像资料","operationId":"packagesUsingPOST","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"SHENZHOURONG_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"47826dd9114cd4da8f87a57a1d2feddd"},{"name":"applyCode","in":"query","description":"进件编号","required":true,"type":"string","default":"applyCode"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}}},"delete":{"tags":["receipt-file-package-controller"],"summary":"删除打包影像资料","description":"根据packageId打包影像资料","operationId":"deletePackageUsingDELETE","consumes":["application/json"],"produces":["application/json;charset=utf-8"],"parameters":[{"name":"clientId","in":"header","description":"clientId","required":true,"type":"string","default":"SHENZHOURONG_FRONT_END"},{"name":"clientTime","in":"header","description":"1459845047000","required":true,"type":"string","default":"1459845047000"},{"name":"s","in":"header","description":"clientSign","required":false,"type":"string","default":"47826dd9114cd4da8f87a57a1d2feddd"},{"name":"packageId","in":"query","description":"打包ID","required":true,"type":"integer","default":1,"format":"int64"}],"responses":{"200":{"description":"OK","schema":{"type":"string"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}}}}}},
                    flowIndex:0,
                    arrflowData:[],
                    selectedFlow:[],
                    flowRelation:[],
                    // 定义左侧树的流程列表
                    projectList:[
                    {
                        "id":1,
                        "projectId": 1,
                        "moduleName":"进件平台",
                        "flowData":[
                                    {"flowId":1,"flowName":"全流程"},
                                    // {"flowId":2,"flowName":"获取标的详情"},
                                    // {"flowId":3,"flowName":"生成贷款申请单及查看"}
                        ]
                    },
/*
                    {
                        "id":2,
                        "projectId": 1,
                        "moduleName":"交易中心",
                        "flowData":[
                                    {"flowId":4,"flowName":"交易成功"}
                        ]
                    }
*/
                    ],
                    // 定义接口流程顺序、关联的字段及定位路径
                    // relation[0] 代表 wsFlow[0]和wsFlow[1] 之间的关系
                    wsFlow:[
                        {
                            "flowId":1,
                            "wsFlow":[
                                        {
                                            // 用户注册
                                            name:'/user/regist', 
                                            saveParameters:{
                                                                request:{
                                                                            phone:"['data']['phone']",
                                                                            password:"['data']['password']"
                                                                        },
                                                                response:{}
                                                            }

                                        },
                                        {
                                            // 登录操作
                                            name:'/user/login',
                                            saveParameters:{
                                                                request:{
                                                                            phone:"['data']['userName']"
                                                                        },
                                                                response:{
                                                                            token:"['data']['data']['data']"
                                                                }
                                                            },
                                            relation:{
                                                        // "['data']['userName']":"phone",
                                                        // "['data']['password']":"password"
                                                    }
                                        },
                                        {
                                            // 可申请产品列表
                                            name:'/products',
                                            saveParameters:{    
                                                                response:{
                                                                    productId:"['data']['data']['items'][1]['productId']",
                                                                    productName:"['data']['data']['items'][1]['productName']"
                                                                }
                                                            },
                                            relation:{
                                            }
                                        },
                                        {
                                            // 检查是否实名（获取实名信息）
                                            name:'/user/appro/realname',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 实名认证
                                            name:'/user/appro/autoRealname',
                                            saveParameters:{
                                                                request:{
                                                                            idCardNumber:"['data']['idCardNumber']",
                                                                            realName:"['data']['realName']"
                                                                        },
                                                                response:{}
                                            },
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 进件检查
                                            name:'/forms/reapplyStatuses',
                                            saveParameters:{},
                                            relation:{
                                                idNo:"idCardNumber"
                                            }
                                        },
                                        {
                                            // 产品详情
                                            name:'/products/{productId}',
                                            saveParameters:{},
                                            relation:{
                                                productId:"productId"
                                            }
                                        },
                                        {
                                            // 分期计划
                                            name:'/products/instalment-plans/{productId}',
                                            saveParameters:{
                                                response:{
                                                    instalmentPlanId:"['data']['data']['items'][0]['instalmentPlanId']",
                                                    instalmentPlanName:"['data']['data']['items'][0]['instalmentPlanName']",
                                                    repayType:"['data']['data']['items'][0]['repayType']"
                                                }
                                            },
                                            relation:{
                                                productId:"productId"
                                            }
                                        },
                                        {
                                            // 未提交申请单详情
                                            name:'/forms/{productId}/unsubmittedForms',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                productId:"productId"
                                            }
                                        },
                                        {
                                            // 还款计划试算
                                            name:'/forms/repayment-plan-trial',
                                            saveParameters:{},
                                            relation:{
                                                // token:"token",
                                                "['data']['instalmentPlanId']":"instalmentPlanId"
                                            }
                                        },
                                        {
                                            // 生成/更新贷款申请单
                                            name:'/forms',
                                            saveParameters:{
                                                response:{
                                                    applyCode:"['data']['data']['applyCode']"
                                                }
                                            },
                                            relation:{
                                                token:"token",
                                                "['data']['mobile']":"phone",
                                                "['data']['productId']":"productId",
                                                "['data']['productName']":"productName",
                                                "['data']['instalmentPlanId']":"instalmentPlanId",
                                                "['data']['instalmentPlanName']":"instalmentPlanName",
                                            }
                                        },
                                        {
                                            // 查询个人信息
                                            name:'/users_get',
                                            tName:'/users',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 修改个人信息
                                            name:'/users_patch',
                                            tName:'/users',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 是否已验证过征信
                                            name:'/credits/statuses',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 获取银行流水采集的URL页面
                                            name:'/credits/bank-statement-urls',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 获取公积金支持区域
                                            name:'/credits/cities_RESERVED_FUND',
                                            tName:'/credits/cities',
                                            saveParameters:{},
                                            relation:{
                                                // token:"token"
                                            }
                                        },
                                        {
                                            // 获取公积金区域表单
                                            name:'/credits/cities/{cityCode}_RESERVED_FUND',
                                            tName:'/credits/cities/{cityCode}',
                                            saveParameters:{},
                                            relation:{
                                                // token:"token"
                                            }
                                        },
                                        {
                                            // 验证公积金征信
                                            name:'/credits/results/{typeCode}_RESERVED_FUND',
                                            tName:'/credits/results/{typeCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },

                                        {
                                            // 获取社保支持区域
                                            name:'/credits/cities_SOCIAL_INSURANCE',
                                            tName:'/credits/cities',
                                            saveParameters:{},
                                            relation:{
                                                // token:"token"
                                            }
                                        },
                                        {
                                            // 获取社保区域表单
                                            name:'/credits/cities/{cityCode}_SOCIAL_INSURANCE',
                                            tName:'/credits/cities/{cityCode}',
                                            saveParameters:{},
                                            relation:{
                                                // token:"token"
                                            }
                                        },
                                        {
                                            // 验证社保征信
                                            name:'/credits/results/{typeCode}_SOCIAL_INSURANCE',
                                            tName:'/credits/results/{typeCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 验证个人征信
                                            name:'/credits/results/{typeCode}_CREDIT_REPORT',
                                            tName:'/credits/results/{typeCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 验证电商征信
                                            name:'/credits/results/{typeCode}_EB',
                                            tName:'/credits/results/{typeCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 验证运营商征信
                                            name:'/credits/results/{typeCode}_OPERATOR',
                                            tName:'/credits/results/{typeCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 查看影像资料列表
                                            name:'/files_get',
                                            tName:'/files',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 单个文件上传
                                            name:'/files_post',
                                            tName:'/files',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 上传影像资料
                                            name:'/files_put',
                                            tName:'/files',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                "['data']['applyCode']":"applyCode"
                                            }
                                        },
                                        {
                                            // 获取用户信息（检查是否开户）
                                            name:'/user/userInfoByToken',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 获取开户URL
                                            name:'/user/capitalAccount/openFuiouOpenAccountPage/staticMobile',
                                            saveParameters:{},
                                            relation:{
                                                token:"token"
                                            }
                                        },
                                        {
                                            // 提交进件
                                            name:'/receipts/{applyCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 修改申请单状态
                                            name:'/forms/statuses/{applyCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 查询贷款申请单
                                            name:'/forms/{applyCode}',
                                            saveParameters:{},
                                            relation:{
                                                token:"token",
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 查看申请件列表
                                            name:'/receipts',
                                            saveParameters:{},
                                            relation:{
                                                idNo:"idCardNumber"
                                            }
                                        },
                                        {
                                            // 查看申请件详情
                                            name:'/receipts/{applyCode}',
                                            saveParameters:{},
                                            relation:{
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 查看合同列表
                                            name:'/receipts/{applyCode}/contracts',
                                            saveParameters:{
                                                response:{
                                                    contractNo:"['data']['data']['items'][0]['contractNo']"
                                                }
                                            },
                                            relation:{
                                                applyCode:"applyCode"
                                            }
                                        },
                                        {
                                            // 查看合同详情
                                            name:'/receipts/contracts/{contractNo}',
                                            saveParameters:{},
                                            relation:{
                                                contractNo:"contractNo"
                                            }
                                        },
                                        {
                                            // TODO 发标
                                            name:'/bid/create',
                                            saveParameters:{},
                                            relation:{
                                            }
                                        },
                                        {
                                            // 根据申请件单号查看标的列表
                                            name:'/bids',
                                            saveParameters:{
                                                response:{
                                                    bidCode:"['data']['data']['items'][0]['bidCode']"
                                                }
                                            },
                                            relation:{
                                                keyValue:"applyCode"
                                            }
                                        },
                                        {
                                            // 查看标的详情
                                            name:'/bids/{bidCode}',
                                            saveParameters:{},
                                            relation:{
                                                bidCode:"bidCode"
                                            }
                                        },
                                        {
                                            // 债权匹配和投标
                                            name:'XXX',
                                            saveParameters:{},
                                            relation:{
                                            }
                                        },
                                        {
                                            // 查看标的投标记录
                                            name:'/bids/{bidCode}/investment',
                                            saveParameters:{},
                                            relation:{
                                                bidCode:"bidCode"
                                            }
                                        },

                                        {
                                            // 还款
                                            name:'XXXXX',
                                            saveParameters:{},
                                            relation:{
                                            }
                                        },
                                        {
                                            // 查看标的投标记录
                                            name:'/bids/{bidCode}/repayment',
                                            saveParameters:{},
                                            relation:{
                                                bidCode:"bidCode"
                                            }
                                        },


                                    ]
                            
                        },
                        {
                            "flowId":2,
                            "wsFlow":['/bids','/bids/{bidCode}'],
                            "relation":[{"bidCode":"['data']['data']['items'][0]['bidCode']"}]
                        },
                        {
                            "flowId":3,
                            "wsFlow":['/forms','/forms/{applyCode}'],
                            // "relation":[{"['data']['applyCode']":"['data']['data']['items'][0]['bidCode']"}]
                            "relation":[{"applyCode":"['data']['data']['items'][0]['bidCode']"}]
                        }
                    ]
                };
    },
    
    componentDidMount(){
        $.ajax({
            type : "GET",
            // contentType: "application/json; charset=utf-8",
            crossDomain: true,
            // url : "http://dev.xxd.com/integrationPlatform/bids?keyType=2&keyValue=AO20170412000042&status=BIDDING&productCategory=P001&currentPage=1&pageSize=10s",
            // url : "http://172.16.16.136:8080/tyrant/swagger/api-docs?platformName=userCenter",
            // url : "http://localhost:8080/swagger/api-docs?platformName=userCenter",
            // 
            // url : "http://172.16.16.136:8080/tyrant/swagger/api-docs?platformName=userCenter",
            url : "http://172.16.16.136:8080/tyrant/swagger/api-docs?platformName=integrationPlatform",
            // url : "http://172.16.16.136:8080/tyrant/swagger/api-docs?platformName=tradeCenter",
            // url : "http://localhost:8080/swagger/api-docs?platformName=integrationPlatform",
            // url : "http://localhost:8080/swagger/api-docs?platformName=fileCenter",
            success : function(data){
                var arr = ['/bids/{bidCode}/repayment','get'];
                console.log(data);
                // console.log(data.data.paths);
                // console.log(JSON.stringify(data.data));
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
                // console.log(pathsData);
                // console.log(JSON.stringify(pathsData,null,4));
                // data.data.list.map(o=>Object.assign(o,{expanded:false}))
                // this.setState({
                //     allWSData:data.data
                // });
            }.bind(this),
            error: function(e){
                var data = {data:this.state.allWSData};
                console.log(data);
                var arr = ['/user/login','post'];
                var wsName = arr[0];
                var pathsData = {};
                var newP = [];
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
                getData.summary = data.data.paths[wsName][arr[1]].summary;
                getData.description = data.data.paths[wsName][arr[1]].description;
                getData.parameters = newP;
                var getO = {};
                getO[arr[1]] = getData;
                pathsData[wsName] = getO;
                console.log(pathsData);
                console.log(JSON.stringify(pathsData,null,4));
            }.bind(this)
        });
    },


/**
 * [setFlow description]
 * @param {[type]} selectedFlow [description]
 * @param {[type]} index        [description]
 * @param {[type]} pageHeight   [description]
 * @param {[type]} flowRelation [description]
 */
	setFlow(selectedFlow,index,pageHeight,flowRelation){
        /*
        // put成功后，需要调用查询接口，
        // 此时需要根据put接口的入参（多个）作为查询条件
        // 通过get接口查询到数据后再往后关联
        */
        // 新增、数据后会返回该条数据所有字段信息，不需要做上面的功能
        // 1、之后的接口可能是post put patch，需要解析替换对应的字段
        //      做全局的变量池，定义返回中需要存的变量
        // 2、实时获取sign、token的值，调开发接口
        // 3、流程有更改
        // 4、实时替换下一个接口的参数
        // 5、查看所有变量功能
        // TODO
        // 6、增加手动维护的全局变量
        // 7、增加判断，接口请求成功后才存储变量
        // 8、增加请求时加载效果
        
        this.setState({
            flowIndex:index,
            selectedFlow:selectedFlow,
            pageHeight:pageHeight,
            flowRelation:flowRelation
        });
        var allWSData = this.state.allWSData;
        var paths = allWSData.paths;
        var flow = selectedFlow[index];
        var wsName = flow.name;
        var tName = flow.tName;
        // console.log(flow);
        var getWSData = paths[wsName];
        var type = [];
        for(var key in getWSData){
            type.push(key);
        }
        if (type.length == 0){
            alert(wsName+" 没有该接口的 MOKE 数据！请维护！");
        }
        var getData = getWSData[type[0]];
        // console.log(getData);
        var flowData = {
            // http://dev.xxd.com/integrationPlatform/bids
            "url":"http://"+allWSData.host+getData.basePath+(tName===undefined?wsName:tName),
            "index":index,
            "wsName":wsName,
            "type":type[0],
            "description":getData['summary'] + "," + getData['description'],
            "parameters":getData['parameters']
        };
        var arrflowData = [];
        arrflowData.push(flowData);
        this.setState({
            arrflowData:arrflowData
        });
        // console.log(this.state.allWSData);
        // console.log(flowData);

		// 把请求方法传给需要触发的组件，处理请求的数据在这一层
		// 把接口的数据传给需要用的组件，生成dom
	},

    setPageHeight(pageHeight){
        this.setState({
            pageHeight:pageHeight
        });
    },



    render(){

        var props = {};
        props.arrflowData = this.state.arrflowData;
        props.prevFlow = this.prevFlow;
        props.nextFlow = this.nextFlow;
        props.setFlow = this.setFlow;
        props.flowIndex = this.state.flowIndex;
        props.selectedFlow = this.state.selectedFlow;
        props.flowRelation = this.state.flowRelation;
        props.setPageHeight = this.setPageHeight;

        return(
            <div>
                <MainHeader></MainHeader>
                <ProductList projectList={this.state.projectList}
                             wsFlow={this.state.wsFlow}
                             setFlow={this.setFlow}
                             >
                </ProductList>

                <div ref="borderLeftSolid" style={{borderLeft:'1px solid #000',width:'10px',height:this.state.pageHeight,float:'left'}}></div>
                <FlowData ref="flowDataRef" {...props}
                            >
                </FlowData>

            </div>
        );
    }
});

dom.render(<Content />, document.getElementById('Content'));