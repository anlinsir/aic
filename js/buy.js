var headerUl = $('#headerUl') ;
var allHeight = document.documentElement.clientHeight || document.body.offsetHeight, 
	Warp1 = $('.Warp1')[0] ;
	Warp1.style.height =  973 +'px'
headerUl[0].innerHTML = `
<li data-id='0' class='active'>首页</li>
<li data-id='1'>购买</li>
<li data-id='2' >优势</li>
<li data-id='3' >众筹</li>
<li data-id='4' >路线图</li>
<li data-id='5' >团队</li>
<li data-id='6' >伙伴</li>
`
$(headerUl[0]).on('click',function(event){
	event =  window.event || event

	for(var i in $(headerUl[0]).children()){

		$(headerUl[0]).children()[i].className  = ' cu'
	}
	$(event.target).addClass('active')
	
	if(event.target.dataset.id == 0){
		location.href ='./index.html'
		document.documentElement.scrollTop = 0
		document.body.scrollTop = 0
	}else if(event.target.dataset.id == 1){
		document.documentElement.scrollTop = document.documentElement.clientHeight || document.body.offsetHeight  
		document.body.scrollTop = document.documentElement.clientHeight || document.body.offsetHeight
	}
		else if(event.target.dataset.id == 2){
			document.documentElement.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight) +753
			document.body.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight) +753
		}
			else if(event.target.dataset.id == 3){
				document.documentElement.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753
			document.body.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753
			}
				else if(event.target.dataset.id == 4){
					document.documentElement.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880+678
			document.body.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880+678
				}
					else if(event.target.dataset.id == 5){
						document.documentElement.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880 +678 + 1200
			document.body.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880 +678+ 1200
					}
						else if(event.target.dataset.id == 6){
							document.documentElement.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880 +678 + 1200 +2400
			document.body.scrollTop = (document.documentElement.clientHeight || document.body.offsetHeight)*2 +753 +880 +678+ 1200+2400
						}

})	