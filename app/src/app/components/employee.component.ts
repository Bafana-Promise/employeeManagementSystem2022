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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { editEmployeeDialogComponent } from './editEmployeeDialog.component'; //_splitter_
import { confirmDeleteComponent } from './confirmDelete.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-employee',
  templateUrl: './employee.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class employeeComponent {
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
      this.sd_RHmO5Akvx8pNiPSb(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_RHmO5Akvx8pNiPSb(bh) {
    try {
      bh = this.sd_1CMz1XpdNhTdCSkb(bh);
      //appendnew_next_sd_RHmO5Akvx8pNiPSb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RHmO5Akvx8pNiPSb');
    }
  }

  editEmployeeUser(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = { result: undefined };
      bh = this.sd_xHMpMIrxvalqRh3U(bh);
      //appendnew_next_editEmployeeUser
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3xlKQK5IIj8vbBIr');
    }
  }

  clockIn(form: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { form: form };
      bh.local = { result: undefined };
      bh = this.sd_UDk4KZcgHfWCV4LX(bh);
      //appendnew_next_clockIn
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_BdSkf0orNbOhqN9m');
    }
  }

  deleteAttendance(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};
      bh = this.sd_NPThVmWzfarv01qL(bh);
      //appendnew_next_deleteAttendance
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xDM9IfvLYGFQzkg7');
    }
  }

  //appendnew_flow_employeeComponent_start

  sd_1CMz1XpdNhTdCSkb(bh) {
    try {
      this.page.attendance = undefined;
      this.page.clockInObj = undefined;
      this.page.loggedInUser = undefined;
      this.page.allAttendance = [];
      bh = this.sd_w6SeZQOM8i9z9AsI(bh);
      //appendnew_next_sd_1CMz1XpdNhTdCSkb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1CMz1XpdNhTdCSkb');
    }
  }

  sd_w6SeZQOM8i9z9AsI(bh) {
    try {
      const page = this.page;
      page.clockInObj = [
        {
          attendance: false,
        },
      ];

      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_mvt2EZhQELk5BoW3(bh);
      //appendnew_next_sd_w6SeZQOM8i9z9AsI
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_w6SeZQOM8i9z9AsI');
    }
  }

  async sd_mvt2EZhQELk5BoW3(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_eGoF73aHv0FgQNwL(bh);
      //appendnew_next_sd_mvt2EZhQELk5BoW3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mvt2EZhQELk5BoW3');
    }
  }

  sd_eGoF73aHv0FgQNwL(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Get Users');
      let user = JSON.parse(sessionStorage.getItem('user'));

      page.attendance = {
        email: user.email,
        currentDate: new Date().toDateString().slice(0, 10),
        collection: 'attendance',
      };
      // page.tableData =  page.users;

      bh = this.sd_mkk9Tv18NsFsoUpT(bh);
      //appendnew_next_sd_eGoF73aHv0FgQNwL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eGoF73aHv0FgQNwL');
    }
  }

  async sd_mkk9Tv18NsFsoUpT(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.clockIn(
        this.page.attendance
      );
      this.page.clockInObj = outputVariables.local.result;

      bh = this.sd_RBpnhB9kKOaKhHta(bh);
      //appendnew_next_sd_mkk9Tv18NsFsoUpT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mkk9Tv18NsFsoUpT');
    }
  }

  sd_RBpnhB9kKOaKhHta(bh) {
    try {
      const page = this.page;
      page.clockInObj;
      console.log(page.clockInObj, 'ZZZZZZZZZZZ');
      bh = this.sd_NmKQRDdRsRkhB5NS(bh);
      //appendnew_next_sd_RBpnhB9kKOaKhHta
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_RBpnhB9kKOaKhHta');
    }
  }

  async sd_NmKQRDdRsRkhB5NS(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_s5hcVGz2eqpso2jN(bh);
      //appendnew_next_sd_NmKQRDdRsRkhB5NS
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NmKQRDdRsRkhB5NS');
    }
  }

  async sd_s5hcVGz2eqpso2jN(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_lH5jZAuxC0rl7imo(bh);
      //appendnew_next_sd_s5hcVGz2eqpso2jN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s5hcVGz2eqpso2jN');
    }
  }

  sd_lH5jZAuxC0rl7imo(bh) {
    try {
      const page = this.page; // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.userfromSessionstorage.email, 'ssssssss');

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allAttendance;
      } else {
        page.tableData = page.aUserAttendance;
      }

      //appendnew_next_sd_lH5jZAuxC0rl7imo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_lH5jZAuxC0rl7imo');
    }
  }

  sd_xHMpMIrxvalqRh3U(bh) {
    try {
      const editEmployeeDialogDialog = this.__page_injector__.get(MatDialog);
      const editEmployeeDialogDialogRef = editEmployeeDialogDialog.open(
        editEmployeeDialogComponent,
        { data: bh.input.data, minWidth: ' 500px' }
      );
      editEmployeeDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_GFcN642lf22ZaYxr(bh);

        //appendnew_next_sd_xHMpMIrxvalqRh3U;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_xHMpMIrxvalqRh3U');
    }
  }

  sd_GFcN642lf22ZaYxr(bh) {
    try {
      const page = this.page;
      console.log(page.res, 'romise');
      page.result = {
        fullName: page.res.fullName,
        email: page.res.email,
        currentDate: new Date().toDateString().slice(0, 10),
        attendance: page.res.attendance.toLowerCase() === 'true',
      };
      console.log(page.result, 'Hello');
      bh = this.sd_rY9cWgonXCI7953L(bh);
      //appendnew_next_sd_GFcN642lf22ZaYxr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GFcN642lf22ZaYxr');
    }
  }

  async sd_rY9cWgonXCI7953L(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_Iailijv5aTNuqPXg(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4BDdGon1ZFWPEDIg(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rY9cWgonXCI7953L');
    }
  }

  async sd_Iailijv5aTNuqPXg(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.editAttendance(
        this.page.result
      );
      this.page.data = outputVariables.local.result;

      bh = this.sd_xC30hfN9IuhRjU7z(bh);
      //appendnew_next_sd_Iailijv5aTNuqPXg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Iailijv5aTNuqPXg');
    }
  }

  async sd_xC30hfN9IuhRjU7z(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_Reh3nAhJEsyVt9zI(bh);
      //appendnew_next_sd_xC30hfN9IuhRjU7z
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xC30hfN9IuhRjU7z');
    }
  }

  async sd_Reh3nAhJEsyVt9zI(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_tgWKQAipH9q9vTyg(bh);
      //appendnew_next_sd_Reh3nAhJEsyVt9zI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Reh3nAhJEsyVt9zI');
    }
  }

  sd_tgWKQAipH9q9vTyg(bh) {
    try {
      const page = this.page; // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.userfromSessionstorage.email, 'ssssssss');

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allAttendance;
      } else {
        page.tableData = page.aUserAttendance;
      }

      //appendnew_next_sd_tgWKQAipH9q9vTyg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_tgWKQAipH9q9vTyg');
    }
  }

  sd_4BDdGon1ZFWPEDIg(bh) {
    try {
      const page = this.page;
      return false;
      //appendnew_next_sd_4BDdGon1ZFWPEDIg
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_4BDdGon1ZFWPEDIg');
    }
  }

  sd_UDk4KZcgHfWCV4LX(bh) {
    try {
      const page = this.page;
      let user = JSON.parse(sessionStorage.getItem('user'));

      page.attendance = {
        fullName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        currentDate: new Date().toDateString().slice(0, 10),
        attendance: true,
        collection: 'attendance',
      };
      console.log(page.attendance);
      bh = this.sd_WB3vPkspJvQrZaBt(bh);
      //appendnew_next_sd_UDk4KZcgHfWCV4LX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UDk4KZcgHfWCV4LX');
    }
  }

  async sd_WB3vPkspJvQrZaBt(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.addAttendance(
        this.page.attendance
      );
      bh.local.data = outputVariables.local.result;

      bh = this.sd_7VTcQaMvWOKQAakV(bh);
      //appendnew_next_sd_WB3vPkspJvQrZaBt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WB3vPkspJvQrZaBt');
    }
  }

  sd_7VTcQaMvWOKQAakV(bh) {
    try {
      const page = this.page;
      console.log(bh, 'AAAAAAAAAA');
      bh = this.sd_K3iidLvwNKrlRIk7(bh);
      //appendnew_next_sd_7VTcQaMvWOKQAakV
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_7VTcQaMvWOKQAakV');
    }
  }

  async sd_K3iidLvwNKrlRIk7(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_PdxWphJSFL6ZQoYi(bh);
      //appendnew_next_sd_K3iidLvwNKrlRIk7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K3iidLvwNKrlRIk7');
    }
  }

  async sd_PdxWphJSFL6ZQoYi(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_e9o9IZoPG2Jhm7dR(bh);
      //appendnew_next_sd_PdxWphJSFL6ZQoYi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PdxWphJSFL6ZQoYi');
    }
  }

  sd_e9o9IZoPG2Jhm7dR(bh) {
    try {
      const page = this.page; // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.userfromSessionstorage.email, 'ssssssss');

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allAttendance;
      } else {
        page.tableData = page.aUserAttendance;
      }

      //appendnew_next_sd_e9o9IZoPG2Jhm7dR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_e9o9IZoPG2Jhm7dR');
    }
  }

  sd_NPThVmWzfarv01qL(bh) {
    try {
      const confirmDeleteDialog = this.__page_injector__.get(MatDialog);
      const confirmDeleteDialogRef = confirmDeleteDialog.open(
        confirmDeleteComponent,
        { data: bh.input.id, minWidth: '500px' }
      );
      confirmDeleteDialogRef.afterClosed().subscribe((event) => {
        this.page.deleteRes = event;
        this.sd_IgAciYVmSJovurcs(bh);

        //appendnew_next_sd_NPThVmWzfarv01qL;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_NPThVmWzfarv01qL');
    }
  }

  async sd_IgAciYVmSJovurcs(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.deleteRes,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_sZYvhBlw0oJwnNxa(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KqFaERkSzfcpQ5Zd(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_IgAciYVmSJovurcs');
    }
  }

  sd_sZYvhBlw0oJwnNxa(bh) {
    try {
      const page = this.page;
      console.log(page.deleteRes, 'One One One One One One');
      bh = this.sd_UvkD9D2sSHXZWLjy(bh);
      //appendnew_next_sd_sZYvhBlw0oJwnNxa
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_sZYvhBlw0oJwnNxa');
    }
  }

  async sd_UvkD9D2sSHXZWLjy(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.deleteAttendance(
        bh.input.id
      );

      bh = this.sd_4SZTQ6jZtZu9ikSG(bh);
      //appendnew_next_sd_UvkD9D2sSHXZWLjy
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UvkD9D2sSHXZWLjy');
    }
  }

  async sd_4SZTQ6jZtZu9ikSG(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_cK7wxvfmwhcPbfkM(bh);
      //appendnew_next_sd_4SZTQ6jZtZu9ikSG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4SZTQ6jZtZu9ikSG');
    }
  }

  async sd_cK7wxvfmwhcPbfkM(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_GG4MUfz0v3QBF3y6(bh);
      //appendnew_next_sd_cK7wxvfmwhcPbfkM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cK7wxvfmwhcPbfkM');
    }
  }

  sd_GG4MUfz0v3QBF3y6(bh) {
    try {
      const page = this.page; // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.userfromSessionstorage = JSON.parse(sessionStorage.getItem('user'));
      console.log(page.userfromSessionstorage.email, 'ssssssss');

      if (page.userfromSessionstorage.email.includes('admin')) {
        page.tableData = page.allAttendance;
      } else {
        page.tableData = page.aUserAttendance;
      }

      //appendnew_next_sd_GG4MUfz0v3QBF3y6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GG4MUfz0v3QBF3y6');
    }
  }

  sd_KqFaERkSzfcpQ5Zd(bh) {
    try {
      const page = this.page;
      console.log(false);
      return false;

      //appendnew_next_sd_KqFaERkSzfcpQ5Zd
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KqFaERkSzfcpQ5Zd');
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
  //appendnew_flow_employeeComponent_Catch
}
