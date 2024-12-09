//////////////////////////////////
///////////////////////////////////
	//ANIMACIÓN ESTELAR CANVAS//
/////////////////////////////////////////
///////////////////////////////////

	var canvasAni = document.getElementById("canvas_galactico");
	var c = canvasAni.getContext('2d');
	
	var body = document.body,html = document.documentElement,
		 docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

		//Creamos una instancia para el observer
		const resizeObserver = new ResizeObserver(entries =>changeOnHeight());
		//Empezamos a observar un nodo del DOM en este caso body
		resizeObserver.observe(document.body);
		
		//Función para ir ajustando la animación al tamaño del documento
		function changeOnHeight(){
			docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
						html.clientHeight, html.scrollHeight, html.offsetHeight );

			canvasAni.width = window.innerWidth;
			canvasAni.height = docHeight;
			
			lightParticles = [];
			initializeParticles();
		}

		var particleCount = 750;
		var mouse = {
			x: window.innerWidth / 2,
			y: window.innerHeight / 2 
		};

		window.addEventListener("mousemove", function(event) {
			mouse.x = event.clientX - canvasAni.width / 2;
			mouse.y = event.clientY - canvasAni.height / 2;
		});

		window.addEventListener("resize", function() {
			canvasAni.width = window.innerWidth;	
			canvasAni.height = window.innerHeight;

			lightParticles = [];
			initializeParticles();
		});


		function LightParticle(x, y, radius, color) {
			this.x = x;
			this.y = y;
			this.radius = radius;
			this.color = color;

			this.update = function() {

				this.draw();
			};

			this.draw = function() {
				c.save();
				c.beginPath();
				c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
				c.shadowColor = this.color;
				c.shadowBlur = 15;
				c.shadowOffsetX = 0;
				c.shadowOffsetY = 0;
				c.fillStyle = this.color;
				c.fill();
				c.closePath();
				c.restore();
			};
		}

		var lightParticles = [];

		var timer = 0;
		var opacity = 1;
		var speed = 0.0005;
		var colorsAnimation = [
			"#0952BD",
			"#A5BFF0",
			"#118CD6",
			"#1AAEE8",
			"#F2E8C9"
		];

		var initializeParticles;

		(initializeParticles = function() {
			for (var i = 0; i < particleCount; i++) {

				var randomColorIndex = Math.floor(Math.random() * 6);
				var randomRadius = Math.random() * 2;

				// Ensure particles are spawned past screen width and height so
				// there will be no missing stars when rotating canvas
				var x = (Math.random() * (canvasAni.width + 200)) - (canvasAni.width + 200) / 2;
				var y = (Math.random() * (canvasAni.width + 200)) - (canvasAni.width + 200) / 2;
				lightParticles.push(new LightParticle(x, y, randomRadius, colorsAnimation[randomColorIndex]));
			}
		})();

		function animate() {
			window.requestAnimationFrame(animate);

			c.save();
			if (isAnimating === true) {

				// Ease into the new opacity
				var desiredOpacity = 0.01;
				opacity += (desiredOpacity - opacity) * 0.03;
				c.fillStyle = "rgba(18, 18, 18,"+ opacity +")";
                // Ease into the new speed
				var desiredSpeed = 0.012;
                if (navigator.userAgent.indexOf("Firefox") != -1 ){
                    speed += (desiredSpeed - speed) * 1;
                }else{
                    speed += (desiredSpeed - speed) * 0.01;
                }
				timer += speed;

			} else {

				// Ease back to the original opacity
				var originalOpacity = 1;
				opacity += (originalOpacity - opacity) * 0.01;
				c.fillStyle = "rgba(18, 18, 18, " + opacity + ")";

				// Ease back to the original speed
				var originalSpeed = 0.001;
				speed += (originalSpeed - speed) * 0.01;
				timer += speed;


			}

			c.fillRect(0, 0, canvasAni.width, canvasAni.height);
			c.translate(canvasAni.width / 2, canvasAni.height/2 );
			c.rotate(timer);

			for (var i = 0; i < lightParticles.length; i++) {
				lightParticles[i].update();
			}

			c.restore();

			
		}
        var isAnimating = false;
        function animationChange(){
            isAnimating = true;
            document.getElementById("son3").style.zIndex = 2;
            new Audio('../sounds/turbo.wav').play();
      
        }
        function stopAnimation(){
            isAnimating = false;
            document.getElementById("son3").style.zIndex = -1;
        }

		/*var isMouseDown = false;

		window.addEventListener("mousedown", function() {
			isMouseDown = true;	
            
		});
		

		window.addEventListener("mouseup", function() {
			isMouseDown = false;	
		});*/
		//document.addEventListener("DOMContentLoaded",changeOnHeight);
    	animate();
        