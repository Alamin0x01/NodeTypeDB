import mongoose from 'mongoose';
import config from './app/config/index';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);

    app.listen(config.PORT, () => {
      console.log(`NodeTypeDB App listening on port ${config.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
