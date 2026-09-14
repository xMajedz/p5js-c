class p5jsc
{
    static instance = null;

    static exports = null;

    static setup = () => new Proxy(new p5jsc, {
	get: (target, prop) => p5jsc[prop],
    });

    static async run(path)
    {
	const {instance} = await WebAssembly.instantiateStreaming(fetch(path), { p5: p5jsc.setup() });

	p5jsc.exports = instance.exports;

	p5jsc.exports.main();
    }

    static sketch(p5Inst)
    {
	p5Inst.setup = this.setup;
	p5Inst.draw  = this.draw;

	p5jsc.instance = p5Inst;
    }

    static boot(sketch)
    {
	const instancePointer = p5jsc.exports.__heap_base;

	const function_table = p5jsc.exports.__indirect_function_table;

	function_table.get(sketch)(instancePointer);

	const functions = new Uint32Array(p5jsc.exports.memory.buffer, instancePointer, 4);

	const [setup, draw] = functions;

	new p5(p5jsc.sketch.bind({
	    setup: function_table.get(setup),
	    draw: function_table.get(draw)
	}));
    }

    static createCanvas(width, height, context)
    {
	p5jsc.instance.createCanvas(width, height, context ? "webgl" : "p2d")
    }

    static background(color)
    {
	p5jsc.instance.background(color)
    }

    static noStroke()
    {
	p5jsc.instance.noStroke()
    }

    static fill(color)
    {
	p5jsc.instance.fill(color)
    }

    static fillrgb(r, g, b)
    {
	p5jsc.instance.fill(r, g, b)
    }

    static circle(x, y, d)
    {
	p5jsc.instance.circle(x, y, d)
    }

    static deltaTime = () => p5jsc.instance.deltaTime * 0.001;
}
