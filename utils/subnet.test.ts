/**
 * Test file for subnet utilities
 * Run with: npx ts-node utils/subnet.test.ts
 */

import {
  isValidIPv4,
  isValidCIDR,
  ipToInt,
  intToIp,
  ipToBinary,
  cidrToSubnetMask,
  subnetMaskToCIDR,
  calculateSubnet,
  calculateVLSM,
  calculateCIDRForHosts,
  generateSubnets,
} from './subnet';

console.log('🧪 Testing Subnet Calculator Utilities\n');

// Test 1: IP Validation
console.log('Test 1: IP Validation');
console.log('✓ 192.168.1.1:', isValidIPv4('192.168.1.1')); // true
console.log('✓ 256.1.1.1:', isValidIPv4('256.1.1.1')); // false
console.log('✓ 192.168.1:', isValidIPv4('192.168.1')); // false
console.log('');

// Test 2: CIDR Validation
console.log('Test 2: CIDR Validation');
console.log('✓ 24:', isValidCIDR(24)); // true
console.log('✓ 33:', isValidCIDR(33)); // false
console.log('✓ -1:', isValidCIDR(-1)); // false
console.log('');

// Test 3: IP to Integer and back
console.log('Test 3: IP Conversion');
const testIP = '192.168.1.100';
const ipInt = ipToInt(testIP);
console.log(`✓ ${testIP} -> ${ipInt} -> ${intToIp(ipInt)}`);
console.log('');

// Test 4: IP to Binary
console.log('Test 4: Binary Conversion');
console.log(`✓ ${testIP} -> ${ipToBinary(testIP)}`);
console.log('');

// Test 5: CIDR to Subnet Mask
console.log('Test 5: CIDR to Subnet Mask');
console.log('✓ /24 =', cidrToSubnetMask(24)); // 255.255.255.0
console.log('✓ /16 =', cidrToSubnetMask(16)); // 255.255.0.0
console.log('✓ /28 =', cidrToSubnetMask(28)); // 255.255.255.240
console.log('');

// Test 6: Subnet Mask to CIDR
console.log('Test 6: Subnet Mask to CIDR');
console.log('✓ 255.255.255.0 =', subnetMaskToCIDR('255.255.255.0')); // 24
console.log('✓ 255.255.0.0 =', subnetMaskToCIDR('255.255.0.0')); // 16
console.log('');

// Test 7: Full Subnet Calculation
console.log('Test 7: Full Subnet Calculation');
const subnet = calculateSubnet('192.168.1.100', 24);
if (subnet) {
  console.log('✓ IP Address:', subnet.ipAddress);
  console.log('✓ CIDR:', subnet.cidr);
  console.log('✓ Subnet Mask:', subnet.subnetMask);
  console.log('✓ Network Address:', subnet.networkAddress);
  console.log('✓ Broadcast Address:', subnet.broadcastAddress);
  console.log('✓ First Usable IP:', subnet.firstUsableIP);
  console.log('✓ Last Usable IP:', subnet.lastUsableIP);
  console.log('✓ Total Hosts:', subnet.totalHosts);
  console.log('✓ Usable Hosts:', subnet.usableHosts);
  console.log('✓ IP Class:', subnet.ipClass);
  console.log('✓ IP Type:', subnet.ipType);
}
console.log('');

// Test 8: CIDR for Hosts
console.log('Test 8: Calculate CIDR for Required Hosts');
console.log('✓ 50 hosts need CIDR:', calculateCIDRForHosts(50)); // /26 (62 hosts)
console.log('✓ 100 hosts need CIDR:', calculateCIDRForHosts(100)); // /25 (126 hosts)
console.log('✓ 500 hosts need CIDR:', calculateCIDRForHosts(500)); // /23 (510 hosts)
console.log('');

// Test 9: VLSM Calculation
console.log('Test 9: VLSM Calculation');
const vlsmSubnets = calculateVLSM('192.168.1.0', 24, [
  { name: 'Sales', hosts: 50 },
  { name: 'IT', hosts: 25 },
  { name: 'Management', hosts: 10 },
]);

if (vlsmSubnets) {
  vlsmSubnets.forEach(subnet => {
    console.log(`✓ ${subnet.name}:`);
    console.log(`  - Required: ${subnet.requiredHosts} hosts`);
    console.log(`  - Allocated: ${subnet.allocatedHosts} hosts (/${subnet.cidr})`);
    console.log(`  - Network: ${subnet.networkAddress}`);
    console.log(`  - Range: ${subnet.firstUsableIP} - ${subnet.lastUsableIP}`);
    console.log(`  - Broadcast: ${subnet.broadcastAddress}`);
  });
}
console.log('');

// Test 10: Generate Subnets
console.log('Test 10: Generate Subnets (splitting /24 into /26)');
const generatedSubnets = generateSubnets('192.168.1.0', 24, 26);
console.log(`✓ Generated ${generatedSubnets.length} subnets:`);
generatedSubnets.forEach((subnet, idx) => {
  console.log(`  ${idx + 1}. ${subnet.networkAddress}/${subnet.cidr} (${subnet.usableHosts} hosts)`);
});

console.log('\n✅ All tests completed!');
