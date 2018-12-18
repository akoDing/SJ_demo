
var web = {
	init:function(){
		web.countdown = 60;
		web.isetcode = false;
	
		this.headers();
		this.Hotel_search();
	},
	headers:function(){
			//var city = remote_ip_info['city'];
			var	url='https://tj.nineton.cn/Heart/index/future24h/?city=CHSH000000';
			var url1='http://v.juhe.cn/xiangji_weather/15_area.php?areaid=101010100&startTime=20180516&endTime=20180521&key=89a35868b200a20bcfb9376a580edfa0';
		//	$.post(url1, /*{ "func": "getNameAndTime" },*/
		//          function(data){
		//			  alert(data.name); // John
		//			  console.log(data.time); //  2pm
		//         
		//		 
		//		  }, "json");
			
			json='{"reason":"success","result":{"series":[{"cw_am":"01","w_am":"多云","cw_pm":"04","w_pm":"雷阵雨","wd":"东南风","wind":"2 级","cwd":"3","tmp_max":29,"tmp_min":21,"sunrise":"04:59","sunset":"19:23"},{"cw_am":"07","w_am":"小雨","cw_pm":"02","w_pm":"阴","wd":"北风","wind":"2 级","cwd":"8","tmp_max":26,"tmp_min":19,"sunrise":"04:58","sunset":"19:24"},{"cw_am":"01","w_am":"多云","cw_pm":"00","w_pm":"晴","wd":"南风","wind":"2 级","cwd":"4","tmp_max":28,"tmp_min":16,"sunrise":"04:57","sunset":"19:25"},{"cw_am":"01","w_am":"多云","cw_pm":"07","w_pm":"小雨","wd":"东南风","wind":"2 级","cwd":"3","tmp_max":29,"tmp_min":16,"sunrise":"04:57","sunset":"19:26"},{"cw_am":"01","w_am":"多云","cw_pm":"01","w_pm":"多云","wd":"东北风","wind":"2 级","cwd":"1","tmp_max":26,"tmp_min":15,"sunrise":"04:56","sunset":"19:26"}],"pubTime":"20180516100412","count":6,"startTime":"20180516","endTime":"20180521"},"error_code":0}';
		//	var obj = eval('(' + json + ')');
			obj= jQuery.parseJSON( json ); 
			n=obj.result.series.length;
			htmls=''
			var l = ["日","一","二","三","四","五","六"];
			var d = new Date().getDay();
			for(var i=0;i<n;i++){
				list=obj.result.series;
				
				if(i==0){
					tq=list[i].w_am;
					wd=list[i].tmp_max;
					$('#jt_tq').html('<img src="img/1.png" class="jtimg" /> '+list[i].tmp_min+'°');
				}else{
					t=d+i
					if(d+i>6){
						t=d+i-7;
					}
					htmls+='<ul><li class="title">星期'+l[t]+'</li><li class="img"><img src="img/2.png" />'+list[i].w_am+'</li><li >'+list[i].tmp_min+'°-'+list[i].tmp_max+'°</li></ul>'
				}
				
			}	
			$(".top_poplist").html(htmls);
	},
	Hotel_search:function(){
		$("#Hotel_screening").click(function(){
			$(".hotel_nav").slideDown();
			 event.stopPropagation();
		})
		$("body").click(function(){
			$(".hotel_nav").slideUp();
		 });
		$('.jia_jian').click(function(){
			this_obj=$(this).parents(".hotel_nav_list");
			
			if(this_obj.hasClass("active")){
				this_obj.removeClass("active")
			
			}else{
				this_obj.addClass("active")
			}
		})
		$('.li_i').click(function(){
			this_obj=$(this);
			
			if(this_obj.hasClass("active")){
				this_obj.removeClass("active")
			
			}else{
				this_obj.addClass("active")
			}
		})
		$('.cha_all').click(function(){
			this_obj=$(this);
			this_li=$(this).parents(".hotel_nav_list");
			
			if(this_obj.hasClass("active")){
				this_obj.removeClass("active")
				this_li.find('.li_i').removeClass("active")
			}else{
				this_obj.addClass("active")
				this_li.find('.li_i').addClass("active")
			}
		})
		
		
		$('.hotel_mover').click(function(){
			this_li=$(this).parents(".hotel_nav_list");
			this_li.find('.dis').show();
			
		})
		
		
		
	}
}

