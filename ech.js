  		each_jiazai()
function each_jiazai(){		
  var bar1 = echarts.init(document.getElementById('echbox_inforbox_1'));
    option1 = {
        tooltip : {
     	   trigger: 'axis'
    	},
    legend: {
        data:['一般公共预算','政府性基金预算','国有资本经营预算'],
        x: 'center', // 'center' | 'left' | {number},
        y: '320', // 'center' | 'bottom' | {number},
		 textStyle : {fontSize : '18',fontFamily : '微软雅黑',},
       itemGap:40,
    },
   grid:{
        x:50,
        y:20,
        x2:30,
        y2:80,
		 show : true,
        borderWidth:1
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2018年预算数','调整预算（+-额)','调整后预算','累计执行数','2017年决算'],
        	axisLabel:{ 
            textStyle:{fontSize:'18',},
           }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
         {
            name:'一般公共预算',
            type:'bar',
            barWidth :40,
              itemStyle: {
				normal: {
					color: "#22619A",
					
				}
			},
            data:[ 26, 28, 70, 175, 180],
          
        },
        {
            name:'政府性基金预算',
            type:'bar',
            barWidth :40,
           itemStyle: {
				normal: {
					color: "#21B696",
					
				}
			},

            data:[76, 135, 162, 32, 20],
           
        },
     {
            name:'国有资本经营预算',
            type:'bar',
            barWidth :40,
              itemStyle: {
				normal: {
					color: "#B5BFC5",
					
				}
			},
            data:[ 46, 38, 20, 205, 100],
          
        },
    ]
    };
    bar1.setOption(option1);		
  		
  
  
  var bar2_1 = echarts.init(document.getElementById('echbox_inforbox_2_1'));
    option2_1 = {
     title : {
        text: '收入结构图',
      	 x: '10%',
        y:'15%',
   	 },   
   tooltip : {
   		 trigger: 'axis'
	},
  
   legend: {
        orient: 'vertical',
        x: '70%',
        y:'center',
        textStyle : {fontSize : '18',fontFamily : '微软雅黑',},
      	itemGap:40,

        data:['一般公共预算','政府性基金预算','国有资本经营预算']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
              center : ['40%', '50%'],

            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: "{b} \n \n {d}%",
                     
                    textStyle: {
                        fontSize: '18',
                        
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
             itemStyle : {
                normal : {
					 color: function(params) {
                        var colorList = [
                      
                           '#FFA812','#21B696','#59B1F0',
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },

            data:[
                {value:335, name:'一般公共预算'},
                {value:310, name:'政府性基金预算'},
                {value:234, name:'国有资本经营预算'},
               
            ]
        }
    ]
};
    bar2_1.setOption(option2_1);
  
 var bar2_2 = echarts.init(document.getElementById('echbox_inforbox_2_2'));
    option2_2 = {
     title : {
        text: '支出结构图',
      	 x: '10%',
        y:'15%',
   	 },   
   tooltip : {
   		 trigger: 'axis'
	},
  
   legend: {
        orient: 'vertical',
        x: '70%',
        y:'center',
        textStyle : {fontSize : '18',fontFamily : '微软雅黑',},
      	itemGap:40,

        data:['一般公共预算','政府性基金预算','国有资本经营预算']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            radius: ['50%', '70%'],
              center : ['40%', '50%'],

            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    formatter: "{b} \n \n {d}%",
                     
                    textStyle: {
                        fontSize: '18',
                        
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
             itemStyle : {
                normal : {
					 color: function(params) {
                        var colorList = [
                      
                           '#E4618D','#21B696','#59B1F0',
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },

            data:[
                {value:335, name:'一般公共预算'},
                {value:310, name:'政府性基金预算'},
                {value:234, name:'国有资本经营预算'},
               
            ]
        }
    ]
};
    bar2_2.setOption(option2_2); 
  
  var bar3 = echarts.init(document.getElementById('echbox_inforbox_3'));
    option3 = {
        tooltip : {
        trigger: 'axis'
    	},
    legend: {
        data:['一般公共预算','政府性基金预算','国有资本经营预算'],
        x: 'center', // 'center' | 'left' | {number},
        y: '320', // 'center' | 'bottom' | {number},
		 textStyle : {fontSize : '18',fontFamily : '微软雅黑',},
       itemGap:40,
    },
   grid:{
        x:50,
        y:20,
        x2:30,
        y2:80,
		 show : true,
        borderWidth:1
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2014年决算比较上年','2015年决算比较上年','2016年决算比较上年','2017年决算比较上年','2018年决算比较上年'],
        	axisLabel:{ 
            textStyle:{fontSize:'18',},
           }
        }		
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
         {
            name:'一般公共预算',
            type:'line',
			
			symbolSize:7, 
			itemStyle:{
				normal:{
					color:'#22619A',
				}
			},

            data:[ 26, 28, 70, 175, 180],
          
        },
        {
            name:'政府性基金预算',
            type:'line',
			//symbol: 'circle',
			symbolSize:7, 
			itemStyle:{
				normal:{
					color:'#21B696',
				}
			},
            data:[76, 135, 162, 32, 20],
           
        },
     {
            name:'国有资本经营预算',
             type:'line',
			//symbol: 'circle',
			symbolSize:7, 
			itemStyle:{
				normal:{
					color:'#B5BFC5',
				}
			},
            data:[ 46, 38, 20, 205, 100],
          
        },
    ]
    };
    bar3.setOption(option3);	
  		
var bar4 = echarts.init(document.getElementById('echbox_inforbox_4'));
    option4 = {
        tooltip : {
        trigger: 'axis'
    	},
    legend: {
        data:['一般公共预算','政府性基金预算','国有资本经营预算'],
        x: 'center', // 'center' | 'left' | {number},
        y: '320', // 'center' | 'bottom' | {number},
		 textStyle : {fontSize : '18',fontFamily : '微软雅黑',},
       itemGap:40,
    },
   grid:{
        x:50,
        y:20,
        x2:30,
        y2:80,
		 show : true,
        borderWidth:1
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['2018年预算较2017年预算','2018年预算较2017年决算',' 预算调整幅度（较年初预算）','累计执行率（较年初预算）','累计执行率（较调整后预算）'],
        	axisLabel:{ 
            textStyle:{fontSize:'18',},
           }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
         {
            name:'一般公共预算',
            type:'bar',
            barWidth :40,
              itemStyle: {
				normal: {
					color: "#71a0f7",
					
				}
			},
            data:[ 26, 28, 70, 175, 180],
          
        },
        {
            name:'政府性基金预算',
            type:'bar',
           barWidth :40,
           itemStyle: {
				normal: {
					color: "#ff7b7d",
					
				}
			},

            data:[76, 135, 162, 32, 20],
           
        },
     {
            name:'国有资本经营预算',
            type:'bar',
            barWidth :40,
              itemStyle: {
				normal: {
					color: "#f8b55d",
					
				}
			},
            data:[ 46, 38, 20, 205, 100],
          
        },
    ]
    };
    bar4.setOption(option4);
 }  