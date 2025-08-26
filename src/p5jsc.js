class p5jsc
{
	instance;

	exports;

	sketch(pInst)
	{
		pInst.preload = this.exports.preload
		pInst.setup = this.exports.setup
		pInst.draw = this.exports.draw

		this.instance = pInst
	}

	env(env)
	{
		return new Proxy(env, {
			get(target, prop, receiver)
			{
            			if (env[prop] !== undefined) return env[prop].bind(env)
  			}
		})
	}

	async start()
	{
		const {instance} = await WebAssembly.instantiateStreaming(fetch("./sketch.wasm"), { env: this.env(this) });
		this.exports = instance.exports
		new p5(this.sketch.bind(this))
	}

	createCanvas(width, height, context)
	{
		this.instance.createCanvas(width, height, context ? "webgl" : "p2d")
	}

	background(color)
	{
		this.instance.background(color)
	}

	noStroke()
	{
		this.instance.noStroke()
	}

	fill(color)
	{
		this.instance.fill(color)
	}

	fillrgb(r, g, b)
	{
		this.instance.fill(r, g, b)
	}

	circle(x, y, d)
	{
		this.instance.circle(x, y, d)
	}

	deltaTime()
	{
		return this.instance.deltaTime * 0.001
	}
}
