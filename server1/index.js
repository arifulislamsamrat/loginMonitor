const express = require('express');
const promClient = require('prom-client');

const app = express();
const register = new promClient.Registry();

// Create a Counter metric
const loginCounter = new promClient.Counter({
  name: 'login_requests_total',
  help: 'Total number of login requests',
});

// Register the metric
register.registerMetric(loginCounter);

// Collect default metrics
promClient.collectDefaultMetrics({ register });

app.get('/login', (req, res) => {
  loginCounter.inc();
  res.send('Login endpoint hit!');
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
