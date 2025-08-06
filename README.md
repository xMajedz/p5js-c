# Building
you will need to have llvm clang and lld installed
```
make
```
or
```
clang --no-standard-libraries --target=wasm32 -I. -Wl,--no-entry -Wl,--allow-undefined -Wl,--export=setup -Wl,--export=draw -o src/sketch.wasm src/sketch.c
```
to run
```
python -m http.server -d src 
```

example code
```
#include "p5js.h"

void setup() 
{
	createCanvas(400, 400);
}

void draw()
{
	background(220);
}
```
