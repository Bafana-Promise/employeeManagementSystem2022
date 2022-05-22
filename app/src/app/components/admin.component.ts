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
import { addDialogComponent } from './addDialog.component'; //_splitter_
import { editDialogComponent } from './editDialog.component'; //_splitter_
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
export class adminComponent implements AfterViewInit {
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

  ngAfterViewInit() {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh = this.sd_xKCCTWKzvgDN0rx7_1(bh);
      //appendnew_next_ngAfterViewInit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_wZTyYX51TuXE05NZ');
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

  edit(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_T1BdwMW1vNoZodVv(bh);
      //appendnew_next_edit
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_fkOqSDhI1o3QUB9K');
    }
  }

  //appendnew_flow_adminComponent_start

  sd_V9VTBEg35IRV8P8j(bh) {
    try {
      bh = this.sd_eJuzOUTYKNgXaqdz_1(bh);
      //appendnew_next_sd_V9VTBEg35IRV8P8j
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_V9VTBEg35IRV8P8j');
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
      return this.errorHandler(bh, e, 'sd_kSCVJlsESYJ5DOjq');
    }
  }

  sd_E9QbOlnVduPNV5MO_1(bh) {
    try {
      this.page.tableData = bh.local.dataSource;
      //appendnew_next_sd_E9QbOlnVduPNV5MO_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dD8Wpgn1BYOsgKFI');
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
      return this.errorHandler(bh, e, 'sd_bL0TLGxO9QblJjZJ');
    }
  }

  sd_2VNGqvcKee34lvOz_1(bh) {
    try {
      const page = this.page;
      this.page.tableData.sort = this.MatSort;
      //appendnew_next_sd_2VNGqvcKee34lvOz_1
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_UySTKhiYatzS5BJB');
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
        this.sd_XGORI2x3HNwBn6sy(bh);

        //appendnew_next_sd_gH6MbVTSDSUae8QL;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_gH6MbVTSDSUae8QL');
    }
  }

  sd_XGORI2x3HNwBn6sy(bh) {
    try {
      const page = this.page;
      console.log(page.res, 'from add dialog');
      //appendnew_next_sd_XGORI2x3HNwBn6sy
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_XGORI2x3HNwBn6sy');
    }
  }

  sd_T1BdwMW1vNoZodVv(bh) {
    try {
      const editDialogDialog = this.__page_injector__.get(MatDialog);
      const editDialogDialogRef = editDialogDialog.open(editDialogComponent, {
        minWidth: '500px',
      });
      editDialogDialogRef.afterClosed().subscribe((event) => {
        this.page.res = event;
        this.sd_ulyHfE6fUESovUQq(bh);

        //appendnew_next_sd_T1BdwMW1vNoZodVv;
      });

      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_T1BdwMW1vNoZodVv');
    }
  }

  sd_ulyHfE6fUESovUQq(bh) {
    try {
      const page = this.page;
      console.log(page.res, 'from edit dialog');
      //appendnew_next_sd_ulyHfE6fUESovUQq
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_ulyHfE6fUESovUQq');
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
