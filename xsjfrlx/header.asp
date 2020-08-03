		<header>
			<div class="container c">
				<div class="l vam">
					<a href="/" class="hover"><i class="icon icon-home"></i> 网站首页</a>
					<a href="javascript:void(0)" class="wxP hover"><i class="icon icon-weixin"></i> 微信订阅号
						<div class="wx"><img src="/img/wx.jpg"/></div>
						<div class="white"></div>
					</a>
					<a href="http://weibo.com/neworldjp" target="_blank" class="hover"><i class="icon icon-weibo"></i> 微博</a>
					<a href="javascript:void(0);" onclick="doyoo.util.openChat('g=10057741');return false;" class="hover"><i class="icon icon-kefu"></i> 在线客服</a>
				</div>
				<div class="r vam">
					<a href="https://sh.xsjedu.org/3g/" class="hover"><i class="icon icon-phone"></i> 手机版</a>
					<span class="schoolIcon">各地学校 <i class="icon icon-school"></i>
						<div class="schoolList c"><%
RequestInfo("select dbo.Fun_getpy(SUBSTRING(Division_Campus,1,1)) Initial,City_Url,Division_Campus from City_View Order by Initial,City_Order")
If IsArray(TopInfo) Then
	dim cityStr,Temp
	For i=0 To UBound(TopInfo,2)
		if Temp<>TopInfo(0,i) then
			cityStr=cityStr&"</div><div class=item ><em>"&UCase(TopInfo(0,i))&"</em>"
			Temp=UCase(TopInfo(0,i))
		end if
			cityStr=cityStr&"<a href="""&TopInfo(1,i)&""" target=""_blank"">"&TopInfo(2,i)&"</a>"
	Next
cityStr=right(cityStr,len(cityStr)-6)
cityStr=cityStr&"</Div>"	
End If
response.Write(cityStr)					
							%></div>
						<div class="white"></div>
					</span>
				</div>
			</div>
		</header>
		<div class="headImg"><%
'全国站_上海_通用头部_横幅广告
RequestInfo("select top 1 Recommended_Info_Url,Recommended_Info_Name,Recommended_Info_Pic from Recommended_Info where Recommended_id=1204 and Recommended_Info_IsClose=0 order by Recommended_Info_Order")
If IsArray(TopInfo) then
		%><a href="<%=TopInfo(0,0)%>" title="<%=TopInfo(1,0)%>" target="_blank"><img src="<%=TopInfo(2,0)%>" alt="<%=TopInfo(1,0)%>" width="1200" border="0"/></a><%
end if			
	%></div>
		<div class="container c">
			<div class="l vam logo"><a href="/"><i class="icon icon-logo"></i></a><span></span></div>
			<form action="" onsubmit="return false;" class="l re fm">
				<input type="text" id="search_input" /><input type="submit" value="搜索" onclick="if(document.getElementById('search_input').value!=''){window.location.href ='/courses/Class-0-0-0-0-0-0-0-0-0-' + encodeURI(document.getElementById('search_input').value.replace(/^\s+|\s+$/g, ''))+'/';}"/><i class="icon icon-search ab"></i>
				<span class="line active">
					<a href="https://sh.xsjedu.org/courses/5666.html" target="_blank">快速拿本科</a>
					<a href="https://sh.xsjedu.org/courses/491.html" target="_blank">日语初级入门班</a>
				</span>
			</form>
			<div class="r"><i class="icon icon-dianhua"></i></div>
		</div>
		<div class="heading" style="position: relative">
		    <div style="width: 100%;height:2px;background-color:#00A0E9; position: absolute; top: 40px; z-index: 1000"></div>
			<div class="container vam re">
				<div class="title">
					<span class="class"><i class="icon icon-fenlei"></i> 全部课程分类</span>
					<a href="/"<%if LCase(request.ServerVariables("SCRIPT_NAME"))="/default.asp" then%> class="active"<%end if%>>首页</a>
					<a href="/xueli/">学历</a>
					<a href="/riyu/">日语</a>
					<a href="/yingyu/" target="_blank">英语</a>
					<a href="https://sh.xsjedu.org/xyz/zt/004/">小语种</a>
			  	<a href="http://rb.xsjedu.org/" target="_blank">日本留学</a>
					<!-- <a href="http://ky.xsjedu.org/" target="_blank">在职研</a> -->
					<a href="http://zb.xsjedu.org" target="_blank">直播课</a>
					<a href="/submap/"<%if instr(LCase(request.ServerVariables("SCRIPT_NAME")),"/submap/")<>0 then%> class="active"<%end if%>>校区</a>
				</div>
				<div class="itemTotal c">
					<div class="classList l">
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-1"></i></span>
							<a href="/xueli/"  target="_blank" class="itemCon">自考学历<br /><em>高升本</em><em>专升本</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-2"></i></span>
							<a href="/xueli/"  target="_blank" class="itemCon">成考学历<br /><em>大财大</em><em>上师大</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-4"></i></span>
							<a href="/riyu/"  target="_blank" class="itemCon">王牌日语<br /><em>考证班</em><em>达人班</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-5"></i></span>
							<a href="/yingyu/zhuanti/darenyingyu/"  target="_blank" class="itemCon">综合英语<br /><em>基础班</em><em>外教口语</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-6"></i></span>
							<a href="/xyz/" target="_blank" class="itemCon">魅力多国语<br /><em>西语</em><em>德语</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-7"></i></span>
							<a href="/xyz/fy/"  target="_blank" class="itemCon">浪漫法语<br /><em>兴趣班</em><em>口语班</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-8"></i></span>
							<a href="/hanyu/zt/001/"  target="_blank" class="itemCon">时尚韩语<br /><em>兴趣班</em><em>考证班</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<div class="re">
							<span class="classIcon"><i class="icon icon-list-9"></i></span>
							<a href="/zhibo/"  target="_blank" class="itemCon">学历直播课<br /><em>项目管理</em><em>会展管理</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div>
						<!-- <div class="re">
							<span class="classIcon"><i class="icon icon-list-3"></i></span>
							<a href="http://ky.xsjedu.org/"  target="_blank" class="itemCon">在职研<br /><em>全程班</em><em>冲刺班</em></a>
							<i class="icon icon-right ab"></i>
							<em class="right ab"></em>
						</div> -->
					</div>
					<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='40' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
										<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='63' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
										<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='1' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="https://sh.xsjedu.org/riyu/" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
										<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='2' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
										<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='3' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
										<div class="itemRight l"><%
RequestInfo("select top 1 Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Courses_Class_id='48' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
						<div class="itemRight l"><%
RequestInfo("select Courses_Class_id,Courses_Class_Name,Courses_Class_Order from Class_View where  City_id='"&City_id&"' and Language_id='56' group by Courses_Class_id,Courses_Class_Name,Courses_Class_Order order by Courses_Class_Order")				
If IsArray(TopInfo) then	
	TopInfo2=TopInfo
	for i=0 to UBound(TopInfo2,2)
						%><div class="c rightCon">
							<div class="l"><strong><%=TopInfo2(1,i)%></strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Courses_Class_id='"&TopInfo2(0,i)&"' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div><%
	Next			 
end if
set TopInfo2=nothing
						%></div>
		<div class="itemRight l">
			<div class="c rightCon">
							<div class="l"><strong>直播课</strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Language_id='72' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div>
						</div>
		<div class="itemRight l">
			<div class="c rightCon">
							<div class="l"><strong>硕士</strong></div>
							<div class="l school"><%
		RequestInfo("select Courses_id,Courses_Name  from  CoursesView where City_id='"&City_id&"' and Language_id='71' and Courses_isClose=1  order by Courses_Order")				
		If IsArray(TopInfo) then							
			for j=0 to UBound(TopInfo,2)					
								%><span><a href="/courses/<%=TopInfo(0,j)%>.html" title="<%=TopInfo(1,j)%>学习" target="_blank"><%=TopInfo(1,j)%></a></span><%
			Next					
		end if						
								%></div>
						</div>
						</div>
					</div>
				</div>