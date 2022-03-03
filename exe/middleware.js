const exec = (ctx, ...middleware) => {
    const run = index => {
        middleware && index < middleware.length && middleware[index](ctx, () => run(index + 1))
    }
    run(0)
}

