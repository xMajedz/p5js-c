#include <stdint.h>

void createCanvas(uint32_t width, uint32_t height);
void background(uint32_t color);
void noFill();
void noStroke();

void fill(uint32_t color);
void fillrgb(uint32_t r, uint32_t g, uint32_t b);

void stroke();
void circle(uint32_t x, uint32_t y, uint32_t d);

float deltaTime();
