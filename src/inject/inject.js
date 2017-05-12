const __DEBUG__ = true

function main() {
	__DEBUG__ && console.log('main has been called')
	
	let nickName = $('.u-textInheritColor.js-nav').text()

	function createQuoteTweet(nickName, userName, content, link) {
		if( typeof nickName == 'object' && userName === undefined ) {
			userName = nickName.userName
			content = nickName.content
			link = nickName.link
			nickName = nickName.nickName
		}
		return `
	<div class='QuoteTweet'>
		<div class='QuoteTweet-container'>
			<a class='QuoteTweet-link' href='${link}'></a>
			<div class='QuoteTweet-innerContainer' data-item-type='tweet'>
				<div class='tweet-content'>
					<div class='QuoteTweet-authorAndText'>
						<div class='QuoteTweet-originalAuthor'>
							<b class='QuoteTweet-fullname'>${nickName}</b>
							<span class='username'>@<b>${userName}</b></span>
						</div>
					</div>
					<div class='QuoteTweet-text'>${content}</div>
				</div>
			</div>
		</div>
	</div>
		`
	}

	let sampleTweet = {
		nickName: '초록물꼬기 / mitssi',
		userName: 'mitssi_p',
		content: '난 지하철에서도 자기개발 할 수 있도록 태블릿피시에 인강 받아놓고 전용 파우치를 구입하며 블루투스 키보드 마우스도 가지고 다니는 등 온갖 세팅을 다 해놓지만 정작 지하철에서는 트위터한다',
		link: 'http://www.naver.com'
	}

	let sampleTweets = ''
	for( let i=0; i<5; i++ ) {
		sampleTweets += createQuoteTweet(sampleTweet)
	}

	let dom = `
	<div class='module xTwitter'>
		<div class='flex-module'>
			<div class='flex-module-header'>
			 	<h3>xTwitter</h3>
				<small>.</small>
				<button type='button' class='btn-link js-refresh-suggestions'>
					<small>새로 고침</small>
				</button>
				<small>.</small>
				<button type='button' class='btn-link js-refresh-suggestions'>
					<small>또 하나의 버튼</small>
				</button>
			</div>
			<div class='flex-module-inner'>
				<h4>${nickName}님이 좋아하실 만한 트위터</h4>
				<br/>
				${sampleTweets}
			</div>
		</div>
	</div>
	`

	// attach
	$('.dashboard-right').prepend(dom)
	$('.SidebarCommonModules').prepend(dom)
}

function checkPageMoved() {
	if( $('.dashboard-right .xTwitter').length == 0
		&& $('.SidebarCommonModules .xTwitter').length == 0 ) {
			return false
	} else {
		return true
	}

}

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

	}
	}, 10);
});

$(document).on('ready', function() {
	setInterval(() => checkPageMoved() ? '' : main(), 1000)
})