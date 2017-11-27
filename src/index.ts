import app from './app';

async function main() {
  const port = 3000;
  app.listen(port);
  console.info(`app running on port ${port}`);
}

main().catch((e) => {
  console.log('error detected', e);
});
