import type {Config} from 'jest';

const config: Config = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**'],
  coverageReporters: [
    'html'
  ]
};

export default config;