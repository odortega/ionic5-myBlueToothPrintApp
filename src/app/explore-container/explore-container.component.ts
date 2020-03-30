import { Component, OnInit, Input } from '@angular/core';
import { PrintService } from '../service/print.service';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  bluetoothList: any = [];
  selectedPrinter: any;
  constructor(private print: PrintService) { }
  //This will list all of your bluetooth devices
  listPrinter() {
    this.print.searchBluetoothPrinter()
      .then(resp => {

        //List of bluetooth device list
        this.bluetoothList = resp;

        console.log('test debug ... Gloria a ti Señor Jesús');

      });
  }
  //This will store selected bluetooth device mac address
  selectPrinter(macAddress) {
    //Selected printer macAddress stored here
    this.selectedPrinter = macAddress;
  }

  //This will print
  printStuff() {
    //The text that you want to print
    var myText = "Hello hello hello \n\n\n This is a test \n\n\n";
    this.print.sendToBluetoothPrinter(this.selectedPrinter, myText);
  }

  ngOnInit() { }

}
