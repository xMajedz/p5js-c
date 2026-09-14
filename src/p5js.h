#define P5_IMPORT(name) __attribute__((import_module("p5"), import_name(name)))

#include <stdint.h>

#define P2D 0
#define WEBGL 1

typedef struct {
    void (*setup)();
    void (*draw)();
} p5Instance;

typedef void (*p5Sketch)(p5Instance*);

#define Instance p5Instance

P5_IMPORT("boot")
void p5Boot(p5Sketch sketch);

typedef float f32_t;
typedef double f64_t;

P5_IMPORT("createCanvas")
void createCanvas(uint32_t width, uint32_t height, uint32_t context);

P5_IMPORT("background")
void background(uint32_t color);

P5_IMPORT("nofill")
void noFill();

P5_IMPORT("noStroke")
void noStroke();

P5_IMPORT("fill")
void fill(uint32_t color);

P5_IMPORT("fillrgb")
void fillrgb(uint32_t r, uint32_t g, uint32_t b);

P5_IMPORT("stroke")
void stroke();

P5_IMPORT("circle")
void circle(uint32_t x, uint32_t y, uint32_t d);

P5_IMPORT("rect")
void rect(uint32_t x, uint32_t y, uint32_t w, uint32_t h);

P5_IMPORT("deltaTime")
f64_t deltaTime();
