import * as Koa from 'koa';
import * as Router from 'koa-router';

const app = new Koa();

// global error handler
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.error('Error detected', err);

    ctx.status = err.status || 500;
    ctx.body = {
      error: err.message,
    };
  }
});

const router = new Router();

router.get('/ping', async (ctx) => {
  ctx.body = 'pong';
});

app.use(router.routes());

export default app;
