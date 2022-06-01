/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable, Injector } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable({
  providedIn: 'root',
})
export class crudOperation {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private __service_injector__: Injector
  ) {
    this.registerListeners();
  }
  private registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_crudOperation

  async addUser(form: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_XsA3KoSGSmJBJyo1(bh);
      //appendnew_next_addUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Qmgr897LXIlsREbR');
    }
  }

  async loginUser(user: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          user: user,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_MsSrtVAgkT5OeFjp(bh);
      //appendnew_next_loginUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MKW7pttNe03pvBjK');
    }
  }

  async editUser(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_AWt6fHG8e99AFPQj(bh);
      //appendnew_next_editUser
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_iXpvlIKl6xP0ibbD');
    }
  }

  async deleteUser(id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_HgvKgR4K8MbLhTyW(bh);
      //appendnew_next_deleteUser
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s2icUHfGmCtwKLtj');
    }
  }

  async getUsers(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_4JkqBnb7TuziwLQq(bh);
      //appendnew_next_getUsers
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_k7Ts2BAcgHyDeN0V');
    }
  }

  async addAttendance(form: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          form: form,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_ItPZFIqqeOUVNM37(bh);
      //appendnew_next_addAttendance
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mkM8nvRHIz9Q96Ui');
    }
  }

  async clockIn(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_89hE9o6vDecWM5KO(bh);
      //appendnew_next_clockIn
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YQ8JVe65KGnTwayi');
    }
  }

  async getAllAttendance(...others) {
    try {
      var bh: any = {
        input: {},
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_NibmQIgWiGrKJzkt(bh);
      //appendnew_next_getAllAttendance
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_UBzzlZ851jTYoPBW');
    }
  }

  async getaUserAttendance(userEmail: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          userEmail: userEmail,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_xpF5Ov7Jn7DKEudr(bh);
      //appendnew_next_getaUserAttendance
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RHrLfLkjsbBsR6O3');
    }
  }

  async editAttendance(body: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          body: body,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_6PUcu8ObtCXhc4fA(bh);
      //appendnew_next_editAttendance
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_N87fZw6Bbo7seqbr');
    }
  }

  async deleteAttendance(id: any = undefined, ...others) {
    try {
      var bh: any = {
        input: {
          id: id,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_jokUIGKlumJj4N0I(bh);
      //appendnew_next_deleteAttendance
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EsJPNHbP8IXYBMWc');
    }
  }

  //appendnew_flow_crudOperation_start

  async sd_XsA3KoSGSmJBJyo1(bh) {
    try {
      bh.local.result = {};
      bh = await this.sd_rA0zqAVpFZIsRITt(bh);
      //appendnew_next_sd_XsA3KoSGSmJBJyo1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XsA3KoSGSmJBJyo1');
    }
  }

  async sd_rA0zqAVpFZIsRITt(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addAdmin/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_rA0zqAVpFZIsRITt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_rA0zqAVpFZIsRITt');
    }
  }

  async sd_MsSrtVAgkT5OeFjp(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `loginAdmin/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.user,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_MsSrtVAgkT5OeFjp
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MsSrtVAgkT5OeFjp');
    }
  }

  async sd_AWt6fHG8e99AFPQj(bh) {
    try {
      bh.input.email = bh.input.body.email;
      bh = await this.sd_kjBkLHU6TDgZskYa(bh);
      //appendnew_next_sd_AWt6fHG8e99AFPQj
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AWt6fHG8e99AFPQj');
    }
  }

  async sd_kjBkLHU6TDgZskYa(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `editAdmin/${bh.input.email}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_kjBkLHU6TDgZskYa
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_kjBkLHU6TDgZskYa');
    }
  }

  async sd_HgvKgR4K8MbLhTyW(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteAdmin/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_HgvKgR4K8MbLhTyW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HgvKgR4K8MbLhTyW');
    }
  }

  async sd_4JkqBnb7TuziwLQq(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getAdmin/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_4JkqBnb7TuziwLQq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4JkqBnb7TuziwLQq');
    }
  }

  async sd_ItPZFIqqeOUVNM37(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `addAttendance/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.form,
      };
      bh.local.result.ops = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_ItPZFIqqeOUVNM37
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ItPZFIqqeOUVNM37');
    }
  }

  async sd_89hE9o6vDecWM5KO(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `checkClockIn/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_89hE9o6vDecWM5KO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_89hE9o6vDecWM5KO');
    }
  }

  async sd_NibmQIgWiGrKJzkt(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `allAttendance/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_NibmQIgWiGrKJzkt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NibmQIgWiGrKJzkt');
    }
  }

  async sd_xpF5Ov7Jn7DKEudr(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getaUserAttendance/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.userEmail,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_xpF5Ov7Jn7DKEudr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xpF5Ov7Jn7DKEudr');
    }
  }

  async sd_6PUcu8ObtCXhc4fA(bh) {
    try {
      bh.input.email = bh.input.body.email;
      console.log(bh.input.email, 'HHhh');
      bh = await this.sd_EpqhsLlhnrMpq7D1(bh);
      //appendnew_next_sd_6PUcu8ObtCXhc4fA
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6PUcu8ObtCXhc4fA');
    }
  }

  async sd_EpqhsLlhnrMpq7D1(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `updateAttendance/${bh.input.email}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'put',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.body,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_EpqhsLlhnrMpq7D1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EpqhsLlhnrMpq7D1');
    }
  }

  async sd_jokUIGKlumJj4N0I(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `deleteAttendance/${bh.input.id}/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'delete',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.id,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_jokUIGKlumJj4N0I
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jokUIGKlumJj4N0I');
    }
  }

  //appendnew_node

  private async errorHandler(bh, e, src) {
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
  //appendnew_flow_crudOperation_Catch
}
