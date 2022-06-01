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
import { MAT_DIALOG_DATA } from '@angular/material/dialog'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-confirmDeleteAttend',
  templateUrl: './confirmDeleteAttend.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmDeleteAttendComponent {
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
      this.sd_0cWUPGwtYX54HShC(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0cWUPGwtYX54HShC(bh) {
    try {
      bh = this.sd_7se1VnmMGGvT5d2H(bh);
      //appendnew_next_sd_0cWUPGwtYX54HShC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0cWUPGwtYX54HShC');
    }
  }

  yes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_GiN0Wn5ij4P9Ih3s(bh);
      //appendnew_next_yes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_EcNIwaBJwVYJkAmX');
    }
  }

  //appendnew_flow_confirmDeleteAttendComponent_start

  sd_7se1VnmMGGvT5d2H(bh) {
    try {
      bh = this.sd_VNTOjOymeqIvyZGJ(bh);
      //appendnew_next_sd_7se1VnmMGGvT5d2H
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7se1VnmMGGvT5d2H');
    }
  }

  sd_VNTOjOymeqIvyZGJ(bh) {
    try {
      this.page.id = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_VNTOjOymeqIvyZGJ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VNTOjOymeqIvyZGJ');
    }
  }

  sd_GiN0Wn5ij4P9Ih3s(bh) {
    try {
      const page = this.page;
      console.log(page.id, 'matric');
      //appendnew_next_sd_GiN0Wn5ij4P9Ih3s
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GiN0Wn5ij4P9Ih3s');
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
  //appendnew_flow_confirmDeleteAttendComponent_Catch
}
