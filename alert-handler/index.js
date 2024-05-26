const express = require('express');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.post('/alert', (req, res) => {
  console.log('Alert endpoint hit', req.body);

  // Handle alert to launch the container
  exec('docker run -d --name logout-container -p 3005:3000 logout-service', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);

    // Add new target to Prometheus configuration
    const targetConfig = `
- targets:
  - 'logout-container:3000'
    `;
    const targetsDir = path.resolve('/etc/prometheus/targets');
    if (!fs.existsSync(targetsDir)){
      fs.mkdirSync(targetsDir);
    }
    fs.writeFileSync(path.join(targetsDir, 'logout-container.yml'), targetConfig);
    
    // Reload Prometheus configuration
    exec('docker exec -it prometheus kill -HUP 1', (err, stdout, stderr) => {
      if (err) {
        console.error(`Error reloading Prometheus: ${err}`);
        return;
      }
      console.log('Prometheus configuration reloaded');
    });
  });

  res.status(200).send('Alert action triggered');
});

app.listen(4000, () => {
  console.log('Alert handler listening on port 4000');
});
