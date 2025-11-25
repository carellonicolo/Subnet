import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import type { SubnetInfo, VLSMSubnet } from './subnet';

/**
 * Export Subnet Calculator results to PDF
 */
export function exportSubnetToPDF(subnet: SubnetInfo) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235); // Blue
  doc.text('Subnet Calculator - Risultati', 14, 20);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generato il ${new Date().toLocaleString('it-IT')}`, 14, 27);

  // Main Info
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text('Informazioni Subnet', 14, 40);

  doc.setFontSize(10);
  let y = 48;

  const mainInfo = [
    ['Indirizzo IP', subnet.ipAddress],
    ['Notazione CIDR', `/${subnet.cidr}`],
    ['Classe IP', subnet.ipClass],
    ['Tipo IP', subnet.ipType],
    ['Host Totali', subnet.totalHosts.toLocaleString()],
    ['Host Utilizzabili', subnet.usableHosts.toLocaleString()],
  ];

  mainInfo.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${label}:`, 14, y);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 80, y);
    y += 7;
  });

  // Detailed Table
  y += 8;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Dettagli Completi', 14, y);
  y += 8;

  autoTable(doc, {
    startY: y,
    head: [['Parametro', 'Valore Decimale', 'Valore Binario']],
    body: [
      ['Subnet Mask', subnet.subnetMask, subnet.subnetMaskBinary],
      ['Wildcard Mask', subnet.wildcardMask, '-'],
      ['Network Address', subnet.networkAddress, subnet.networkAddressBinary],
      ['First Usable IP', subnet.firstUsableIP, '-'],
      ['Last Usable IP', subnet.lastUsableIP, '-'],
      ['Broadcast Address', subnet.broadcastAddress, subnet.broadcastAddressBinary],
    ],
    theme: 'grid',
    headStyles: {
      fillColor: [37, 99, 235],
      textColor: 255,
      fontSize: 10,
      fontStyle: 'bold',
    },
    bodyStyles: {
      fontSize: 9,
      font: 'courier',
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
  });

  // Footer
  const finalY = (doc as any).lastAutoTable.finalY || y + 50;
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  doc.text('Subnet Calculator by IPv4 Subnetting Tool', 14, finalY + 15);
  doc.text('https://subnet-calculator.netlify.app', 14, finalY + 20);

  // Save
  doc.save(`subnet_${subnet.ipAddress.replace(/\./g, '_')}_${subnet.cidr}.pdf`);
}

/**
 * Export VLSM results to PDF
 */
export function exportVLSMToPDF(
  networkIP: string,
  networkCIDR: number,
  subnets: VLSMSubnet[]
) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235);
  doc.text('VLSM Calculator - Risultati', 14, 20);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Rete: ${networkIP}/${networkCIDR}`, 14, 27);
  doc.text(`Generato il ${new Date().toLocaleString('it-IT')}`, 14, 32);

  // Summary
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`Subnet Allocate: ${subnets.length}`, 14, 45);

  // Subnets Table
  const tableData = subnets.map((subnet) => [
    subnet.name,
    `${subnet.requiredHosts}`,
    `${subnet.allocatedHosts}`,
    `/${subnet.cidr}`,
    subnet.subnetMask,
    subnet.networkAddress,
    `${subnet.firstUsableIP} - ${subnet.lastUsableIP}`,
    subnet.broadcastAddress,
  ]);

  autoTable(doc, {
    startY: 52,
    head: [
      [
        'Nome',
        'Hosts\nRichiesti',
        'Hosts\nAllocati',
        'CIDR',
        'Subnet Mask',
        'Network',
        'Range IP',
        'Broadcast',
      ],
    ],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [37, 99, 235],
      textColor: 255,
      fontSize: 8,
      fontStyle: 'bold',
      halign: 'center',
    },
    bodyStyles: {
      fontSize: 7,
      font: 'courier',
    },
    columnStyles: {
      0: { fontStyle: 'bold' },
      1: { halign: 'center' },
      2: { halign: 'center' },
      3: { halign: 'center' },
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    margin: { left: 8, right: 8 },
  });

  // Detailed breakdown for each subnet
  let currentY = (doc as any).lastAutoTable.finalY + 15;

  subnets.forEach((subnet, index) => {
    // Add new page if needed
    if (currentY > 250) {
      doc.addPage();
      currentY = 20;
    }

    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${subnet.name}`, 14, currentY);
    currentY += 7;

    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');

    const details = [
      `Network: ${subnet.networkAddress}/${subnet.cidr}`,
      `Subnet Mask: ${subnet.subnetMask}`,
      `Range: ${subnet.firstUsableIP} - ${subnet.lastUsableIP}`,
      `Broadcast: ${subnet.broadcastAddress}`,
      `Hosts: ${subnet.allocatedHosts} (richiesti: ${subnet.requiredHosts})`,
    ];

    details.forEach((detail) => {
      doc.text(detail, 20, currentY);
      currentY += 5;
    });

    currentY += 5;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(150, 150, 150);
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.text(
      `Pagina ${i} di ${pageCount}`,
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );
    doc.text('Subnet Calculator by IPv4 Subnetting Tool', 14, doc.internal.pageSize.height - 10);
  }

  // Save
  doc.save(`vlsm_${networkIP.replace(/\./g, '_')}_${networkCIDR}.pdf`);
}

/**
 * Export Subnet Visualizer results to PDF
 */
export function exportSubnetVisualizerToPDF(
  networkIP: string,
  originalCIDR: number,
  newCIDR: number,
  subnets: SubnetInfo[]
) {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.setTextColor(37, 99, 235);
  doc.text('Subnet Visualizer - Risultati', 14, 20);

  // Subtitle
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Rete: ${networkIP}/${originalCIDR} → /${newCIDR}`, 14, 27);
  doc.text(`Subnet Generate: ${subnets.length}`, 14, 32);
  doc.text(`Generato il ${new Date().toLocaleString('it-IT')}`, 14, 37);

  // Statistics
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('Statistiche', 14, 48);

  doc.setFontSize(10);
  doc.text(`• Host per subnet: ${subnets[0]?.usableHosts || 0}`, 20, 55);
  doc.text(`• Indirizzi totali per subnet: ${subnets[0]?.totalHosts || 0}`, 20, 61);
  doc.text(`• Subnet mask: ${subnets[0]?.subnetMask || '-'}`, 20, 67);

  // Subnets Table
  const tableData = subnets.map((subnet, index) => [
    `${index + 1}`,
    subnet.networkAddress,
    `/${subnet.cidr}`,
    subnet.firstUsableIP,
    subnet.lastUsableIP,
    subnet.broadcastAddress,
    `${subnet.usableHosts}`,
  ]);

  autoTable(doc, {
    startY: 75,
    head: [['#', 'Network', 'CIDR', 'First IP', 'Last IP', 'Broadcast', 'Hosts']],
    body: tableData,
    theme: 'grid',
    headStyles: {
      fillColor: [37, 99, 235],
      textColor: 255,
      fontSize: 9,
      fontStyle: 'bold',
      halign: 'center',
    },
    bodyStyles: {
      fontSize: 8,
      font: 'courier',
    },
    columnStyles: {
      0: { halign: 'center', cellWidth: 10 },
      2: { halign: 'center', cellWidth: 15 },
      6: { halign: 'right', cellWidth: 15 },
    },
    alternateRowStyles: {
      fillColor: [245, 247, 250],
    },
    margin: { left: 8, right: 8 },
  });

  // Footer
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(
      `Pagina ${i} di ${pageCount}`,
      doc.internal.pageSize.width / 2,
      doc.internal.pageSize.height - 10,
      { align: 'center' }
    );
    doc.text('Subnet Calculator by IPv4 Subnetting Tool', 14, doc.internal.pageSize.height - 10);
  }

  // Save
  doc.save(`visualizer_${networkIP.replace(/\./g, '_')}_${originalCIDR}_to_${newCIDR}.pdf`);
}
