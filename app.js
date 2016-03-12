(function(){
	var app=angular.module('store',[ ]);

	app.directive('productTitle',function(){
		return {
			restrict: 'E',
			templateUrl: 'product-title.html'
		};
	});

	 app.directive("productDescription",function(){
    	return {
      		restrict: 'E',
      		templateUrl: 'product-description.html'
    	};
  	});

	app.controller('StoreController',function(){
		this.products = gems;
	});

	app.controller("PanelController",function(){
		this.tab=1;
		this.selectTab=function(selectTab){
			this.tab=selectTab;
		};
		this.isSelected=function(checkTab){
			return this.tab ===checkTab;
		};
	});

  	app.controller('GalleryController', function(){
    	this.current = 0;
    	this.setCurrent=function(selectImg){
      	if (selectImg)
        	this.current = selectImg;
      	else 
        	this.current = 0;
    	};
  	});

  	app.controller('ReviewController', function(){
    	this.review = {};
    	this.addReview = function(product){
      		product.reviews.push(this.review);
      		this.review = {};
    	};
  	});


	var gems = [
		{
			name: 'Merlo',
			price: 399,
			description: 'Red, dry, tasty...',
			canPurchase: true,
			soldOut: false,
			images: [
				 'images/DSC_0345.jpg',
				 'images/DSC_0347.jpg'
				
			],
			reviews: [
				{
					stars: 5,
					body: "I think it is tasty!!!",
					author: "fenrir.new@gmail.com"
				},
				{
					stars: 4,
					body: "I think it is tasty!!!",
					author: "fenrir.new@gmail.com"
				}
			]
		},
		{
			name: 'Bordoux',
			price: 545,
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, repellendus?'			,
			canPurchase: true,
			soldOut: false,
			images: [
				'images/DSC_0330.jpg',
				'images/DSC_0331.jpg'
					
				
			],
			reviews: [
				{
					stars: 5,
					body: "I think it is tasty!!!",
					author: "fenrir.new@gmail.com"
				},
				{
					stars: 4,
					body: "I think it is tasty!!!",
					author: "fenrir.new@gmail.com"
				}
			]
		},
	]; 

})();
