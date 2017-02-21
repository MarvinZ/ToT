import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { ReportService } from './../services/report.service';


@Component({
  selector: 'app-generic-tool',
  templateUrl: './generic-tool.component.html',
  styleUrls: ['./generic-tool.component.css']
})
export class GenericToolComponent implements OnInit {
  


  constructor(private _reportService: ReportService,
            public toastr: ToastsManager, public vcr: ViewContainerRef) { 
               this.toastr.setRootViewContainerRef(vcr);

            }



  ngOnInit() {
  }


    showSuccess() {
        // this.toastr.options = {
        //   "closeButton": true,
        //   "debug": false,
        //   "newestOnTop": false,
        //   "progressBar": true,
        //   "positionClass": "toast-top-full-width",
        //   "preventDuplicates": false,
        //   "onclick": null,
        //   "showDuration": "300",
        //   "hideDuration": "1000",
        //   "timeOut": "5000",
        //   "extendedTimeOut": "1000",
        //   "showEasing": "swing",
        //   "hideEasing": "linear",
        //   "showMethod": "fadeIn",
        //   "hideMethod": "fadeOut"
        // } 
      // http://codeseven.github.io/toastr/demo.html
        this.toastr.success('This toast will dismiss in 2 seconds.', 'Successssssssssssssssss');
      }
    
      showError() {
        this.toastr.error('This is not good!', 'Oops!');
      }
    
      showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
      }
    
      showInfo() {
        this.toastr.info('Just some information for you.');
      }
      
      showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, {enableHTML: true});
      }



      clickme() {
        this.showSuccess();
        this.showError();
        this.showWarning();
        this.showInfo();
        this.showCustom();
    }

}
