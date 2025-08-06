#include "p5js.h"

uint32_t canvasW, canvasH, posX, posY, radius;
int32_t velX, velY, gravity;

void setup() 
{
	canvasW = 1600;
	canvasH = 900;
	posX = 0.5*canvasW;
	posY = 0.5*canvasH;
	velX = 200;
	velY = 200;
	gravity = 1000;
	radius = 100;
	createCanvas(canvasW, canvasH);
}

void draw()
{
	float dt = deltaTime();

	velY += gravity * dt;

	uint32_t dX = posX + velX * dt;
	if (dX + radius > canvasW || dX < radius) {
		velX *= -1;
	} else {
		posX = dX;
	}

	uint32_t dY = posY + velY * dt;
	if (dY + radius > canvasH || dY < radius) {
		velY *= -1;
	} else {
		posY = dY;
	}

	background(0);
	noStroke();
	fillrgb(255, 0, 0);
	circle(posX, posY, 2*radius);
}
