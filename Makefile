LDFLAGS=-Wl,--export=__heap_base -Wl,--export-table -Wl,--entry=main

src/sketch.wasm: src/sketch.c
	clang --target=wasm32 -nostdlib -I. $(LDFLAGS) -o $@ $^
