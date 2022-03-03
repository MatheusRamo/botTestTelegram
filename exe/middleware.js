const exec = (ctx, ...middleware) => {
    const run = index => {
        middleware && index < middleware.length && middleware[index](ctx, () => run(index + 1))
    }
    run(0)
}

const midd1 = (ctx, next) => {
    ctx.info1 = "info1"
    next()
}

const midd2 = (ctx, next)=>{
    ctx.info2 = "info2"
    next()
}

const midd3 = ctx => ctx.info3 = "info3"


const ctx = {}
exec(ctx, midd1, midd2, midd3)

console.log(ctx)