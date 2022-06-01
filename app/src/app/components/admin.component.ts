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
import { addDialogComponent } from './addDialog.component'; //_splitter_
import { editDialogComponent } from './editDialog.component'; //_splitter_
import { confirmDeleteComponent } from './confirmDelete.component'; //_splitter_
import { MatSort, SortDirection } from '@angular/material/sort'; //_splitter_
import { MatTableDataSource } from '@angular/material/table'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-admin',
  templateUrl: './admin.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class adminComponent {
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
      this.sd_0z5O4yihOY8PFmyW(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_0z5O4yihOY8PFmyW(bh) {
    try {
      bh = this.sd_V9VTBEg35IRV8P8j(bh);
      //appendnew_next_sd_0z5O4yihOY8PFmyW
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_0z5O4yihOY8PFmyW');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_gH6MbVTSDSUae8QL(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6D8yTpW46lAzKdkM');
    }
  }

  edit(data: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { data: data };
      bh.local = { result: undefined };
      bh = this.sd_T1BdwMW1vNoZodVv(bh);
      //appendnew_next_edit
      return bh.local.result;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fkOqSDhI1o3QUB9K');
    }
  }

  deleteUser(id: any = undefined, ...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = { id: id };
      bh.local = {};
      bh = this.sd_eSIgG7ytspQ6TWXg(bh);
      //appendnew_next_deleteUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_bdv6zY7m8sCWmXxr');
    }
  }

  //appendnew_flow_adminComponent_start

  sd_V9VTBEg35IRV8P8j(bh) {
    try {
      this.page.loggedInUser = undefined;
      bh = this.sd_SqVW1BtS9qdMgQGN(bh);
      //appendnew_next_sd_V9VTBEg35IRV8P8j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V9VTBEg35IRV8P8j');
    }
  }

  sd_SqVW1BtS9qdMgQGN(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_OUi6uwgC5xG8Z5oe(bh);
      //appendnew_next_sd_SqVW1BtS9qdMgQGN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_SqVW1BtS9qdMgQGN');
    }
  }

  async sd_OUi6uwgC5xG8Z5oe(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_DLmTpBupDlItnoIL(bh);
      //appendnew_next_sd_OUi6uwgC5xG8Z5oe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OUi6uwgC5xG8Z5oe');
    }
  }

  sd_DLmTpBupDlItnoIL(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Get Users');
      page.tableData = page.users;
      //appendnew_next_sd_DLmTpBupDlItnoIL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_DLmTpBupDlItnoIL');
    }
  }

  sd_gH6MbVTSDSUae8QL(bh) {
    try {
      const addDialogDialog = this.__page_injector__.get(MatDialog);
      const addDialogDialogRef = addDialogDialog.open(addDialogComponent, {
        minWidth: '500px',
      });
      addDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_wphjU8VYN7r3qWrJ(bh);

        //appendnew_next_sd_gH6MbVTSDSUae8QL;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gH6MbVTSDSUae8QL');
    }
  }

  async sd_wphjU8VYN7r3qWrJ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.res,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_gF3Ox7G1sZoAbd5x(bh);
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
        bh = await this.sd_CQqf1bT9v7uuuxp8(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wphjU8VYN7r3qWrJ');
    }
  }

  async sd_gF3Ox7G1sZoAbd5x(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.addUser(this.page.res);
      bh.local.result = outputVariables.local.result;

      bh = this.sd_6X7K5x81FKU2VmlP(bh);
      //appendnew_next_sd_gF3Ox7G1sZoAbd5x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gF3Ox7G1sZoAbd5x');
    }
  }

  async sd_6X7K5x81FKU2VmlP(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_dcir2ech1B7Fr5f5(bh);
      //appendnew_next_sd_6X7K5x81FKU2VmlP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6X7K5x81FKU2VmlP');
    }
  }

  sd_dcir2ech1B7Fr5f5(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Get Users');
      page.tableData = page.users;
      //appendnew_next_sd_dcir2ech1B7Fr5f5
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dcir2ech1B7Fr5f5');
    }
  }

  sd_CQqf1bT9v7uuuxp8(bh) {
    try {
      const page = this.page;
      return false;
      //appendnew_next_sd_CQqf1bT9v7uuuxp8
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_CQqf1bT9v7uuuxp8');
    }
  }

  sd_T1BdwMW1vNoZodVv(bh) {
    try {
      const editDialogDialog = this.__page_injector__.get(MatDialog);
      const editDialogDialogRef = editDialogDialog.open(editDialogComponent, {
        data: bh.input.data,
        minWidth: '500px',
      });
      editDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.editRes = event;
        this.sd_K5NZh5ws4Vom8iYw(bh);

        //appendnew_next_sd_T1BdwMW1vNoZodVv;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T1BdwMW1vNoZodVv');
    }
  }

  async sd_K5NZh5ws4Vom8iYw(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['nempty'](
          this.page.editRes,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = this.sd_3hIcXfWwELj2JHr9(bh);
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
        bh = await this.sd_A9fHnyWvV5GspwZ9(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_K5NZh5ws4Vom8iYw');
    }
  }

  async sd_3hIcXfWwELj2JHr9(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.editUser(
        this.page.editRes
      );
      bh.local.data = outputVariables.local.result;

      bh = this.sd_gVoXWYJhBa7GAR4n(bh);
      //appendnew_next_sd_3hIcXfWwELj2JHr9
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_3hIcXfWwELj2JHr9');
    }
  }

  async sd_gVoXWYJhBa7GAR4n(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_LHbF6T0jGf4RDeOr(bh);
      //appendnew_next_sd_gVoXWYJhBa7GAR4n
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gVoXWYJhBa7GAR4n');
    }
  }

  sd_LHbF6T0jGf4RDeOr(bh) {
    try {
      const page = this.page;
      page.tableData = page.users;
      //appendnew_next_sd_LHbF6T0jGf4RDeOr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_LHbF6T0jGf4RDeOr');
    }
  }

  sd_A9fHnyWvV5GspwZ9(bh) {
    try {
      const page = this.page;
      return false;
      //appendnew_next_sd_A9fHnyWvV5GspwZ9
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_A9fHnyWvV5GspwZ9');
    }
  }

  sd_eSIgG7ytspQ6TWXg(bh) {
    try {
      const confirmDeleteDialog = this.__page_injector__.get(MatDialog);
      const confirmDeleteDialogRef = confirmDeleteDialog.open(
        confirmDeleteComponent,
        { data: bh.input.id, minWidth: '500px' }
      );
      confirmDeleteDialogRef.afterClosed().subscribe((event) => {
        this.page.deleteRes = event;
        this.sd_KYx8CNNsdXKEzRF4(bh);

        //appendnew_next_sd_eSIgG7ytspQ6TWXg;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eSIgG7ytspQ6TWXg');
    }
  }

  async sd_KYx8CNNsdXKEzRF4(bh) {
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
        bh = this.sd_v4zc1Avjq0PM5R1f(bh);
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
        bh = await this.sd_vG9SbbOZ54Zo9T0X(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KYx8CNNsdXKEzRF4');
    }
  }

  sd_v4zc1Avjq0PM5R1f(bh) {
    try {
      const page = this.page;
      console.log(page.deleteRes, 'One One One One One One');
      bh = this.sd_8nS7PsUiLyQEM4hP(bh);
      //appendnew_next_sd_v4zc1Avjq0PM5R1f
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_v4zc1Avjq0PM5R1f');
    }
  }

  async sd_8nS7PsUiLyQEM4hP(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.deleteUser(bh.input.id);

      bh = this.sd_zYz1UM5ZRy8568rD(bh);
      //appendnew_next_sd_8nS7PsUiLyQEM4hP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8nS7PsUiLyQEM4hP');
    }
  }

  async sd_zYz1UM5ZRy8568rD(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getUsers();
      this.page.users = outputVariables.local.result;

      bh = this.sd_3HQAe5uaNxkq78Y6(bh);
      //appendnew_next_sd_zYz1UM5ZRy8568rD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zYz1UM5ZRy8568rD');
    }
  }

  sd_3HQAe5uaNxkq78Y6(bh) {
    try {
      const page = this.page;
      console.log(page.users, 'Get Users');
      page.tableData = page.users;
      //appendnew_next_sd_3HQAe5uaNxkq78Y6
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3HQAe5uaNxkq78Y6');
    }
  }

  sd_vG9SbbOZ54Zo9T0X(bh) {
    try {
      const page = this.page;
      console.log(false);
      return false;

      //appendnew_next_sd_vG9SbbOZ54Zo9T0X
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vG9SbbOZ54Zo9T0X');
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
  //appendnew_flow_adminComponent_Catch
}
