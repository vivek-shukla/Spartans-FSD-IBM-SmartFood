import { Component, OnInit } from '@angular/core';
import { NgXCreditCardsModule } from 'ngx-credit-cards';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { CreditCardValidator } from 'ngx-credit-cards';
import { paypalUrl } from 'src/utils';
import { Router } from '@angular/router';
// import { IPayPalConfig,  ICreateOrderRequest } from 'ngx-paypal';
import * as Payment from 'payment';
Payment.fns.restrictNumeric = Payment.restrictNumeric;
Payment.fns.formatCardExpiry = Payment.formatCardExpiry;
Payment.fns.formatCardCVC = Payment.formatCardCVC;
@Component({
  selector: 'app-new-payment-gateway',
  templateUrl: './new-payment-gateway.component.html',
  styleUrls: ['./new-payment-gateway.component.css']
})
export class NewPaymentGatewayComponent implements OnInit {
//   public payPalConfig ? : IPayPalConfig;

   formBuilder = new FormBuilder();
   formGroup = new FormGroup({
    cardNumber: new FormControl('', [CreditCardValidator.validateCardNumber]),
    cardExpDate:new FormControl('', [CreditCardValidator.validateCardExpiry]),
    cardCvv: new FormControl('', [CreditCardValidator.validateCardCvc]),
    cardName: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
  });
  resetStatus: any;
  showError: boolean;
  showCancel: boolean;
  showSuccess: boolean;

  constructor(private router:Router) {
   
   }
  
  
  ngOnInit() {
    // this.initConfig();
  
  }


  proceedToPay(){
    // this.router.navigate(['home'])
  }
  paypalPay(){
   let url=""
    //   document.location.href=paypalUrl+"21.9";
      console.log(paypalUrl+423.2)

      fetch(paypalUrl+"21.9").then(data=>{
        console.log(data);
        console.log(data.body)
        // if(data=="error"){}
        // document.location.href=String(data.message);
    })
 
      fetch(paypalUrl+"21.9").then(res=>res.json()).then(data=>{
        console.log(data);
        document.location.href=String(data.message);
        url=String(data.message);
    })


  .catch(error => {
   alert("Invalid Paypal token")
    // fetch(url).then(data=>{console.log(data)}).catch(error=>console.log(error.message))
  })
  }

goHome(){
    sessionStorage.setItem('cart','first');
    this.router.navigate(['home'])
}
logout(){
    window.sessionStorage.clear();
    this.router.navigate(['home']);
}}
