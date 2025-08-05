LD_FLAGS=-Wl,--no-entry -Wl,--allow-undefined -Wl,--export=setup -Wl,--export=draw

src/sketch.wasm: src/sketch.c
	clang --no-standard-libraries --target=wasm32 -I. $(LD_FLAGS) -o $@ $^
