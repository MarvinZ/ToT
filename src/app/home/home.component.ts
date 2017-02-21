import { Component, ViewContainerRef, OnInit } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { Router, ActivatedRoute } from '@angular/router';
import { ITool } from './../models/tool';






@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends Localization implements OnInit {
     title = 'app works!';
     today: number;
    pi: number;
    value: number;
       errorMessage: string;



     myTools: ITool[];

  
  public  test(): void {
    alert('test');
  }

      constructor(public toastr: ToastsManager, public vcr: ViewContainerRef, public locale: LocaleService, public translation: TranslationService,
      private _router: Router) {
        super(locale, translation);
         this.today = Date.now();
        this.pi = 3.14159;
        this.value = Math.round(Math.random() * 1000000) / 100;
         // Use with angular v2.2 or above
         this.toastr.setRootViewContainerRef(vcr);
      }
      
      showSuccess() {
        this.toastr.options = {
          "closeButton": true,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-full-width",
          "preventDuplicates": false,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        } 
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


    ngOnInit() {
            this.myTools = [];
        
        this.myTools.push(new ITool (1,'Clone Odds by Sports','generic'));
        this.myTools.push(new ITool (2,'Fix All Accounts','generic'));
        this.myTools.push(new ITool (3,'Clone Profile Tracks','generic'));
        this.myTools.push(new ITool (4,'Copy Local Flag Message','generic'));
        this.myTools.push(new ITool (1,'Clone Odds by Sports','generic'));
        this.myTools.push(new ITool (2,'Fix All Accounts','generic'));
        this.myTools.push(new ITool (3,'Clone Profile Tracks','generic'));
        this.myTools.push(new ITool (4,'Copy Local Flag Message','generic'));
        this.myTools.push(new ITool (1,'Clone Odds by Sports','generic'));
        this.myTools.push(new ITool (2,'Fix All Accounts','generic'));
        this.myTools.push(new ITool (3,'Clone Profile Tracks','generic'));
        this.myTools.push(new ITool (4,'Copy Local Flag Message','generic'));

   }

      goToLink (link: string) {
      this._router.navigate(['/'+link]);
    }

//     clickme() {

// console.log(this.myTools);
//     }
    



      
  }
