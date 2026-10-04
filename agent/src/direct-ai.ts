type RunOptions = { gateway?: unknown } & Record<string, unknown>;

export function directWorkersAi(binding: Ai): Ai {
	return new Proxy(binding, {
		get(target, property, receiver) {
			if (property !== "run") return Reflect.get(target, property, receiver);
			return (model: string, input: unknown, options?: RunOptions) => {
				const { gateway: _gateway, ...direct } = options ?? {};
				return target.run(model as never, input as never, direct as never);
			};
		},
	});
}
