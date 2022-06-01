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
import { FormControl, Validators, FormBuilder } from '@angular/forms'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-editDialog',
  templateUrl: './editDialog.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class editDialogComponent {
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
      this.sd_KZNVyZsM8gdq5i48(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_KZNVyZsM8gdq5i48(bh) {
    try {
      bh = this.sd_MIfZOL1j3KJgTmIq(bh);
      //appendnew_next_sd_KZNVyZsM8gdq5i48
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KZNVyZsM8gdq5i48');
    }
  }

  //appendnew_flow_editDialogComponent_start

  sd_MIfZOL1j3KJgTmIq(bh) {
    try {
      this.page.data = this.__page_injector__.get(MAT_DIALOG_DATA);

      bh = this.sd_v67uzJyxlr99wc4v(bh);
      //appendnew_next_sd_MIfZOL1j3KJgTmIq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_MIfZOL1j3KJgTmIq');
    }
  }

  sd_v67uzJyxlr99wc4v(bh) {
    try {
      const page = this.page;
      page.dm.edituser = page.data;

      console.log(page.data, 'Exe');
      //appendnew_next_sd_v67uzJyxlr99wc4v
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v67uzJyxlr99wc4v');
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
  //appendnew_flow_editDialogComponent_Catch
}
