var swingLyncApp = angular.module('swingLyncApp',['ngAnimate', 'duScroll', 'angular-carousel']);
var OFFSET = 50;

swingLyncApp.controller("landingPageController", function($scope, $timeout, $document, $window){
    $scope.slides = ["content-section-c", "content-section-a", "content-section-l",  "content-section-g", "content-section-e", "content-section-t", "content-section-b", "content-section-tm", "content-section-f", "content-section-k"];

    $scope.testmonials = [
        {
            id: 1,
            val: "SwingLync seems easy to use which is very important to me, as an average golfer."
        },
        {
            id: 2,
            val: "I could see my kid, and wife benefiting from this. It is very straight-forward and keeps the learning process simple.",
        },
        {
            id: 3,
            val: "I normally go to the driving range and just hit balls with no goal in mind. This system would tell me exactly what to practice.",
        },
        {
            id: 4,
            val: "I’m a scratch golfer and I can say that even at my ability, I’m constantly working to improve my body positioning.",
        },
        {
            id: 5,
            val: "I like knowing that I’m learning the proper biomechanics of the swing. This will help me add extra distance and consistency to my game.",
        },
        {
            id: 6,
            val: "SwingLync costs less than a new driver, and will actually help my crappy game. It is a no-brainer."
        },
    ];

    $scope.carousels = [
        {
            id: 1,
            img: 'http://www.swinglync.com/img/mobile_screens/1.png'
        },
        {
            id: 2,
            img: 'http://www.swinglync.com/img/mobile_screens/2.png'
        },
        {
            id: 3,
            img: 'http://www.swinglync.com/img/mobile_screens/3.png'
        },
        {
            id: 4,
            img: 'http://www.swinglync.com/img/mobile_screens/4.png'
        },
        {
            id: 5,
            img: 'http://www.swinglync.com/img/mobile_screens/5.png'
        },
        {
            id: 6,
            img: 'http://www.swinglync.com/img/mobile_screens/6.png'
        },
    ];

    $scope.navShow = false;

    var $mobImage = null;
		
    // adjust the height of the mobile image carousel in the right panel to the image height inside it
    var resizeCarousel = function() {
		return
        if ($mobImage === null) {
            $mobImage = document.getElementsByClassName('section-g-swing-img')[0];
        }
        angular.element(document.getElementsByClassName('mobile_images')[0]).height(angular.element($mobImage).height());
    }

    angular.element($window).bind('resize', function() {
        resizeCarousel();
    });

    $document.on('scroll', function() {
        var introSection = angular.element(document.getElementById('intro-header'));
        $scope.navShow = introSection.outerHeight() - OFFSET - 5 <= $document.scrollTop();
        $scope.$apply();

        resizeCarousel();
    });

    $scope.scrollDown = function() {
        var contentSectionB = angular.element(document.getElementById('content-section-b'));
        $document.scrollToElement(contentSectionB, OFFSET, 1000);
    }
	
	// Swing motion FreezeFrame
	//var swingMotionFF = new freezeframe('.swinglync-gif').capture().setup();
	
	$scope.onTouchstart = function() {
	//   swingMotionFF.release(); // release animation
	}
	
	$scope.onTouchend = function() {
	   //swingMotionFF.trigger(); // trigger animation
	}

})
.value('duScrollOffset', OFFSET)
.value('duScrollDuration', 1000);