// world.js for 3D Valentine's Game Environment

// Set up the scene
gl.clearColor(1, 1, 1, 1); // White background
let scene = new THREE.Scene();

// Set up the camera
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Set up the renderer
let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create terrain
let geometry = new THREE.PlaneGeometry(100, 100, 32);
let material = new THREE.MeshBasicMaterial({color: 0x8B4513, side: THREE.DoubleSide}); // Brown color for ground
let terrain = new THREE.Mesh(geometry, material);
terrain.rotation.x = - Math.PI / 2;
scene.add(terrain);

// Add decorative objects (hearts)
let heartGeometry = new THREE.Shape();
heartGeometry.moveTo(0, 0);
heartGeometry.bezierCurveTo(0, 0.6, 0.6, 0.6, 0.6, 0);
heartGeometry.bezierCurveTo(0.6, -0.6, 0, -0.6, 0, -1);
let heartMaterial = new THREE.MeshBasicMaterial({color: 0xff0055});
let heart = new THREE.Mesh(heartGeometry, heartMaterial);
heart.position.set(0, 1, 0);
scene.add(heart);

// Add lighting
let ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
scene.add(ambientLight);

let directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// Animation loop
the animate = function () {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};

animate();