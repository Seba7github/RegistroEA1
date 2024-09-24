import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-qrreader',
  templateUrl: './qrreader.page.html',
  styleUrls: ['./qrreader.page.scss'],
})
export class QRReaderPage {
  scannedData: any;

  constructor(private barcodeScanner: BarcodeScanner) {}

  scanQRCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedData = barcodeData;
      console.log('Scanned data: ', this.scannedData);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}

