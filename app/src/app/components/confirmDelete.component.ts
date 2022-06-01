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
  selector: 'bh-confirmDelete',
  templateUrl: './confirmDelete.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class confirmDeleteComponent {
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
      this.sd_amIWNasxqGCEwlqv(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_amIWNasxqGCEwlqv(bh) {
    try {
      bh = this.sd_AdOli7BYWoKcR9sz(bh);
      //appendnew_next_sd_amIWNasxqGCEwlqv
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_amIWNasxqGCEwlqv');
    }
  }

  yes(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_qCuOVYFV0MWmehkG(bh);
      //appendnew_next_yes
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Qz4bN4RpZJNt8JtR');
    }
  }

  //appendnew_flow_confirmDeleteComponent_start

  sd_AdOli7BYWoKcR9sz(bh) {
    try {
      bh = this.sd_q6rAas6xm3V4WTgo(bh);
      //appendnew_next_sd_AdOli7BYWoKcR9sz
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AdOli7BYWoKcR9sz');
    }
  }

  sd_q6rAas6xm3V4WTgo(bh) {
    try {
      this.page.id = this.__page_injector__.get(MAT_DIALOG_DATA);

      //appendnew_next_sd_q6rAas6xm3V4WTgo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_q6rAas6xm3V4WTgo');
    }
  }

  sd_qCuOVYFV0MWmehkG(bh) {
    try {
      const page = this.page;
      console.log(page.id, 'matric');
      //appendnew_next_sd_qCuOVYFV0MWmehkG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_qCuOVYFV0MWmehkG');
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
  //appendnew_flow_confirmDeleteComponent_Catch
}
