class Heart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 30; // Width of heart
        this.height = 30; // Height of heart
        this.collected = false; // Status of collection
    }

    draw(ctx) {
        if (!this.collected) {
            ctx.beginPath();
            ctx.fillStyle = 'red';
            ctx.arc(this.x, this.y, 15, 0, Math.PI * 2, true); // Draw heart
            ctx.fill();
            ctx.closePath();
        }
    }

    update() {
        // Example physics to move downwards
        this.y += 2;
        if (this.y > canvas.height) {
            this.reset();
        }
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = 0;
        this.collected = false;
    }

    checkCollision(playerX, playerY) {
        if (this.collected) return false;
        const distance = Math.sqrt((playerX - this.x) ** 2 + (playerY - this.y) ** 2);
        if (distance < this.width) {
            this.collected = true;
            return true;
        }
        return false;
    }
}

class Game {
    constructor() {
        this.hearts = [];
        this.score = 0;
        this.playerX = canvas.width / 2; // Example starting position for player
        this.playerY = canvas.height - 20; // Example position for player
    }

    addHeart() {
        const heart = new Heart(Math.random() * canvas.width, 0);
        this.hearts.push(heart);
    }

    update() {
        for (const heart of this.hearts) {
            heart.update();
            if (heart.checkCollision(this.playerX, this.playerY)) {
                this.score++;
                // Optionally reset heart position or remove it from array
            }
        }
    }

    draw(ctx) {
        for (const heart of this.hearts) {
            heart.draw(ctx);
        }
        // Draw score
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.fillText(`Score: ${this.score}`, 10, 20);
    }
}