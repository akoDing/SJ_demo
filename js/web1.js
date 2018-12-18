var web = web || {};

$(function(){

	web.init();
})
var web = {
	init:function(){
		web.countdown = 60;
		web.isetcode = false;
	
		this.headers();
		this.secondary();
		this.serchlist();
		this.tanchuceng();
	},
	tanchuceng:function(){
		
		
		 function webpop_dingwei(classname){
	        wh=$(window).height();
	        ch=$('.'+classname).height();
	        $('.'+classname).css({"top":(wh-ch)/2})
	        //关闭弹出层
			      $("#mydq_close,.baocun_my_aq").click(function(){
			        $(".webpopbg,.my_aq_popbox").hide()
			      })
	      }
			//打开弹出层
	      $(".regulations_search_gj,.regulations_infor_search_gj").click(function(){
	      	
	      	if($(".webpopbg").length>0){
	      	  
	      	  
	      	  
	      	}else{
	      	  
	      	 	  str='<div class="webpopbg"></div><div class="my_aq_popbox my_aq_popbox_bag" ><div class="my_aq_popbox_title"><span class="white fs18">高级搜索</span> <i class="iconfont icon-guanbi" id="mydq_close"></i></div><div class="my_aq_inputbox"><ul class="advanced_search"><li><span class="tiaojian"></span><select class="ziduan tiaow"><option>所有字段</option><option>文头</option><option>文号</option><option>题目</option><option>主属单位</option><option>正文</option><option>签发单位</option><option>时间</option><option>主题词</option></select><input type="text" placeholder="请输入需要检索的关键词" /></li><li><select class="tiaojian"><option>AND</option><option>OR</option><option>NOT</option></select><select class="ziduan"><option>所有字段</option><option>文头</option><option>文号</option><option>题目</option><option>主属单位</option><option>正文</option><option>签发单位</option><option>时间</option><option>主题词</option></select><input type="text" placeholder="请输入需要检索的关键词" /></li><li><select class="tiaojian"><option>AND</option><option>OR</option><option>NOT</option></select><select class="ziduan"><option>所有字段</option><option>文头</option><option>文号</option><option>题目</option><option>主属单位</option><option>正文</option><option>签发单位</option><option>时间</option><option>主题词</option></select><input type="text" placeholder="请输入需要检索的关键词" /></li></ul><ul class="advanced_search label_ul"><li><label>派送级别：</label><select><option>请选择</option></select></li><li><label>文件级别：</label><select><option>请选择</option></select></li><li><label>文件类型：</label><select><option>请选择</option></select></li><li><label>文件密级：</label><select><option>请选择</option></select></li></ul><div class="btn_bottom"><a href="regulations_list5.html"><button class="submit_my_aq fs16">确定</button></a><button class="baocun_my_aq fs16">取消</button></div></div></div>';
	      	 	  $('body').append(str)
	      	  
	      	}
	      	
	      	
	      
	        $(".webpopbg,.my_aq_popbox").show()
	        webpop_dingwei('my_aq_popbox');
	      })
       $("#mydq_close,.baocun_my_aq").click(function(){
              $(".webpopbg,.my_aq_popbox").hide()
      })
		
	},
	serchlist:function(){
		
		
		
		
		
		
		$(".sup_infor_title>i").click(function(){
			$(".boxtable_up").removeClass("active");
			if($(this).hasClass("icon-triangle-down")){
				$(this).removeClass("icon-triangle-down").addClass('icon-2')	
				$(".boxtable_up").eq(1).addClass("active");
				$(".sup_danwei_pop").hide();
			}else{
				$(this).addClass("icon-triangle-down").removeClass('icon-2')	
				$(".boxtable_up").eq(0).addClass("active");	
				$(".sup_danwei_pop").show();
			}
			
			
		})
		
		
		$("#listdata_year").datepicker({ 
		language: "zh-CN", 
		todayHighlight: true, 
		format: 'yyyy-mm',
		autoclose: true, 
		startView: 'years', 
		startView: 'months', 
		minViewMode:'months' 
	});
		
		//头边字体
		$(".top_pop_zt>ul>li").click(function(){
			nums=$(this).attr('data-id')
			if(nums==0){
				$(".fs14").css({'font-size':'14px'})
				$(".fs16").css({'font-size':'16px'})
				$(".fs18").css({'font-size':'18px'})
				$(".fs26").css({'font-size':'26px'})
			}
			if(nums==1){
				$(".fs14").css({'font-size':'16px'})
				$(".fs16").css({'font-size':'18px'})
				$(".fs18").css({'font-size':'22px'})
				$(".fs26").css({'font-size':'30px'})
			}
			if(nums==2){
				$(".fs14").css({'font-size':'18px'})
				$(".fs16").css({'font-size':'20px'})
				$(".fs18").css({'font-size':'24px'})
				$(".fs26").css({'font-size':'34px'})
			}
			
		});
		
		
		
		
		
		
		$(".guanbi").click(function(){
			$(this).parents('li').remove();
		})
		$(".qingchu").click(function(){
			$('.bot_ul').html('');

		})
		
	},
	secondary:function(){
		$(".secondary_list").hover(function(){
			$(this).addClass('active')
			
			},function(){
				$(this).removeClass('active')	
			
		})
		
		$(".secondary_list").hover(function(){
			$(".secondary_list").css({"z-index":"9"})
			$(this).css({"z-index":"99"})
			$(this).find('.secondary_list_pop').show()
			
			num=$(this).index('.secondary_list') //
			if(num>5){
				$(this).addClass('lastboxpop')
				
			}
		},function(){
			$(this).find('.secondary_list_pop').hide()
			
		})
		
		
		
	},
	headers:function(){
		//鼠标滑动搜索
		//$('.top_nav_1').hover(function(){
		//	$(".headInputbox").addClass('active');	
		//})
		//取消搜索
		//$(".headInputbox").hover(function(){
				//$(".headInputbox").removeClass('active');	
		//	},function(){
			//	$(".headInputbox").removeClass('active');	
		//	})
		
		//关闭 弹出层
		$(".indexclose").click(function(){
			$(".webbox_xinxi").slideUp(500,function(){
				$(".top_pop_xinxi_div").show();
			})
			
		})
		
		$(".top_pop_xinxi_div").click(function(){
			$('.top_pop_xinxi_div').hide();
			$(".webbox_xinxi").slideDown()
		})
		$(".top_pop_xinxi").hover(function(){
			
		},function(){
			$(".webbox_xinxi").slideUp(500,function(){
				$(".top_pop_xinxi_div").show();
			})
			
		})
		
		
		
		//首页 效果
		$('.index_list').hover(function(){
			$(this).addClass('active');
			
			
			$(this).find('.index_list_pop').show()
			//setTimeout(removeClass, 500);
		},function(){
			$(this).find('.index_list_pop').hide();	
			$(this).removeClass('active');
		
		});
		function donghuajiazai(){
			var wow = new WOW({
				boxClass: 'wow',
				animateClass: 'animated',
				offset:0,
				mobile: true,
				live: true
			});
			wow.init();		
		}
		
		
		
	}
}

