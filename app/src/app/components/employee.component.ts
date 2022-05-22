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
import { MatDialog } from '@angular/material/dialog'; //_splitter_
import { addEmployeeDialogComponent } from './addEmployeeDialog.component'; //_splitter_
import { editEmployeeDialogComponent } from './editEmployeeDialog.component'; //_splitter_
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
export class employeeComponent implements AfterViewInit {
  @ViewChild(MatSort)
  public MatSort: any = null;
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

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_6UHTexLv6v1ENRss');
    }
  }

  openDialog(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_uOggoorUrlPY7gnb(bh);
      //appendnew_next_openDialog
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Aw5D07XhV9y5mwLI');
    }
  }

  editEmployeeUser(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_xHMpMIrxvalqRh3U(bh);
      //appendnew_next_editEmployeeUser
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_3xlKQK5IIj8vbBIr');
    }
  }

  //appendnew_flow_employeeComponent_start

  sd_1CMz1XpdNhTdCSkb(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_1CMz1XpdNhTdCSkb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1CMz1XpdNhTdCSkb');
    }
  }

  sd_eJuzOUTYKNgXaqdz_1(bh) {
    try {
      const page = this.page;
      bh.local.dataSource = new MatTableDataSource([
        {
          position: 1,
          name: 'Hydrogen',
          weight: 1.0079,
          symbol: 'H',
        },
        {
          position: 2,
          name: 'Helium',
          weight: 4.0026,
          symbol: 'He',
        },
        {
          position: 3,
          name: 'Lithium',
          weight: 6.941,
          symbol: 'Li',
        },
        {
          position: 4,
          name: 'Beryllium',
          weight: 9.0122,
          symbol: 'Be',
        },
        {
          position: 5,
          name: 'Boron',
          weight: 10.811,
          symbol: 'B',
        },
        {
          position: 6,
          name: 'Carbon',
          weight: 12.0107,
          symbol: 'C',
        },
        {
          position: 7,
          name: 'Nitrogen',
          weight: 14.0067,
          symbol: 'N',
        },
        {
          position: 8,
          name: 'Oxygen',
          weight: 15.9994,
          symbol: 'O',
        },
        {
          position: 9,
          name: 'Fluorine',
          weight: 18.9984,
          symbol: 'F',
        },
        {
          position: 10,
          name: 'Neon',
          weight: 20.1797,
          symbol: 'Ne',
        },
      ]);
      bh = this.sd_E9QbOlnVduPNV5MO_1(bh);
      //appendnew_next_sd_eJuzOUTYKNgXaqdz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_97KbZKRihHEATcS4');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_c656u8WaZkehz5za');
    }
  }

  sd_xKCCTWKzvgDN0rx7_1(bh) {
    try {
      bh.pageViews = Object.assign(bh.pageViews || {}, {
        MatSort: this.MatSort,
      });
      bh = this.sd_2VNGqvcKee34lvOz_1(bh);
      //appendnew_next_sd_xKCCTWKzvgDN0rx7_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ynvSeOBdWFhc6Gra');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_J6T5ZTCkFjhqzGIe');
    }
  }

  sd_uOggoorUrlPY7gnb(bh) {
    try {
      const addEmployeeDialogDialog = this.__page_injector__.get(MatDialog);
      const addEmployeeDialogDialogRef = addEmployeeDialogDialog.open(
        addEmployeeDialogComponent,
        { minWidth: '500px' }
      );
      addEmployeeDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_jhhmWnlrt3FMlqUR(bh);

        //appendnew_next_sd_uOggoorUrlPY7gnb;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_uOggoorUrlPY7gnb');
    }
  }

  sd_jhhmWnlrt3FMlqUR(bh) {
    try {
      const page = this.page;
      console.log(page.res, 'add employee');
      //appendnew_next_sd_jhhmWnlrt3FMlqUR
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_jhhmWnlrt3FMlqUR');
    }
  }

  sd_xHMpMIrxvalqRh3U(bh) {
    try {
      const editEmployeeDialogDialog = this.__page_injector__.get(MatDialog);
      const editEmployeeDialogDialogRef = editEmployeeDialogDialog.open(
        editEmployeeDialogComponent,
        { minWidth: ' 500px' }
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
      console.log(page.res);
      //appendnew_next_sd_GFcN642lf22ZaYxr
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GFcN642lf22ZaYxr');
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
