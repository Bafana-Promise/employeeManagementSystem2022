import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-editEmployeeDialogComponent
import { editEmployeeDialogComponent } from '../components/editEmployeeDialog.component';
//CORE_REFERENCE_IMPORT-addEmployeeDialogComponent
import { addEmployeeDialogComponent } from '../components/addEmployeeDialog.component';
//CORE_REFERENCE_IMPORT-editDialogComponent
import { editDialogComponent } from '../components/editDialog.component';
//CORE_REFERENCE_IMPORT-addDialogComponent
import { addDialogComponent } from '../components/addDialog.component';
//CORE_REFERENCE_IMPORT-attendanceComponent
import { attendanceComponent } from '../components/attendance.component';
//CORE_REFERENCE_IMPORT-employeeComponent
import { employeeComponent } from '../components/employee.component';
//CORE_REFERENCE_IMPORT-adminComponent
import { adminComponent } from '../components/admin.component';
//CORE_REFERENCE_IMPORT-sectionComponent
import { sectionComponent } from '../components/section.component';
//CORE_REFERENCE_IMPORT-dashboardComponent
import { dashboardComponent } from '../components/dashboard.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/login.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editEmployeeDialogComponent
  editEmployeeDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addEmployeeDialogComponent
  addEmployeeDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-editDialogComponent
  editDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addDialogComponent
  addDialogComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-attendanceComponent
  attendanceComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employeeComponent
  employeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-adminComponent
  adminComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-sectionComponent
  sectionComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dashboardComponent
  dashboardComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'login', component: loginComponent },
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'dashboard', component: dashboardComponent },
      { path: 'section', component: sectionComponent },
      { path: 'admin', component: adminComponent },
      { path: 'employee', component: employeeComponent },
      { path: 'attendance', component: attendanceComponent },
    ],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
