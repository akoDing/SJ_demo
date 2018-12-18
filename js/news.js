	//计算初始化
		function diyicijiazai(){
			yidong_li_w=$('.yidongbox_li').width();
			firstbox_h=$('.firstbox').height();
	
			li_n=$('.yidongbox_li').length;
			$(".yidongbox").css({"height":firstbox_h})
			
			ulw=zonghe_liw('yidongbox_ul'); //移动宽度
			$(".yidongbox_ul").css({"width":ulw});
			
			bigbox=$(".yidongbox").width();
		
			$("#sliderBox").css({"width":bigbox});
			$("#sliderBox_div").css({"width":ulw});
			
			
			//获取隐藏部分的长度  和逻辑运算
			max_w=''
			rbox_w=parseInt($(".yidongbox").css('width'));
			rigth_box_w = ulw;
			
			if(rigth_box_w>rbox_w){
				max_w=rigth_box_w - rbox_w;
			}	
			$('.input_slider').attr('max',max_w);
			
			$(".input_slider").change(function(){
				slider_num=$(this).val();
				  $(".yidongbox_ul").animate({ 
						"left":-slider_num
					  }, 1 );
			})
			cshwz=0-parseInt($(".yidongbox_ul").css('left'))
			$('#sliderBox').scrollLeft(cshwz);
			
		}
		function chushihua(){
		//获取
		
			diyicijiazai(); //第一次计算舞台大小，初始化函数 
			//yincan();         // 隐藏功能
			gundongtiao_fun();//判断隐藏
			dongjiehuanshu(); //冻结函数
			cengji();         //显示层
			popli_function(); //鼠标滑动细节效果
			listcongxinjiazai(); //排序函数
		}


$(document).ready(function (){
 		yincan()
		chushihua();
});





//		<div class="allbox myaq_biaoji_qingchu" data-biaoji="1">
		function isbiaoji(){
			biaoji=$('.allbox').attr('data-biaoji'); 
//			大于 1的  取消列表操作
				return biaoji;
		
		}
	
		//样式属性细节细节问题------------------------------------------------
		function popli_function(){
				
		//选中一个单元格  改变行 和列的样式
			$(".yidingnrong>ul>li").hover(function(){
	 			//获取关键点
	 			biaoji=isbiaoji();
	 			if(biaoji>1){
	 				return false;
	 			}
	 			
	 			$(this).addClass("act")
	 			ul=$(this).parents('ul');
	 			li_nums=ul.find("li").index(this);
	 			divs=$(this).parents('.yidingnrong');
	 			ul_nums=divs.find('ul').index(ul)
	 			
	 			//改变样式
	 			$(".tabelul").find("li").eq(ul_nums).addClass("tab_libg");
	 			$(".yidingnrong").each(function(){
	 				 $(this).find("ul").eq(ul_nums).addClass("tab_libg");
	 			})
	 			divs.find('ul').each(function(i){
	 				$(this).find("li").eq(li_nums).addClass("tab_libg");
	 			})
	 			
	 		},function(){
	 			$(".tab_libg").removeClass('tab_libg');//取消样式\n
	 			$(this).removeClass("act")
	 		})
			
	 		//当淡出层 按钮
	 		$(".baiseclose").click(function(){
	 			$('.yuann_pop').hide();
	 		})
	 		
	 		
	 		//改变层级关系
	 		$(".tavnavbox").hover(function(){
	 			$(".allboxlist").css({"z-index":999})
	 			$(".yidingnrong").css({"z-index":0})
	 			
	 		})
	 		//当淡出层
	 		$(".yuann").hover(function(){
	 			classNames=className_fun(this);
	 			$(this).find('.yuann_pop').addClass(classNames).show();	
	 			cengji(this); //改变层级关系
			},function(){
	 			$(this).find('.yuann_pop').hide();	
	 		})
 		}
 		function className_fun(obj){
 			ul=$(obj).parents('ul');
 			li=$(obj).parents('li');
 			li_nums=ul.find("li").index(li);//当前  li_nums;
 			all_li_nums=ul.find("li").length;//一共有多少个LI  all_li_nums;
 			
 			divs=$(obj).parents('.yidingnrong');
 			ul_nums=divs.find('ul').index(ul) //第几个 Y ul_nums
 			leng_num=divs.find('ul').length;  //一共有多少 行 
 			
 			yuansu_num=$('.yidongbox_li').length; 
 			this_num=$(".yidingnrong").index(divs) //当前是第几个元素
 			//内部   行：列    li_nums ：ul_nums   外部 当前 this_num  一共 有多少 yuansu_num 一共有多少列 leng_num
 			
 			//进行判断 下面样式
 			classnames='p_top'
 			if(ul_nums<2 ){
 				classnames='p_bottom';
 			}
 			if(ul_nums>=leng_num-3 ){
 				classnames='p_top';
 			}
			//进行判断 左边样式
 			if(this_num==0 && li_nums<2){
 				classnames='p_left';
 			}
 			//进行判断 右边判断
 			if(this_num==yuansu_num-1 && li_nums>=all_li_nums-2){
 				classnames='p_right';
 			}
 			//进行判断 左下边判断
 			if(this_num==0 && li_nums<2 && ul_nums>=leng_num-1){
 				classnames='p_left divbottom_left';
 			}
 			//进行判断 右下边判断
 			if(this_num==yuansu_num-1 && li_nums>=all_li_nums-2 && ul_nums>=leng_num-1){
 				classnames='p_right divbottom_right';
 			}
 			return classnames;
 			
 		}
 		//层级函数
 		function cengji(obj=''){
 		
	 			$(".allboxlist").css({"z-index":0})//改变头部
	 			$(".yidongbox_li").css({"z-index":0})
	 			$(".yidingnrong").find('ul').css({"z-index":0})
	 			$(".bangdingbox").css({"z-index":0})
	 			
	 			$(obj).parents('.yidongbox_li').css({"z-index":99})
	 			$(obj).parents('ul').css({"z-index":99})
	 			$(obj).parents('.yidingnrong').css({"z-index":99})
	 			$(obj).parents('ul').find('li').css({"z-index":0})
	 			$(obj).parents('li').css({"z-index":99})
 		}
		
		//恢复冻结初始化  函数
		
		function huifu_fun(){
			quxiaostr=$(".bangdingbox_ul").html();
			$(".yidongbox_ul").append(quxiaostr);
			$(".bangdingbox").remove()
			dongjie_yuansu.attr("data-dj",'1')
			$("#sliderBox").attr("data-dj",'1');
			
			
			
			diyicijiazai()
			yincan();
			cengji();
			popli_function()
			//chushihua();
		
		}
		
		
		//冻结  列表
		function  dongjiehuanshu(){
		$('.li_pop_dongjie').click(function(){
			dongjie_yuansu=$(this).parents('.yidongbox_li');//冻结元素
			//冻结设置个节点 //1，取消，  2冻结
			if(dongjie_yuansu.attr("data-dj")==2){
				huifu_fun();
				dongjie_yuansu.find('.li_pop_dongjie').html("冻结")
			}else{
				if($("#sliderBox").attr("data-dj")==2){
					alert('被冻结了，就不能再操作冻结功能')
					return false;
				}
				dongjie_yuansu.find('.li_pop_dongjie').html("取消冻结")
				dongjie_yuansu.addClass('yidong_dongjie')
				dongjie_yuansu.attr("data-dj",'2')  //1，取消，  2冻结
				num=$(".yidongbox_li").index(dongjie_yuansu) // //元素在当前是第几个
				$(".yidongbox_ul").append('<div class="bangdingbox"><div class="bangdingbox_ul"></div></div>');
				$(".yidongbox_li").each(function(i){
				 	if(i>num){
					   $(".bangdingbox_ul").append($(this).clone());
					   $(this).remove();
					}   
				})	 
			 	yangshi(num)
			 	//yincan();//加载初始化冻结函数
			 	cengji();
			 	popli_function();
			 	listcongxinjiazai()	
			 	$('#sliderBox').scrollLeft(0)
			}
		})
	}
		//改变关联的box 大小//和 滚动条大小
		function yangshi(num){
		  	//第几个列表	num
			bigbox=$(".yidongbox").width(); //整体舞台宽度
			
			left_juli=parseInt($(".yidongbox_ul").css("left"));//获取移动juli
			dangqian_all_li_w=zonghe_liw('yidongbox',num);
			
			//冻结占 总box 宽度、
			firstbox_h=$('.firstbox').height();
			
			djie_w=dangqian_all_li_w+left_juli;
			djie_box_w=bigbox-djie_w;
			$(".bangdingbox").css({'width':djie_box_w,"height":firstbox_h})//冻结后的舞台大小
			
			//bangdingbox 内部大小
			yidong_li_w=zonghe_liw("bangdingbox_ul");
			$(".bangdingbox_ul").css({"width":yidong_li_w})
			//改变 滚动条的属性
			$("#sliderBox").css({"width":djie_box_w});
			$("#sliderBox_div").css({"width":yidong_li_w});
			
			$("#sliderBox").attr("data-dj",'2');
			//获取隐藏部分的长度  和逻辑运算
			gundongtiao_fun();
		}
		

		//获取li的总和宽度
		function zonghe_liw(nClass,num=9999){
			var w=0;
			$('.'+nClass).find('.yidongbox_li').each(function(i){
				//判断是否被隐藏掉 ，隐藏部分，取消计算
				if(i<=num){
					if($(this).hasClass('yidongycan')==false){
						w+=$(this).width();	
					}
				}
			})
			return w;
		}
			
		
		
		
		//隐藏功能
		function gundongtiao_fun(){
			$("#sliderBox").scroll(function() {
				a=$(this).scrollLeft()
				//判断是否冻结 1没冻结， 2冻结
				dongjie_num=$("#sliderBox").attr("data-dj")
				if(dongjie_num==2){
					$(".bangdingbox_ul").animate({"left":-a},1);		
					
				}else{
					
					$(".yidongbox_ul").animate({"left":-a},1);	
				}
			});
		}
		function yincan(){
			
			$(".li_pop_yincang").click(function(){

				if($("#sliderBox").attr("data-dj")==2){
					alert('被冻结了，就不能再操作隐藏功能')
					return false;
				}
				
				yidongbox=$(this).parents(".yidongNavli");
				listid=yidongbox.attr('data-id');
				titles=yidongbox.attr("data-name");
				
				fas=false;
				
				$("#yincanliebiao").find('li').each(function(){
						
					if($(this).attr('data-id')==listid){
						fas=true;
						
					}
					
				})
				if(fas== false){
				  
				
				
				
				
				
				$("#yincanliebiao").append('<li data-id="'+listid+'">'+ titles +' <i class="iconfont icon-icon_colse_b guanbi2"></i></li>')
				
				$("."+listid).addClass('hide');
				yincan_xianshi($(this));
				
				}
				
				diyicijiazai()
				gundongtiao_fun();
				cengji()
				popli_function();
				dongjiehuanshu()
				
				yincanliebiao_fun();
			})
		}
		
		function yincan_xianshi(obj){
			
			//改变样式
				yidongNav=obj.parents(".allboxlist"); 
				
				num=0;
				
				yidongNav.find('.yidongNavli').each(function(){
					disa=$(this).hasClass("hide")
					if(disa == false){
						num=num+1;
					}
				})
				
				if(num==0){
					obj.parents('.yidongbox_li').addClass('hide');
					
				}else{
					zongk=num*160;
					obj.parents('.yidongbox_li').removeClass('hide').css({'width':zongk});
				}
	
		}
		function yincanliebiao_fun(){
			$(".guanbi2").click(function(){
				dataid=$(this).parents('li').attr('data-id');
				
				$('.'+dataid).removeClass('hide');
				
				obj=$('.'+dataid).eq(0);
				yincan_xianshi(obj)
				
				$(this).parents('li').remove();
				chushihua();

			})
			$('.qingchu2').click(function(){
				$(".yidongbox").find('li').removeClass('hide');
				$(".yidongbox_li").removeClass('hide');
				
				$("#yincanliebiao").html('');
				
				
				$(".yidongbox_li").each(function(){
					
					nums=$(this).find('.yidongNavli').length;
					$(this).css({'width':nums*160});
					
				})
				
				
				
				chushihua();
				$("#sliderBox").show();
			})
			
		}
		//排序
		function listcongxinjiazai(){
			$(".paixu").click(function(){
				thisbox=$(this).parents('.yidongNav')
				dataSort=$(this).attr("data-sort"); //排序方法 
				nav_num=thisbox.find(".paixu").index(this);  //第几行
				
				
				
				thisBigBox=$(this).parents('.yidongbox_li');
				
				paixu_num=[];
				thisBigBox.find('.yidingnrong>ul').each(function(i){
				   if(i>0){
					   sort_li_num =$(this).find('li').eq(nav_num).attr('data-num')
						paixu_num[i]=sort_li_num;
					}
					
				});
				if(dataSort==0){
				 
					paixu_num = paixu_num.sort(function(value1,value2){return value2 - value1; });	
					$(this).attr("data-sort",1);	
				}else{
			
					paixu_num = paixu_num.sort(function(value1,value2){return value1 - value2; });	
					$(this).attr("data-sort",0);	
					
				}
				//添加列表
				for(var a=0;a<paixu_num.length;a++){			  
				  	thisBigBox.find('.yidingnrong>ul').each(function(i){
					   sort_li_num = $(this).find('li').eq(nav_num).attr('data-num')
								
						
						if(sort_li_num==paixu_num[a]){
							//获取当前ul
							nav_ul_num=thisBigBox.find('.yidingnrong>ul').index(this);
							
					     	$(".yidingnrong").each(function(i){
								thisul=$(this).find('ul').eq(nav_ul_num);
								$(this).append(thisul.clone());
							})
						
							thisli=$(".tabelul").find('li').eq(nav_ul_num);
							$('.tabelul').append(thisli.clone());
					     
						
						}
					});
				  		
				  		
				}
				//删除列表
				shanchu=thisBigBox.find('.yidingnrong>ul').length/2
				
				yiboxnum=$(".yidingnrong").length;
					for(ys=0;ys<yiboxnum;ys++){
					$(".yidingnrong").eq(ys).find('ul').each(function(i){
						if(i<shanchu && i>0){
							$(this).remove()
					}
				})
					
			}
				$(".tabelul").find('li').each(function(i){
					if(i<shanchu  && i>0){
						$(this).remove()	
					}
				})
				
				popli_function()
				cengji();
			})
	}
