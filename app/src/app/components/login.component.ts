/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
  ViewChild,
  ViewChildren,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-login',
  templateUrl: './login.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class loginComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    this.page.dep.FormBuilder = this.__page_injector__.get(FormBuilder); //FormBuilder
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_qsYRsB80nb7yUi7R(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_qsYRsB80nb7yUi7R(bh) {
    try {
      bh = this.sd_4eyQiBP2skjLwoGc(bh);
      //appendnew_next_sd_qsYRsB80nb7yUi7R
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qsYRsB80nb7yUi7R');
    }
  }

  login(loginUser: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { loginUser: loginUser };
      bh.local = {};
      bh = this.sd_PgmSsrfl1nY2WSZE(bh);
      //appendnew_next_login
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6ivvWTwa69JbIX0Z');
    }
  }

  //appendnew_flow_loginComponent_start

  sd_4eyQiBP2skjLwoGc(bh) {
    try {
      //appendnew_next_sd_4eyQiBP2skjLwoGc
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4eyQiBP2skjLwoGc');
    }
  }

  sd_PgmSsrfl1nY2WSZE(bh) {
    try {
      const page = this.page;
      sessionStorage.setItem('user', JSON.stringify(bh.input.loginUser));
      window.location.href = '/home/dashboard';
      bh = this.sd_IhQVlFddSz3AKOsY(bh);
      //appendnew_next_sd_PgmSsrfl1nY2WSZE
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_PgmSsrfl1nY2WSZE');
    }
  }

  sd_IhQVlFddSz3AKOsY(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Login successfully', 'close', {
          duration: 400,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_IhQVlFddSz3AKOsY
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IhQVlFddSz3AKOsY');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_loginComponent_Catch
}
