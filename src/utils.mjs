import winston from 'winston';
import {
  Site, Battery, Load, Solar, powerwallStateOfCharge,
} from './metrics.mjs';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
  ],
});

const waitFor = (millSeconds) => new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, millSeconds);
});

const retryPromiseWithExpotentialDelay = async (promise, retries) => {
  try {
    const res = await promise;
    return res;
  } catch (error) {
    if (retries < 1) {
      return Promise.reject(error);
    }
    logger.info(`retrying promise, sleeping for ${2 ** retries}`);
    await waitFor((2 ** retries) * 1000);
    return retryPromiseWithExpotentialDelay(promise, retries - 1);
  }
};

/*
 * Query all aggregated metrics
 */
const updateMetrics = async (tesla) => {
  logger.info('Scraping powerwall');
  const metrics = await retryPromiseWithExpotentialDelay(tesla.aggregates(), 3);

  [Site, Battery, Load, Solar].forEach((category) => {
    // eslint-disable-next-line array-callback-return,consistent-return
    Object.keys(category).filter((e) => { if (e !== 'toString') return e; }).forEach((metric) => {
      category[metric].set(metrics[category.toString().toLowerCase()][metric]);
    });
  });

  const soe = await retryPromiseWithExpotentialDelay(tesla.soe(), 3);
  powerwallStateOfCharge.set(soe.percentage);

  logger.info('Finished scraping powerwall');
};

export {
  updateMetrics,
  logger,
};
