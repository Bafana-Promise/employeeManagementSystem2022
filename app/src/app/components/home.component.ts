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
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_IbNw00n0221v6f4y(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_IbNw00n0221v6f4y(bh) {
    try {
      bh = this.sd_nJ7cHAC8iMsjo3N4(bh);
      //appendnew_next_sd_IbNw00n0221v6f4y
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_IbNw00n0221v6f4y');
    }
  }

  logout(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_p6WkZsTwoKLMxbjs(bh);
      //appendnew_next_logout
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_l9WmrwripkUXy9ns');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_nJ7cHAC8iMsjo3N4(bh) {
    try {
      this.page.sideNavOpen = true;
      this.page.loggedInUser = undefined;
      bh = this.sd_YnqcjJQVADH6ibaf(bh);
      //appendnew_next_sd_nJ7cHAC8iMsjo3N4
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_nJ7cHAC8iMsjo3N4');
    }
  }

  sd_YnqcjJQVADH6ibaf(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      //appendnew_next_sd_YnqcjJQVADH6ibaf
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_YnqcjJQVADH6ibaf');
    }
  }

  sd_p6WkZsTwoKLMxbjs(bh) {
    try {
      const page = this.page;
      sessionStorage.clear();
      window.location.href = '/login';
      bh = this.sd_e3b84Jx1sRevoGgD(bh);
      //appendnew_next_sd_p6WkZsTwoKLMxbjs
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_p6WkZsTwoKLMxbjs');
    }
  }

  sd_e3b84Jx1sRevoGgD(bh) {
    try {
      this.__page_injector__
        .get(MatSnackBar)
        .open('Logout successfully', 'close', {
          duration: 200,
          direction: 'ltr',
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      //appendnew_next_sd_e3b84Jx1sRevoGgD
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e3b84Jx1sRevoGgD');
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
  //appendnew_flow_homeComponent_Catch
}
