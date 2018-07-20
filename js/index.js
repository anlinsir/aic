var headerUl = $('#headerUl') ,
	allHeight = document.documentElement.clientHeight || document.body.offsetHeight, 
	Warp1 = $('.Warp1')[0] 
	Warp3 = $('.Warp3')[0] 
	par3Ul = $('.par3Ul')[0]
	par3data =[
		{
			img:'./img/3-1.png',
			p1:'智能化贴心交易',
			p2:'根据用户的习惯自动推荐交易币'
		},
		{
			img:'./img/3-2.png',
			p1:'安全稳定',
			p2:'AICEX采用了先进的AI系统，24小时守护者交易大盘'
		},
		{
			img:'./img/3-3.png',
			p1:'智能化多语言',
			p2:'根据用户国籍只能识别语言'
		},
		{
			img:'./img/3-4.png',
			p1:'币币兑换',
			p2:'通过APP/网站吧/API的一键操作的币币兑换'
		},
		{
			img:'./img/3-5.png',
			p1:'杠杆交易',
			p2:'利用小额的资金来金新兵数倍于原始金额的骰子'
		},
		{
			img:'./img/3-6.png',
			p1:'场外交易',
			p2:'业界所称的otc市场'
		},
		{
			img:'./img/3-7.png',
			p1:'交易挖矿',
			p2:'将50%的AIC通过在平台交易奖励给用户'
		},
		{
			img:'./img/3-8.png',
			p1:'人工智能托管',
			p2:'分析全球交易数据提供策略，用户可选择托管时间启动发往主要交易所实现盈利'
		},
		{
			img:'./img/3-9.png',
			p1:'期货合约交易',
			p2:'和根据市场选择5-30倍杠杆'
		}
	],
	par5Ul= $('.par5Ul')[0]
	par5data = [
		{
			img:'./img/5-1.png',
			p1:'持币分红',
			p2:'每天收入100%按AIC持有比例分红'
		},
		{
			img:'./img/5-2.png',
			p1:'平台上投票',
			p2:'AICEX上币由AIC持币者投票决定'
		},
		{
			img:'./img/5-3.png',
			p1:'空投奖励',
			p2:'持有AIC不定期空投奖励'
		},
		{
			img:'./img/5-4.png',
			p1:'回购机制',
			p2:'独特的回购机制，平台不定期回购AIC并销毁'
		},
		{
			img:'./img/5-5.png',
			p1:'持币兑换公链',
			p2:'AIC公链发布时持有AIC（ERC20）可免费兑换同等数量的代币'
		},
		{
			img:'./img/5-6.png',
			p1:'AICEX权益',
			p2:'AICEX持有者拥有AICEX的决策权'
		}
	],
	rouziUl = $('.rouziUl')[0],
	rouziUlData = [
			{
				des:'Oliver Perry(博士)',
				name:'人工智能与自然语言专家学者'
			},
			{
				des:'Tyler Cooper',
				name:'区块链领域优秀技术专家'
			},
			{
				des:'Sea wave Wang',
				name:'复旦大学MBA'
			},
			{
				des:'Sven Laepple',
				name:'投资银行的高层管理经验'
			},
			{
				des:'Qing Feng zhang',
				name:'北京航空航天大学电子信息工程学博士'
			},
			{
				des:'Wei ming li',
				name:'美国加州大学计算机系博士'
			},
			{
				des:'Yong zhou',
				name:'曾任职美国硅谷区块链创业公司全栈工程师'
			},
			{
				des:'Yun kun Wu',
				name:'前浦发银行负责跨境支付系统'
			}

	]
	; 
 

for(var i in par3data){

	par3Ul.innerHTML+=`<li>
				<img src="${par3data[i].img}" alt=""><br>
				<p class="lh white fz16">${par3data[i].p1}</p><br>
				<p class="lh p fz16">${par3data[i].p2}</p>
			</li>`

}

for(var i in  par5data){
	par5Ul.innerHTML +=`<li>
						<img src="${par5data[i].img}"><br>
						<span class="fz16 white">${par5data[i].p1}</span><br>
						<span class="fz16 p">${par5data[i].p2}</span>
					</li>`
}

for(var i in rouziUlData){	
	rouziUl.innerHTML += `<li>
							<img src="./img/7-5.png" alt="">
							<p class=" fz20 title " style="font-size:28px;">${rouziUlData[i].des}</p>
							<p class="white fz14">${rouziUlData[i].name}</p>
						</li>`
}


alert(allHeight)




Warp1.style.height =  allHeight +'px'
Warp3.style.height =  allHeight +'px'

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

$('#buy').on('click',function(){
	location.href ='buy.html'
})
