import winston from 'winston';
import {
  Site, Battery, Load, Solar,
} from './metrics.mjs';

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.Console(),
  ],
});

/*
 * Query all aggregated metrics
 */
const updateMetrics = async (tesla) => {
  logger.info('Scraping powerwall');
  const metrics = await tesla.aggregates();

  [Site, Battery, Load, Solar].forEach((category) => {
    // eslint-disable-next-line array-callback-return,consistent-return
    Object.keys(category).filter((e) => { if (e !== 'toString') return e; }).forEach((metric) => {
      category[metric].set(metrics[category.toString().toLowerCase()][metric]);
    });
  });
  logger.info('Finished scraping powerwall');
};

export {
  updateMetrics,
  logger,
};
