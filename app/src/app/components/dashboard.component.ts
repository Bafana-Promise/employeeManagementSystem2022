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
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'This years Bookings' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Last years booking' },
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
      //appendnew_next_sd_siVo6jVsOnvCLwhC
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_siVo6jVsOnvCLwhC');
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
