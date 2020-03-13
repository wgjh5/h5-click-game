

			import * as THREE from './three.module.js';
			import { RectAreaLightUniformsLib } from './RectAreaLightUniformsLib.js';

			import { FBXLoader } from './FBXLoader.js';
			var renderer, scene, camera;
			var origin = new THREE.Vector3();

			var objects;

			var group0 = new THREE.Group();
			var group1 = new THREE.Group();

			var ax = [];
			var ay = [];
			var az = [];

			var ready = false;

			var clock = new THREE.Clock();
			var mixers0 = new Array();
			var mixers1 = new Array();
			var timers0 = new Array();
			var timers1 = new Array();
			var aSwitch0 = new Array();
			var aSwitch1 = new Array();

			var randomlist = new Array();

			var alpha = 0.7;
			var beta = -0.5;

			var rectLight, subRectLight;

			var LSize = 300;
			var subLSize = 200;

			var Lbrightness = 2.0;
			var subLbrightness = 0.5;

			let cTotal = 35;

			var timer = 0;

			var ggg0 = new THREE.Group();
			var ggg1 = new THREE.Group();

			var splits, hand;

			var shakeSpeed = 0;

			var pi = Math.PI;

			var criticalHit = false;
			
			THREE.ImageUtils.crossOrigin = '';

			var cTexture = THREE.ImageUtils.loadTexture('https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/guan3.jpg');
			var sTexture = THREE.ImageUtils.loadTexture('https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/sphere3.jpg');
			var hTexture = THREE.ImageUtils.loadTexture('https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/hand1.jpg');

			document.body.addEventListener('touchmove', function (e) {
			  	e.preventDefault(); //阻止默认的处理方式(阻止下拉滑动的效果)
			}, {passive: false});

			function init() {
				renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.gammaOutput = true;
				renderer.toneMapping = THREE.Uncharted2ToneMapping;
				renderer.toneMappingExposure = 0.75;
				document.body.appendChild( renderer.domElement );
				$(renderer.domElement).addClass('game-canvas');
				// Check for float-RT support
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000	 );
				camera.position.set( 0, 0, 100 );
				camera.lookAt(0, -5, 0);
				scene = new THREE.Scene();

				RectAreaLightUniformsLib.init();
				rectLight = new THREE.RectAreaLight( 0xffffff, Lbrightness, LSize, LSize );
				rectLight.position.set( -10, 90, 0 );
				rectLight.lookAt(0,0,0);
				scene.add( rectLight );

				subRectLight = new THREE.RectAreaLight( 0xffffff, subLbrightness, subLSize, subLSize );
				subRectLight.position.set( 70, -70, 0 );
				subRectLight.lookAt(0,0,0);
				scene.add( subRectLight );

				

				var loader = new FBXLoader();

				var hasGroup = false;



				loader.load( 'https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/nCoV_Model_0216B.fbx', function ( object ) {
					objects = object;
					object.scale.set(0.45, 0.45, 0.45);
					let tweezer = objects.children[0];
					let tg = new THREE.Group();
					tweezer.rotation.set(0, 0, 0);
					tg.add(tweezer);
					objects.add(tg);
					tweezer.children[1].rotation.set(pi / 2, 0, 0);

					let crown = objects.children[0];

					let positionGroup = new THREE.Group();
					positionGroup.add(crown);
					positionGroup.add(tg);
					objects.add(positionGroup);
					positionGroup.position.set(0, 310, 0);

					group0.add(objects);
					for (var i = 1; i < cTotal; i++) {
						let o = object.clone();
						group0.add(o);
					}
					for (var i = 0; i < cTotal; i++) {
						let o = object.clone();
						group1.add(o);
					}

					crownSet( 0, 0.00, 0.00);
					crownSet( 1, 0.00, 0.20);
					crownSet( 2, 0.00, 0.40);
					crownSet( 3, 0.00, 0.60);
					crownSet( 4, 0.00, 0.80);
					crownSet( 5, 0.00, 1.00);
					crownSet( 6, 0.00, 1.20);
					crownSet( 7, 0.00, 1.40);
					crownSet( 8, 0.00, 1.60);
					crownSet( 9, 0.00, 1.80);

					crownSet(10, 0.20, 0.10);
					crownSet(11, 0.20, 0.30);
					crownSet(12, 0.20, 0.50);
					crownSet(13, 0.20, 0.70);
					crownSet(14, 0.20, 0.90);
					crownSet(15, 0.20, 1.10);
					crownSet(16, 0.20, 1.30);
					crownSet(17, 0.20, 1.50);
					crownSet(18, 0.20, 1.70);
					crownSet(19, 0.20, 1.90);

					crownSet(20, 0.30, 0.00);
					crownSet(21, 0.32, 0.20);
					crownSet(22, 0.30, 0.40);
					crownSet(23, 0.32, 0.60);
					crownSet(24, 0.30, 0.80);
					crownSet(25, 0.32, 1.00);
					crownSet(26, 0.30, 1.20);
					crownSet(27, 0.32, 1.40);
					crownSet(28, 0.30, 1.60);
					crownSet(29, 0.32, 1.80);

					crownSet(30, 0.42, 0.00);
					crownSet(31, 0.42, 0.40);
					crownSet(32, 0.42, 0.80);
					crownSet(33, 0.42, 1.20);
					crownSet(34, 0.42, 1.60);
					
					ggg0.add(group0);
					ggg1.add(group1);
					loader.load( 'https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/Sphere_0217.fbx', function ( object ) {
						let material0 = new THREE.MeshStandardMaterial( {
							metalness: beta,
							roughness: alpha,
							transparent: true,
							map: sTexture
						} );
						let material1 = new THREE.MeshStandardMaterial( {
							metalness: beta,
							roughness: alpha,
							transparent: true,
							map: sTexture
						} );

						let o = object.clone();

						let main = object.children[0];
						main.material = material0;

						main = o.children[0];
						main.material = material1;

						object.scale.set(0.41, 0.41, 0.41);
						ggg0.add(object);
						scene.add(ggg0);

						o.scale.set(0.41, 0.41, 0.41);
						ggg1.add(o);
						scene.add(ggg1);

						ggg0.position.set(0, 0, 0);
						ggg1.position.set(0, 0, -50);
						ggg0.scale.set(0.1, 0.1, 0.1);
						ggg1.scale.set(0.1, 0.1, 0.1);
						for (var i = 0; i < cTotal; i++) {
							var mixer0 = new THREE.AnimationMixer(group0.children[i]);
							var action0 = mixer0.clipAction(objects.animations[0]);
							action0.play();
							mixers0.push(mixer0);
							timers0.push(0);
							aSwitch0.push(false);

							var mixer1 = new THREE.AnimationMixer(group1.children[i]);
							var action1 = mixer1.clipAction(objects.animations[0]);
							action1.play();
							mixers1.push(mixer1);
							timers1.push(0);
							aSwitch1.push(false);

							let cMaterial0 = new THREE.MeshStandardMaterial( {
								metalness: beta,
								roughness: alpha,
								transparent: true,
								opacity: 1,
								map: cTexture
							} );

							let cMaterial1 = new THREE.MeshStandardMaterial( {
								metalness: beta,
								roughness: alpha,
								transparent: true,
								opacity: 1,
								map: cTexture
							} );

							let tMaterial0 = new THREE.MeshStandardMaterial( {
								metalness: 1.0,
								roughness: 0.8,
								opacity: 0,
								transparent: true
							} );

							let tMaterial1 = new THREE.MeshStandardMaterial( {
								metalness: 1.0,
								roughness: 0.8,
								opacity: 0,
								transparent: true
							} );


							let crown = group0.children[i].children[0].children[0];
							crown.material = cMaterial0;
							crown = group1.children[i].children[0].children[0];
							crown.material = cMaterial1;

							let tweezer0 = group0.children[i].children[0].children[1].children[0];
							let tweezer1 = group1.children[i].children[0].children[1].children[0];
							for (var j = 0; j < 4; j++) {
								let tMap = tweezer0.children[j].material.map;
								tweezer0.children[j].material = tMaterial0;
								tweezer0.children[j].material.map = tMap;
							
								tMap = tweezer1.children[j].material.map;
								tweezer1.children[j].material = tMaterial1;
								tweezer1.children[j].material.map = tMap;
							}
						}
					});

					loader.load( 'https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/Sphere_split100.fbx', function ( object ) {
						object = object.children[1];
						object.scale.set(0.01, 0.01, 0.01);
						splits = object;
						for (var i = 0; i < object.children.length; i++) {
							let material = new THREE.MeshStandardMaterial( {
								metalness: beta,
								roughness: alpha,
								transparent: true,
								map: sTexture
							} );
							finishPosition.push([object.children[i].position.x, object.children[i].position.y, object.children[i].position.z]);

							object.children[i].material = material;
						}
						scene.add(object);
						object.visible = false;
					});
					loader.load( 'https://baike-med-1256891581.file.myqcloud.com/yidian/production/operation/draw_virus/ossweb-img/hand.fbx', function ( object ) {
						hand = object;
						let material = new THREE.MeshStandardMaterial( {
							metalness: beta,
							roughness: alpha,
							transparent: true,
							map: hTexture
						} );
						object.children[0].material = material;
						object.position.set(-50, 0, 0);
						scene.add(hand);
					});


				}, function (xhr) {
					if(xhr.loaded == xhr.total){
						window.setTimeout(function(){
							$('.upper-mask').fadeOut(100, function(){
								$('.cover').fadeOut(300, function(){
									$('.upper-start-count').text('3');
									$('.upper-start-count').css({'opacity':'1', 'font-size':'0px'}).animate({'opacity':'0', 'font-size':'25vw'},1000, 'easeOutCirc', function(){
										$('.upper-start-count').text('2');
										$('.upper-start-count').css({'opacity':'1', 'font-size':'0px'}).animate({'opacity': '0', 'font-size':'25vw'},1000, 'easeOutCirc', function(){
											$('.upper-start-count').text('1');
											$('.upper-start-count').css({'opacity':'1', 'font-size':'0px'}).animate({'opacity': '0', 'font-size':'25vw'},1000, 'easeOutCirc', function(){
												ready = true;
												$('.upper-count').fadeIn(100);
												$('.upper-tip').fadeOut(100);
												$('.upper-hit').fadeIn(100);
											});		
										});
									});
								});
							});
						}, 1000);
					}
				} );
				window.addEventListener( 'resize', onResize, false );

			}

			function crownSet(index, Rx, Rz){
				group0.children[index].rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), pi * Rx);
				group1.children[index].rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), pi * Rx);
				group0.children[index].rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), pi * Rz);
				group1.children[index].rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), pi * Rz);
			}


			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function onResize() {
				renderer.setSize( window.innerWidth, window.innerHeight );
				camera.aspect = ( window.innerWidth / window.innerHeight );
				camera.updateProjectionMatrix();
			}

			function animate() {
				requestAnimationFrame( animate );
				render();
			}

			function rotateAroundWorldAxis(object, axis, radians) {
			    var rotWorldMatrix = new THREE.Matrix4();
			    rotWorldMatrix.makeRotationAxis(axis.normalize(), radians);
			    rotWorldMatrix.multiply(object.matrix);                // pre-multiply
			    object.matrix = rotWorldMatrix;
			    object.rotation.setFromRotationMatrix(object.matrix);
			}


			var isUp = false;
			var isFinish = false;

			var startAnimCount = 0;

			var rC = 2; //半径扩散常数

			var isStart = false;

			var startTime;

			var count = 0;

			var virusCount = 0;

			var virusChange = false;

			var handHit = false;

			var finishCount = 0;
			var finishPosition = new Array();

			function render() {

				if (ready){
					if (!isStart){
						isStart = true;
						startTime = new Date();
					} else {
						let timer = 20000 - (new Date - startTime);
						let timeString;
						if (timer > 0){
							timeString =  '00:'+
							( Math.floor(timer / 1000) % 60 > 9? Math.floor(timer / 1000) % 60 : '0' + Math.floor(timer / 1000) % 60 ) + ':' +
							( Math.floor(timer / 10) % 100 > 9? Math.floor(timer / 10) % 100 : '0' + Math.floor(timer / 10) % 100 );
						}
						else if (!isFinish){
							timeString = '00:00:00';
							$('.upper-timer').text(timeString);
							isFinish = true;
							finishCount = new Date();
							$('.upper-count, .upper-hit').delay(1000).fadeOut(300);
							$('.wash-tip').delay(1000).fadeIn(300, function(){
								$('circle').animate({'letter-spacing':'314'},{
									duration: 3000,
									step: function(now, fx){
										$('circle').css({'stroke-dasharray':now+'% '+ (314-now) + '%'});
									}
								});
								$('.game-canvas').hide();
								window.setTimeout(function(){
									showEnding();
									$('.endFadeOut').fadeOut(1000);
								}, 3000);
							});
							$.ajax({
						       	url:'hits.php?hits='+count,
						       	type:'get',
						       	success:function(res){
						       		hitsCount(count, res);
						       	}
						   	});
						} else if ($('.upper-timer').text() != '游戏结束') {
							timeString = '游戏结束';
						}
						$('.upper-timer').text(timeString);

					}
					
					if (!isUp) {
						isUp = true;
						$('.upper').appendTo($('body'));
					}
				}

				var delta = clock.getDelta();

				for (var i = 0; i < aSwitch0.length; i++) {
					if (aSwitch0[i]) {
						timers0[i] += delta * 3;
						mixers0[i].update(delta * 3);
						if (timers0[i] < 0.3){
							if (i == aSwitch0.length - 1) {
								group0.children[i].children[0].children[0].material.opacity = (0.3 - timers0[i]) * 10 / 3;
								group0.children[i].children[0].children[1].children[0].children[0].material.opacity = (0.3 - timers0[i]) * 10 / 3;
							} else {
								group0.children[i].children[0].children[0].material.opacity = timers0[i] * 2;
								group0.children[i].children[0].children[1].children[0].children[0].material.opacity = timers0[i] * 10 / 3;
							}
						} else if (timers0[i] > 0.3 && timers0[i] <= 0.6){
							if (i == aSwitch0.length - 1) {
								group0.children[i].children[0].children[1].children[0].children[0].material.opacity = 0;
							} else {
								group0.children[i].children[0].children[0].material.opacity = (0.6 - timers0[i]) * 10 / 3;
								group0.children[i].children[0].children[1].children[0].children[0].material.opacity = (0.6 - timers0[i]) * 10 / 3;
							}
						} else if (timers0[i] > 0.6){
							if (i != aSwitch0.length - 1) {
								group0.children[i].children[0].children[0].material.opacity = 0;
							}
							group0.children[i].children[0].children[1].children[0].children[0].material.opacity = 0;
							aSwitch0[i] = false;
							mixers0[i].clipAction(objects.animations[0]).reset();
							timers0[i] = 0;
						}
					} else {
						mixers0[i].update(0);
					}
					if (aSwitch1[i]) {
						timers1[i] += delta * 4;
						mixers1[i].update(delta * 4);
						if (timers1[i] < 0.3){
							if (i == aSwitch1.length - 1) {
								group1.children[i].children[0].children[0].material.opacity = (0.3 - timers1[i]) * 10 / 3;
								group1.children[i].children[0].children[1].children[0].children[0].material.opacity = (0.3 - timers1[i]) * 10 / 3;
							} else {
								group1.children[i].children[0].children[0].material.opacity = timers1[i] * 2;
								group1.children[i].children[0].children[1].children[0].children[0].material.opacity = timers1[i] * 10 / 3;
							}
						} else if (timers1[i] > 0.3 && timers1[i] <= 0.6){
							if (i == aSwitch1.length - 1) {
								group1.children[i].children[0].children[1].children[0].children[0].material.opacity = 0;
							} else {
								group1.children[i].children[0].children[0].material.opacity = (0.6 - timers0[i]) * 10 / 3;
								group1.children[i].children[0].children[1].children[0].children[0].material.opacity = (0.6 - timers0[i]) * 10 / 3;
							}
						} else if (timers1[i] > 0.6){
							if (i != aSwitch1.length - 1) {
								group1.children[i].children[0].children[0].material.opacity = 0;
							}
							group1.children[i].children[0].children[1].children[0].children[0].material.opacity = 0;
							aSwitch1[i] = false;
							mixers1[i].clipAction(objects.animations[0]).reset();
							timers1[i] = 0;
						}
					} else {
						mixers1[i].update(0);
					}
				}
				if (virusChange){
					startAnimCount++;
					let sc = 1 - (startAnimCount - 5) / 100;
					if (virusCount % 2 == 1 && startAnimCount > 5){
						ggg1.position.set(0, 0, -50 + 5 * (startAnimCount - 5));
						ggg0.position.set(0, -5 * (startAnimCount - 5), 0);
						ggg0.scale.set(sc, sc, sc);
						if ((startAnimCount - 5) % 10 == 0){
							virusChange = false;
							startAnimCount = 0;
							ggg0.position.set(0, 0, -50);
							ggg0.scale.set(0.1, 0.1, 0.1);
							for (var i = 0; i < aSwitch0.length; i++) {
								group0.children[i].children[0].children[0].material.opacity = 1;
							}
						}
					}
					else if (virusCount % 2 == 0 && startAnimCount > 5){
						ggg0.position.set(0, 0, -50 + 5 * (startAnimCount - 5));
						ggg1.position.set(0, -5 * (startAnimCount - 5), 0);
						ggg1.scale.set(sc, sc, sc);
						if ((startAnimCount - 5) % 10 == 0){
							virusChange = false;
							startAnimCount = 0;
							ggg1.position.set(0, 0, -50);
							ggg1.scale.set(0.1, 0.1, 0.1);
							for (var i = 0; i < aSwitch1.length; i++) {
								group1.children[i].children[0].children[0].material.opacity = 1;
							}
						}
					}
				}

				let now = new Date();
				if (count > 0 && !isFinish ){
					if (shakeSpeed > 0) shakeSpeed -= delta;
					else shakeSpeed = 0;
					camera.lookAt(((new Date() % 200) < 100? ((new Date() % 200) / 250  - 2):(6 - (new Date() % 200) / 250)) * shakeSpeed / 10 , -5, 0);
					camera.position.set(0, 0, 100 + (shakeSpeed > 0.5? (shakeSpeed - 0.5):0) * 10);
				}else if (isFinish && !handHit){
					handHit = true;
					camera.lookAt(0, -5, 0);
					splits.visible = true;
					for (var i = 0; i < aSwitch0.length; i++) {
						if (group0.children[i].children[0].children[0].material.opacity <= 0)
							group0.children[i].visible = false;
						if (group1.children[i].children[0].children[0].material.opacity <= 0)
							group1.children[i].visible = false;
					}
				} else if (isFinish && now - finishCount <= 1000){
					let fc = Math.pow(Math.abs(finishCount - now + 300), 0.5) / Math.pow(300, 0.5); 
					hand.position.set(-20 - 20 * fc, 0, 0);

					fc = Math.pow((now - finishCount - 250) < 0? 0:(now - finishCount - 250), 0.7) / Math.pow(700, 0.7); 
					if (fc > 0){
						splits.scale.set(0.03, 0.03, 0.03);
						ahahahPlay();
						ggg0.children[1].visible = false;
						ggg1.children[1].visible = false;
						ggg0.position.set(0, 0, 50 * (fc));
						ggg1.position.set(0, 0, 50 * (fc));
						splits.position.set(0, 0, 50 * (fc));
					}
					let dis = (1 + fc / 0.3);
					if (virusCount % 2 == 0) {
						ggg1.visible = false;
						for (var i = 0; i < aSwitch0.length; i++) {
							group0.children[i].children[0].position.set(0, 310 * dis, 0);
							group0.children[i].children[0].children[0].material.opacity = 1 - fc;
						}
					} else {
						ggg0.visible = false;
						for (var i = 0; i < aSwitch1.length; i++) {
							group1.children[i].children[0].position.set(0, 310 * dis, 0);
							group1.children[i].children[0].children[0].material.opacity = 1 - fc;
						}
					}

					for (var i = 0; i < splits.children.length; i++) {
						splits.children[i].material.opacity = 1 - fc;
						splits.children[i].position.set(finishPosition[i][0] * dis, finishPosition[i][1] * dis, finishPosition[i][2] * dis);
					}

				}

				renderer.render( scene, camera );

			}

			var hitAudioTimer = 0;

			var virusChangeTiming = 0;

			$('.upper').on('touchstart', function(){
				if (!isFinish && ready) {
					shakeSpeed = 1;
					if (virusCount % 2 == 0) { aSwitch0[count % aSwitch0.length] = true; }
					else { aSwitch1[count % aSwitch0.length] = true; }
					count++;
					if (count % aSwitch0.length == 0) {
						virusCount++;
						virusChange = true;
						virusChangeTiming = new Date();
					}
					$('.upper-count').text( count );
					if (new Date() - hitAudioTimer > 300){
						hitAudioTimer = new Date();
						hitAudio(count);
					}
				}
			});

			$('.cover-start-btn').click(function(){
				// clickStat('startBtn');
				$(this).parent().fadeOut(200);
				init();
				animate();
				loadAudio();
			});

			function loadingIcon(){
				$('.upper-loading-icon').css({'height':'0px','opacity':'1'})
				.animate({'height':'44px'}, 150 ,'swing', function(){
					$(this).animate({'height':'40px'}, 70 ,'swing', function(){
						$(this).delay(300).animate({'opacity':'0'}, 200, function(){
							loadingIcon();
						});
					});
				});
			}

			loadingIcon();