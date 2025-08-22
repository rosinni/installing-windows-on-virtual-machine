const fs = require('fs');
const path = require('path');

describe("Checking Windows 10 vm", () => {
  let vmData = [];
  let winMachine;

  beforeAll(() => {
    const reportFilePath = path.join(__dirname, '../../windows_report.txt');

    if (fs.existsSync(reportFilePath)) {
      const reportContent = fs.readFileSync(reportFilePath, 'utf8');
      
      const vmBlocks = reportContent.split('---------').filter(block => block.trim() !== '');

      vmBlocks.forEach(block => {
        const vmInfo = {};
        const lines = block.split('\n').filter(line => line.trim() !== '');
        
        lines.forEach(line => {
          const parts = line.split('=');
          if (parts.length >= 2) {
            let key = parts[0].trim();
            let value = parts.slice(1).join('=').trim();
            
            if (value.startsWith('"') && value.endsWith('"')) {
              value = value.substring(1, value.length - 1);
            }
            
            vmInfo[key] = value;
          }
        });
        if (Object.keys(vmInfo).length > 0) {
          vmData.push(vmInfo);
        }
      });
      
      winMachine = vmData.find(vm => 
        (vm.ostype && /^Windows 10/.test(vm.ostype)) ||
        (vm.name && /windows-test/i.test(vm.name))
      );

      if (!winMachine) {
        throw new Error('No Windows 10 VM found in windows_report.txt or it does not meet basic identification criteria.');
      }

    } else {
      throw new Error('windows_report.txt not found. Please run the BAT file on your local machine and upload the report.');
    }
  });

  test('The windows machine must be created with Windows 10', async () => {
    expect(winMachine).toBeDefined();
    expect(winMachine.ostype).toMatch(/^Windows 10/);
  });

  test('The windows machine must have at least 2 GB of memory', async () => {
    expect(parseInt(winMachine.memory)).toBeGreaterThanOrEqual(2048);
  });

  test('The windows machine must have at least 2 cpus', async () => {
    expect(parseInt(winMachine.cpus)).toBeGreaterThanOrEqual(2);
  });
});
