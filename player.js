class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velocityY = 0;
        this.jumpStrength = 15;
        this.gravity = 0.5;
        this.isJumping = false;
        this.width = 50;
        this.height = 50;
        this.sprite = new Image();
        this.sprite.src = 'path/to/player/sprite.png'; // Update with actual path
    }

    moveLeft() {
        this.x -= 5;
    }

    moveRight() {
        this.x += 5;
    }

    jump() {
        if (!this.isJumping) {
            this.velocityY = -this.jumpStrength;
            this.isJumping = true;
        }
    }

    update() {
        this.y += this.velocityY;
        this.velocityY += this.gravity;

        // Ground collision detection
        if (this.y >= canvas.height - this.height) {
            this.y = canvas.height - this.height;
            this.isJumping = false;
            this.velocityY = 0;
        }

        // Prevent player from going out of bounds
        if (this.x < 0) {
            this.x = 0;
        } else if (this.x + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        }
    }

    draw(ctx) {
        ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    }
}

// Usage
const player = new Player(100, 100);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    player.draw(ctx);
    requestAnimationFrame(gameLoop);
}

// Event listeners for controls
window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            player.moveLeft();
            break;
        case 'ArrowRight':
            player.moveRight();
            break;
        case ' ': // Space bar for jump
            player.jump();
            break;
    }
});

gameLoop();