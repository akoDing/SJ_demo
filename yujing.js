var bar1 = echarts.init(document.getElementById('bar-1'));
    option2 = {
        tooltip : {
        trigger: 'axis'
    	},
    legend: {
        data:['红色预警','黄色预警'],
          x: 'center', // 'center' | 'left' | {number},
        y: '360', // 'center' | 'bottom' | {number},

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
            data : ['连续三年执行率较低未做调整异常','三公经费','超预算或无预算安排支出','总预算支出进度缓慢','项目经费执行进度异常','三公经费和会议费超预算','政府采购收款单位不在指定供应商目录','预算调整幅度过高','预备费预警','预算周转金预警','收入、支出与预算及预算执行情况进度异常','三公经费”超预算','政府采购：超申报数'],
       		 axisLabel: {
                show:true,
                interval: 0, //强制所有标签显示
                align:'left',
                margin: 0, //标签向右移动 如果yAxis 跟 xAxis换了,这个margin应该调为0才能看见标签显示
                textStyle: {
                    color: "#000",
                },
                formatter: function (params){   //标签输出形式 ---请开始你的表演
                    var index = 8;
                    var newstr = '';
                    for(var i=0;i<params.length;i+=index){
                        var tmp=params.substring(i, i+index);
                        newstr+=tmp+'\n';
                    }
                    if( newstr.length > 6)
                        return '\n'+newstr.substring(0,6) + '...';
                    else
                        return '\n'+newstr;
                },
            },
            triggerEvent: true,
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
         {
            name:'黄色预警',
            type:'bar',
            barWidth :30,
              itemStyle: {
				normal: {
					color: "#EFAF58",
					
				}
			},
            data:[11, 7, 9, 27, 27, 71, 175, 179, 49, 19, 9, 15,19],
          
        },
        {
            name:'红色预警',
            type:'bar',
            barWidth :30,
            itemStyle: {
				normal: {
					color: "#F46665",
					
				}
			},

            data:[8, 6, 12, 22, 26, 76, 136, 162, 32, 20, 6, 10,20],
           
        },
     
    ]
    };
    bar1.setOption(option2);

    bar1.on('mouseover', function (params) {    //鼠标经过图表时候判断参数  ---请开始你的表演
       // console.log(params);
        var tt = $('#tip');
        if( params.componentType == 'xAxis' ){
           
            tt.html(params.value);
            console.log('x='+params.event.event.layerX+'  ---'+'y='+params.event.event.layerY)
            tt.css('left', params.event.event.layerX+10);
            tt.css('top', params.event.event.layerY+10);
            console.log(tt.css('left'));
            tt.removeClass('hide');
        }else{
        	
        	  tt.addClass('hide');
        }
    });
     bar1.on('mousedown', function (params) {    //鼠标经过图表时候判断参数  ---请开始你的表演
     	
     	 if( params.componentType == 'series' ){
        //alert(params.value+'-----'+params.name); 
        nums=params.value%2+1
        
        listnum=0;
        jsarray=['连续三年执行率较低未做调整异常','三公经费','超预算或无预算安排支出','总预算支出进度缓慢','项目经费执行进度异常','三公经费和会议费超预算','政府采购收款单位不在指定供应商目录','预算调整幅度过高','预备费预警','预算周转金预警','收入、支出与预算及预算执行情况进度异常','三公经费”超预算','政府采购：超申报数'];
        for(var i=0;i<=jsarray.length;i++){
          if(params.name == jsarray[i]){
           listnum=i
          }

      }
        
     window.location.href='red_alert.html?num='+nums+'&list='+listnum;
        
       }
     	 
     	 
     	 
     	 
     	 
     	 
     	 
    });
    bar1.on('mouseout', function (params) {
       $('#tip').addClass('hide');
    })
    
    
//  第二个ech
  var bar2 = echarts.init(document.getElementById('superv_ech_2'));
 option_2 = {
      tooltip : {
        trigger: 'axis'
    	},
    legend: {
        data:['红色预警','黄色预警'],
          x: 'center', // 'center' | 'left' | {number},
        y: '360', // 'center' | 'bottom' | {number},

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
            data : ['老干部局','区纪委监委','区委办','区政策研究室','区组织部','区宣传部','区统战部','区民主党派','区政法委','区级机关工委'],
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
         
        {
            name:'红色预警',
            type:'bar',
            stack: '总量',
              barWidth :40,
           itemStyle: {
				normal: {
					color: "#F46665",
					
				}
			},

            data:[75,57,21,23,21,25,19,11,5,3],
           
        },{
            name:'黄色预警',
            type:'bar',
            stack: '总量',
             barWidth :40,
              itemStyle: {
				normal: {
					color: "#EFAF58",
					
				}
			},
            data:[48, 40, 46, 28,26, 18,18, 18, 10, 6,],
          
        },
     
    ]
    };
   bar2.setOption(option_2);  
   bar2.on('mouseover', function (params) {    //鼠标经过图表时候判断参数  ---请开始你的表演
       // console.log(params);
        var tt = $('#tip');
        if( params.componentType == 'xAxis' ){
           
            tt.html(params.value);
            console.log('x='+params.event.event.layerX+'  ---'+'y='+params.event.event.layerY)
            tt.css('left', params.event.event.layerX+10);
            tt.css('top', params.event.event.layerY+10);
            console.log(tt.css('left'));
            tt.removeClass('hide');
        }else{
          
            tt.addClass('hide');
        }
    });
     bar2.on('mousedown', function (params) {    //鼠标经过图表时候判断参数  ---请开始你的表演
       if( params.componentType == 'series' ){
        //alert(params.value+'-----'+params.name); 
        nums=params.value%2+5
        
        listnum=0;
        jsarray=['老干部局','区纪委监委','区委办','区政策研究室','区组织部','区宣传部','区统战部','区民主党派','区政法委','区级机关工委'];
        for(var i=0;i<=jsarray.length;i++){
          if(params.name == jsarray[i]){
           listnum=i
          }

      }
        
     window.location.href='red_alert.html?num='+nums+'&list='+listnum;
        
       }
    });
   