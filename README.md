# Building
you will need to have llvm clang and lld installed
```
make
```
or
```
clang --target=wasm32 -nostdlib -Wl,--export=__heap_base -Wl,--export-table -Wl,--entry=main -o src/sketch.wasm src/sketch.c
```
to run
```
npx http-server
or
python -m http.server
```

example code
```c
#include "p5js.h"

void sketch(Instance* instance);

int main()
{
    p5Boot(sketch);
    return 0;
}

void setup() 
{
    createCanvas(400, 400, P2D);
}

void draw()
{
    background(220);
}

void sketch(Instance* instance)
{
    instance->setup = setup;
    instance->draw  = draw;
}
```
