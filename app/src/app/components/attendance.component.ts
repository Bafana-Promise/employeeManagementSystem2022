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
import { crudOperation } from 'app/sd-services/crudOperation'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-attendance',
  templateUrl: './attendance.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class attendanceComponent {
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
      this.sd_ajq1BFupkfa6zG0m(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_ajq1BFupkfa6zG0m(bh) {
    try {
      bh = this.sd_C9vLWmJosrlykN2A(bh);
      //appendnew_next_sd_ajq1BFupkfa6zG0m
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ajq1BFupkfa6zG0m');
    }
  }

  //appendnew_flow_attendanceComponent_start

  sd_C9vLWmJosrlykN2A(bh) {
    try {
      this.page.allAttendance = [];
      this.page.owner = undefined;
      this.page.aUserAttendance = undefined;
      this.page.admin = undefined;
      this.page.userfromSessionstorage = undefined;
      this.page.present = [];
      this.page.absent = [];
      bh = this.sd_lk6GmPoteKsrFIzM(bh);
      //appendnew_next_sd_C9vLWmJosrlykN2A
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_C9vLWmJosrlykN2A');
    }
  }

  sd_lk6GmPoteKsrFIzM(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      bh = this.sd_h03o2EWfShN2BiO9(bh);
      //appendnew_next_sd_lk6GmPoteKsrFIzM
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lk6GmPoteKsrFIzM');
    }
  }

  async sd_h03o2EWfShN2BiO9(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_8dVDPxMUOQRs20aP(bh);
      //appendnew_next_sd_h03o2EWfShN2BiO9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h03o2EWfShN2BiO9');
    }
  }

  async sd_8dVDPxMUOQRs20aP(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_VDjpZ4NmwN0Uis1M(bh);
      //appendnew_next_sd_8dVDPxMUOQRs20aP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8dVDPxMUOQRs20aP');
    }
  }

  sd_VDjpZ4NmwN0Uis1M(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.userfromSessionstorage.email, 'ssssssss');

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allAttendance;
      } else {
        // page.tableData = page.aUserAttendance;
        page.aUserAttendance.forEach(function (item) {
          if (item.attendance === true) {
            page.present.push(item);
            console.log(item, 'Present');
          } else {
            page.absent.push(item);

            console.log(item, 'Absent');
          }
        });
        console.log(page.present, 'Presents');
        console.log(page.absent, 'Absents');
        page.tableData = page.present;
        page.userTableData = page.absent;
      }

      //appendnew_next_sd_VDjpZ4NmwN0Uis1M
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_VDjpZ4NmwN0Uis1M');
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
  //appendnew_flow_attendanceComponent_Catch
}
