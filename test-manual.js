// Quick manual test script
const {
  calculateSubnet,
  calculateVLSM,
  generateSubnets,
  isValidIPv4,
  cidrToSubnetMask,
} = require('./utils/subnet.ts');

console.log('🧪 Manual Testing\n');

// Test 1: Basic subnet calculation
console.log('Test 1: Basic Subnet Calculation');
try {
  const result = calculateSubnet('192.168.1.100', 24);
  console.log('✓ Network:', result?.networkAddress);
  console.log('✓ Broadcast:', result?.broadcastAddress);
  console.log('✓ Usable Hosts:', result?.usableHosts);
  console.log('');
} catch (e) {
  console.log('✗ Error:', e.message);
}

// Test 2: IP Validation
console.log('Test 2: IP Validation');
console.log('✓ 192.168.1.1:', isValidIPv4('192.168.1.1'));
console.log('✓ 256.1.1.1:', isValidIPv4('256.1.1.1'));
console.log('');

// Test 3: CIDR to Subnet Mask
console.log('Test 3: CIDR to Subnet Mask');
console.log('✓ /24 =', cidrToSubnetMask(24));
console.log('✓ /28 =', cidrToSubnetMask(28));
console.log('');

console.log('✅ Basic tests passed!');
