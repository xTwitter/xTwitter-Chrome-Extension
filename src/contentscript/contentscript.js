const __DEBUG__ = true;

function checkPageMoved() {
	if( $('.dashboard-right .xTwitter').length == 0
		&& $('.SidebarCommonModules .xTwitter').length == 0 ) {
			return false
	} else {
		return true
	}

}

function getName() {
	return $('.u-textInheritColor.js-nav').text();
}

function getRecommendTweet(tweetInfo) {
	var userProfileImage = tweetInfo.userProfileImage;
	var userName = tweetInfo.userName;
	var userScreenName = tweetInfo.userScreenName;
	var tweetText = tweetInfo.tweetText;

	return `
		<li class="stream-item">
			<div class="tweet">
				<div class="context"></div>
				<div class="content">
					<div class="stream-item-header">
						<a class="account-group">
							<img class="avatar" src="${userProfileImage}">
							<span class="FullNameGroup">
								<strong class="fullname">${userName}</strong>
								<span>&rlm;</span>
								<span class="UserBadges"></span>
								<span class="UserNameBreak">&nbsp;</span>
							</span>

							<span class="username">
								@<b>${userScreenName}</b>
							</span>
						</a>
					</div>

					<div class="tweet-text-container">
						<br>
						${tweetText}
					</div>
				</div>
			</div>
		</li>
	`
}

function setRecommendTweet() {
	// 사용자 이름 가져오기
	let userName = getName();

	let tweetInfo_1 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/1199583445/____2_bigger.jpg',
		userName: 'paper_bot',
		userScreenName: 'paper_bot',
		tweetText: '평소에 안 읽던 논문을 아이패드 산다고 갑자기 읽게 될리가 없잖아... 살까말까 고민할 시간에 논문 1편이라도 더 읽어.'
	};

	let tweetInfo_2 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH_bigger.jpg',
		userName: 'Google Korea',
		userScreenName: 'googlekorea',
		tweetText: '오늘 구글은 지메일에 머신러닝을 이용한 보안 업데이트를 추가했습니다. 새로 추가된 보안 기능으로 기업 데이터를 더욱 안전하게 보호하세요! 자세한 내용은 ...'
	};

	let tweetInfo_3 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/839368287813132288/_hQyIGrn_bigger.jpg',
		userName: '삼성전자 뉴스룸',
		userScreenName: 'SamsungNewsroom',
		tweetText: '북해의 풍경, 그림이 되다! 노르웨이 로포텐 삼성 ‘더 프레임’ 론칭 현장'
	};

	let tweetInfo_4 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/712467445294891008/AmnU95lu_bigger.jpg',
		userName: '위키트리 WIKITREE',
		userScreenName: 'wikitree',
		tweetText: '빅뱅 탑 대마초 혐의 인정 후 YG 주가에 생긴 일'
	};
	
	let recommendTweets = '';

	recommendTweets += getRecommendTweet(tweetInfo_1);
	recommendTweets += getRecommendTweet(tweetInfo_2);
	recommendTweets += getRecommendTweet(tweetInfo_3);
	recommendTweets += getRecommendTweet(tweetInfo_4);
	
	let dom = `
		<div class="module xTwitter">
			<div class="flex-module">
				<div class="flex-module-header">
					<h3>xTwitter의 트윗 추천</h3>
					<small>· </small>
					<button type="button" class="btn-link">
						<small>새로 고침</small>
					</button>
					<small class="view-all">·
						<a class="js-view-all-link js-nav">모두 보기</a>
					</small>
				</div>

				<div class='flex-module-inner'>
					<h4>${userName}님이 좋아하실 만한 트윗</h4>
					<br>
					<div class="stream-container">
						<div class="stream-item"></div>

						<div class="stream">
							<ol class="stream-items">
								${recommendTweets}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;

	// attach
	$('.dashboard-right').prepend(dom);
}

function getRecommendFollow(followInfo) {
	var userProfileImage = followInfo.userProfileImage;
	var userName = followInfo.userName;
	var userScreenName = followInfo.userScreenName;

	return `
		<div class="UserSmallListItem account-summary">
			<div class="content">
				<a class="account-group js-recommend-link js-user-profile-link user-thumb">
					<img class="avatar" src="${userProfileImage}">
					<span class="account-group-inner">
						<strong class="fullname">${userName}</strong>
						<span class="UserBadges"></span>
						<span class="UserNameBreak">&nbsp;</span>
						<span class="username u-dir">
							@<b>${userScreenName}</b>
						</span>
					</span>
				</a>

				<small class="metadata social-context">
				</small>
			</div>
		</div>
	`;
}

function setRecommendFollow() {
	let userName = getName();

	let followInfo_1 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH_bigger.jpg',
		userName: 'Google Korea',
		userScreenName: 'googlekorea'
	};

	let followInfo_2 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/839368287813132288/_hQyIGrn_bigger.jpg',
		userName: '삼성전자 뉴스룸',
		userScreenName: 'SamsungNewsroom'
	};

	let followInfo_3 = {
		userProfileImage: 'https://pbs.twimg.com/profile_images/712467445294891008/AmnU95lu_bigger.jpg',
		userName: '위키트리 WIKITREE',
		userScreenName: 'wikitree'
	};
	
	let recommendFollows = '';

	recommendFollows += getRecommendFollow(followInfo_1);
	recommendFollows += getRecommendFollow(followInfo_2);
	recommendFollows += getRecommendFollow(followInfo_3);

	let dom = `
		<div class="module xTwitter">
			<div class="flex-module">
				<div class="flex-module-header">
					<h3>xTwitter의 추천 팔로우</h3>
					<small>· </small>
					<button type="button" class="btn-link">
						<small>새로 고침</small>
					</button>
					<small class="view-all">·
						<a class="js-view-all-link js-nav">모두 보기</a>
					</small>
				</div>

				<div class="flex-module-inner">
					<h4>${userName}님이 좋아하실 만한 사용자</h4>
					<br>
					${recommendFollows}
				</div>
			</div>
		</div>
	`;

	$('.wtf-module').remove();
	$('.dashboard-right').append(dom);
}

function getRecommendNews(newsInfo) {
	var newsName = newsInfo.newsName;
	var newsText = newsInfo.newsText;
	var newsLink = newsInfo.newsLink;

	return `
		<li class="stream-item">
			<div class="tweet">
				<div class="context"></div>
				<div class="content">
					<div class="stream-item-header">
						<a class="account-group" href="${newsLink}">
							<span class="FullNameGroup">
								<strong class="fullname">${newsName}</strong>
								<span>&rlm;</span>
								<span class="UserBadges"></span>
								<span class="UserNameBreak">&nbsp;</span>
							</span>

							<span class="username">
							</span>
						</a>
					</div>

					<div class="tweet-text-container">
						<br>
						${newsText}
					</div>
				</div>
			</div>
		</li>
	`;
}

function setRecommendNews() {
	let userName = getName();

	let newsInfo_1 = {
		newsName: '중앙일보',
		newsText: '빅뱅 탑, 가수연습생 女후배와 자택서 대마초 흡연',
		newsLink: 'http://news.joins.com/article/21630097'
	};

	let newsInfo_2 = {
		newsName: '연합뉴스',
		newsText: '서울 노원구 수락산 산불…소방당국 "규모 크다"(1보)',
		newsLink: 'http://www.yonhapnews.co.kr/bulletin/2017/06/01/0200000000AKR20170601193300004.HTML?input=1195m'
	};

	let newsInfo_3 = {
		newsName: 'SBS 뉴스',
		newsText: '정유라 강제송환 후 연이틀 조사…검찰, 오늘 영장청구 유력',
		newsLink: 'http://news.sbs.co.kr/news/endPage.do?news_id=N1004224926&plink=ORI&cooper=NAVER'
	};

	let newsInfo_4 = {
		newsName: '연합뉴스',
		newsText: 'BBQ·교촌 이어 KFC도 가격 인상',
		newsLink: 'http://news.naver.com/main/read.nhn?mode=LPOD&mid=sec&oid=001&aid=0009309574&isYeonhapFlash=Y&rc=N'
	};

	let recommendNews = '';

	recommendNews += getRecommendNews(newsInfo_1);
	recommendNews += getRecommendNews(newsInfo_2);
	recommendNews += getRecommendNews(newsInfo_3);
	recommendNews += getRecommendNews(newsInfo_4);
	
	let dom = `
		<div class="module xTwitter">
			<div class="flex-module">
				<div class="flex-module-header">
					<h3>xTwitter의 추천 뉴스</h3>
					<small>· </small>
					<button type="button" class="btn-link">
						<small>새로 고침</small>
					</button>
				</div>

				<div class='flex-module-inner'>
					<h4>${userName}님이 좋아하실 만한 뉴스</h4>
					<br>
					<div class="stream-container">
						<div class="stream-item"></div>

						<div class="stream">
							<ol class="stream-items">
								${recommendNews}
							</ol>
						</div>
					</div>
				</div>
			</div>
		</div>
	`;

	$('.dashboard-left').append(dom);
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
	//setInterval(() => checkPageMoved() ? '' : main(), 1000)
	setRecommendTweet();
	setRecommendFollow();
	setRecommendNews();
})