/**
*items
*/
app.directive('lolItems',function(){
    return{
        restrict:'E',
        templateUrl:'templates/base/items.html',
        transclude:true,
        replace:true,
        scope:false,
        link:function(scope,element,attrs){
            scope.itemOption = {"filter":"All"};
			$("body").css("background","url('images/otherbg.jpg')");
			scope.animateOver = true;
        },
        controller:function($scope,RiotApi){
			var camera, scene, renderer;
			var controls;
			var objects = [];
			var targets = {table:[]};
		
            RiotApi.getInfo("item").success(function(data){
				$('#itemAnimate').hide();
                $scope.itemInfo = data.data;
				/**
				* hide the animation for items for now
				* uncomment the init() and animate() and change the
				* scope.animateOver = true to false
				* and remove the hide() on top in order to
				* revert the change
				*/
				//init(data);
				//animate();
				//setTimeout(replaceItems, 2000)
				function replaceItems(){
					
					$('#itemAnimate').hide();
					$scope.animateOver = true;
					$scope.$digest();
				}
            });
			
			function init(data){
				/**
				* https://github.com/mrdoob/three.js/blob/master/examples/css3d_periodictable.html
				*/
				//var imageWidth = $(window).width()/5;
				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;
				scene = new THREE.Scene();
				var i = 0;
				$.each(data,function(key, value){
					var element = document.createElement('div');
					element.className = 'itemCardSize';
					element.classList.add('col-sm-2');
					//element.style.backgroundColor 
					//	= 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					var pic = document.createElement('img');
					pic.className = 'itemImgWithWidth';
					pic.src = 'images/item_info/'+value.id+'.png';
					element.appendChild( pic );
					
					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 2000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );
					objects.push( object );
					
					var object1 = new THREE.Object3D();
					object1.position.x = ( i%10 * 250 )-window.innerWidth*1.3;
					object1.position.y = - ( Math.floor( i/10 ) * 250 ) + 990;
					targets.table.push( object1 );
					i++;
				});
				console.log(1800/window.innerWidth);
					
					renderer = new THREE.CSS3DRenderer();
					renderer.setSize( window.innerWidth, window.innerHeight );
					renderer.domElement.style.position = 'absolute';
					document.getElementById( 'itemAnimate' ).appendChild( renderer.domElement );
					
					controls = new THREE.TrackballControls( camera, renderer.domElement );
					controls.rotateSpeed = 0.5;
					controls.minDistance = 500;
					controls.maxDistance = 6000;
					controls .noZoom = true;
					controls.noRotate = true;
					controls.noPan = true;
					controls.addEventListener( 'change', render );
					
					transform( targets.table, 2000 );
					
					window.addEventListener( 'resize', onWindowResize, false );
			}
	
			function onWindowResize() {
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
				renderer.setSize( window.innerWidth, window.innerHeight );
				render();
			}
	
			function render() {
				renderer.render( scene, camera );
			}
	
			function animate() {
				requestAnimationFrame( animate );
				TWEEN.update();
				controls.update();
			}
			

			function transform( targets, duration ) {
				TWEEN.removeAll();
				for ( var i = 0; i < objects.length; i ++ ) {
					var object = objects[ i ];
					var target = targets[ i ];
					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();
				}
				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();
			}
        }
    };
});
