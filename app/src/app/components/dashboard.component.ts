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
//append_imports_end

@Component({
  selector: 'bh-dashboard',
  templateUrl: './dashboard.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class dashboardComponent {
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
      this.sd_GH0OR2pXdQfVXqas(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_GH0OR2pXdQfVXqas(bh) {
    try {
      bh = this.sd_hXjvJREexDfCAife(bh);
      //appendnew_next_sd_GH0OR2pXdQfVXqas
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_GH0OR2pXdQfVXqas');
    }
  }

  //appendnew_flow_dashboardComponent_start

  sd_hXjvJREexDfCAife(bh) {
    try {
      this.page.chartType = undefined;
      this.page.chartDatasets = undefined;
      this.page.chartLabels = undefined;
      this.page.chartColors = undefined;
      this.page.chartOptions = undefined;
      this.page.pieChartData = undefined;
      this.page.pieChartLabels = undefined;
      this.page.pieChartOptions = undefined;
      this.page.loggedInUser = undefined;
      this.page.present = [];
      this.page.absent = [];
      this.page.allAbsent = [];
      this.page.allPresent = [];
      bh = this.sd_5Z6gIIbZjLBteyzL(bh);
      //appendnew_next_sd_hXjvJREexDfCAife
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_hXjvJREexDfCAife');
    }
  }

  sd_5Z6gIIbZjLBteyzL(bh) {
    try {
      const page = this.page;
      page.chartType = 'line';
      page.chartDatasets = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'This years Attendance' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Last years Attendance' },
      ];
      page.chartLabels = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
      ];
      page.chartColors = [
        {
          backgroundColor: 'rgba(105, 0, 132, .2)',
          borderColor: 'rgba(200, 99, 132, .7)',
          borderWidth: 2,
        },
        {
          backgroundColor: 'rgba(0, 137, 132, .2)',
          borderColor: 'rgba(0, 10, 130, .7)',
          borderWidth: 2,
        },
      ];
      page.chartOptions = {
        responsive: true,
      };
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_siVo6jVsOnvCLwhC(bh);
      //appendnew_next_sd_5Z6gIIbZjLBteyzL
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_5Z6gIIbZjLBteyzL');
    }
  }

  sd_siVo6jVsOnvCLwhC(bh) {
    try {
      const page = this.page;
      page.pieChartData = [
        {
          data: [300, 500, 100],
        },
      ];

      page.pieChartLabels = [
        'Last year 2021',
        'Current year 2022',
        'Last of last year 2020',
      ];

      page.pieChartOptions = {
        responsive: true,
      };
      bh = this.sd_rPba3KFvCD56fPeb(bh);
      //appendnew_next_sd_siVo6jVsOnvCLwhC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_siVo6jVsOnvCLwhC');
    }
  }

  sd_rPba3KFvCD56fPeb(bh) {
    try {
      const page = this.page;
      let email = JSON.parse(sessionStorage.getItem('user')).email;
      page.owner = {
        email,
      };
      page.admin = email.includes('admin');
      page.loggedInUser = JSON.parse(sessionStorage.getItem('user'));
      bh = this.sd_87xN6lpConT4Uw6N(bh);
      //appendnew_next_sd_rPba3KFvCD56fPeb
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_rPba3KFvCD56fPeb');
    }
  }

  async sd_87xN6lpConT4Uw6N(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getaUserAttendance(
        this.page.owner
      );
      this.page.aUserAttendance = outputVariables.local.result;

      bh = this.sd_L6GkOWAqlam6I01a(bh);
      //appendnew_next_sd_87xN6lpConT4Uw6N
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_87xN6lpConT4Uw6N');
    }
  }

  async sd_L6GkOWAqlam6I01a(bh) {
    try {
      const crudOperationInstance: crudOperation =
        this.__page_injector__.get(crudOperation);

      let outputVariables = await crudOperationInstance.getAllAttendance();
      this.page.allAttendance = outputVariables.local.result;

      bh = this.sd_vpuglNULOya0MD5k(bh);
      //appendnew_next_sd_L6GkOWAqlam6I01a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L6GkOWAqlam6I01a');
    }
  }

  sd_vpuglNULOya0MD5k(bh) {
    try {
      const page = this.page; // page.tableData = page.allAttendance;
      console.log(page.aUserAttendance, 'BBBBBBBBBBBBBB');
      console.log(page.allAttendance, 'PPPPPPPPPPPPPP');

      page.allAttendance.forEach(function (item) {
        if (item.attendance === true) {
          page.allPresent.push(item);
          console.log(item, 'Present');
        } else {
          page.allAbsent.push(item);
          console.log(item, 'Absent');
        }
      });

      page.aUserAttendance.forEach(function (item) {
        if (item.attendance === true) {
          page.present.push(item);
          console.log(item, 'Present');
        } else {
          page.absent.push(item);
          console.log(item, 'Absent');
        }
      });
      //appendnew_next_sd_vpuglNULOya0MD5k
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_vpuglNULOya0MD5k');
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
  //appendnew_flow_dashboardComponent_Catch
}
