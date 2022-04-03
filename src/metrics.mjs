import client from 'prom-client';

// Powerwall Capacity
const powerwallStateOfCharge = new client.Gauge({
  name: 'tesla_powerwall_state_of_charge_percentage',
  help: 'The Tesla Powerwall State of Charge',
});

// Tesla Site Metrics
const Site = {
  instant_power: new client.Gauge({
    name: 'tesla_site_instant_power',
    help: 'Instance Power',
  }),

  instant_reactive_power: new client.Gauge({
    name: 'tesla_site_instant_reactive_power',
    help: 'Instant Reactive Power',
  }),

  instant_apparent_power: new client.Gauge({
    name: 'tesla_site_instant_apparent_power',
    help: 'Instant Apparent Power',
  }),

  frequency: new client.Gauge({
    name: 'tesla_site_frequency',
    help: 'Frequency',
  }),

  energy_exported: new client.Gauge({
    name: 'tesla_site_energy_exported',
    help: 'Energy Exported',
  }),

  energy_imported: new client.Gauge({
    name: 'tesla_site_energy_imported',
    help: 'Energy Imported',
  }),

  instant_average_voltage: new client.Gauge({
    name: 'tesla_site_instant_average_voltage',
    help: 'Instance Average Voltage',
  }),

  instant_average_current: new client.Gauge({
    name: 'tesla_site_instant_average_current',
    help: 'Instance Average Current',
  }),

  instant_total_current: new client.Gauge({
    name: 'tesla_site_instant_total_current',
    help: 'Instant Total Current',
  }),

  toString: () => 'Site',
};

// Tesla Battery Metrics

const Battery = {
  instant_power: new client.Gauge({
    name: 'tesla_battery_instant_power',
    help: 'Instant Power',
  }),

  instant_reactive_power: new client.Gauge({
    name: 'tesla_battery_instant_reactive_power',
    help: 'Instant Reactive Power',
  }),

  instant_apparent_power: new client.Gauge({
    name: 'tesla_battery_instant_apparent_power',
    help: 'Instant Apparent Power',
  }),

  frequency: new client.Gauge({
    name: 'tesla_battery_frequency',
    help: 'Frequency',
  }),

  energy_exported: new client.Gauge({
    name: 'tesla_battery_energy_exported',
    help: 'Energy Exported',
  }),

  energy_imported: new client.Gauge({
    name: 'tesla_battery_energy_imported',
    help: 'Energy Imported',
  }),

  instant_average_voltage: new client.Gauge({
    name: 'tesla_battery_instant_average_voltage',
    help: 'Instant Average Voltage',
  }),

  instant_average_current: new client.Gauge({
    name: 'tesla_battery_instant_average_current',
    help: 'Instant Average Current',
  }),

  instant_total_current: new client.Gauge({
    name: 'tesla_battery_instant_total_current',
    help: 'Instant Total Current',
  }),

  toString: () => 'Battery',
};

// Tesla Load Metrics
const Load = {
  instant_power: new client.Gauge({
    name: 'tesla_load_instant_power',
    help: 'Instant Power',
  }),

  instant_reactive_power: new client.Gauge({
    name: 'tesla_load_instant_reactive_power',
    help: 'Instant Reactive Power',
  }),

  instant_apparent_power: new client.Gauge({
    name: 'tesla_load_instant_apparent_power',
    help: 'Instant Apparent Power',
  }),

  frequency: new client.Gauge({
    name: 'tesla_load_frequency',
    help: 'Frequency',
  }),

  energy_exported: new client.Gauge({
    name: 'tesla_load_energy_exported',
    help: 'Energy Exported',
  }),

  energy_imported: new client.Gauge({
    name: 'tesla_load_energy_imported',
    help: 'Energy Imported',
  }),

  instant_average_voltage: new client.Gauge({
    name: 'tesla_load_instant_average_voltage',
    help: 'Instant Average Voltage',
  }),

  instant_average_current: new client.Gauge({
    name: 'tesla_load_instant_average_current',
    help: 'Instant Average Current',
  }),

  instant_total_current: new client.Gauge({
    name: 'tesla_load_instant_total_current',
    help: 'Instant Total Current',
  }),

  toString: () => 'Load',
};

// Tesla Solar Metrics
const Solar = {
  instant_power: new client.Gauge({
    name: 'tesla_solar_instant_power',
    help: 'Instant Power',
  }),

  instant_reactive_power: new client.Gauge({
    name: 'tesla_solar_instant_reactive_power',
    help: 'Instant Reactive Power',
  }),

  instant_apparent_power: new client.Gauge({
    name: 'tesla_solar_instant_apparent_power',
    help: 'Instant Apparent Power',
  }),

  frequency: new client.Gauge({
    name: 'tesla_solar_frequency',
    help: 'Frequency',
  }),

  energy_imported: new client.Gauge({
    name: 'tesla_solar_energy_imported',
    help: 'Energy Imported',
  }),

  instant_average_voltage: new client.Gauge({
    name: 'tesla_solar_instant_average_voltage',
    help: 'Instant Average Voltage',
  }),

  instant_average_current: new client.Gauge({
    name: 'tesla_solar_instant_average_current',
    help: 'Instant Average Current',
  }),

  instant_total_current: new client.Gauge({
    name: 'tesla_solar_instant_total_current',
    help: 'Instant Total Current',
  }),

  toString: () => 'Solar',
};

export {
  Site,
  Battery,
  Load,
  Solar,
  powerwallStateOfCharge,
};
