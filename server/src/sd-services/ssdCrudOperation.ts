let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as mongodb from 'mongodb'; //_splitter_
//append_imports_end
export class ssdCrudOperation {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'ssdCrudOperation';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ssdCrudOperation(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ssdCrudOperation_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ssdCrudOperation');

    //appendnew_flow_ssdCrudOperation_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ssdCrudOperation');

    if (!this.swaggerDocument['paths']['/addAdmin']) {
      this.swaggerDocument['paths']['/addAdmin'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addAdmin']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addAdmin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_FqQA0ZpblnluhSra(bh);
          //appendnew_next_sd_yDN9J2R7LYZOp2pv
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_yDN9J2R7LYZOp2pv');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/loginAdmin']) {
      this.swaggerDocument['paths']['/loginAdmin'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/loginAdmin']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/loginAdmin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_I8WsmRLYsML3Dp6a(bh);
          //appendnew_next_sd_sfy2nCOMsp0kgjdr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_sfy2nCOMsp0kgjdr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/editAdmin/{email}']) {
      this.swaggerDocument['paths']['/editAdmin/{email}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/editAdmin/{email}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/editAdmin/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_y2dEupVRWGWJGRjf(bh);
          //appendnew_next_sd_CbSVOZNyKO4DQcOV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CbSVOZNyKO4DQcOV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteAdmin/{id}']) {
      this.swaggerDocument['paths']['/deleteAdmin/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteAdmin/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteAdmin/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_lkgAdWCuacF14m6Y(bh);
          //appendnew_next_sd_REUqLV17pUT0tfg6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_REUqLV17pUT0tfg6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getAdmin']) {
      this.swaggerDocument['paths']['/getAdmin'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getAdmin']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/getAdmin`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_EbmfHFtNb5OkJfKZ(bh);
          //appendnew_next_sd_zxhTQlexXRWrRY8s
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_zxhTQlexXRWrRY8s');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/addAttendance']) {
      this.swaggerDocument['paths']['/addAttendance'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/addAttendance']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/addAttendance`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_6SZTNrPTQDzso1dG(bh);
          //appendnew_next_sd_wKacdIaVTk0IdycC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_wKacdIaVTk0IdycC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/checkClockIn']) {
      this.swaggerDocument['paths']['/checkClockIn'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/checkClockIn']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/checkClockIn`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_XybD1FjksoM3nn1Q(bh);
          //appendnew_next_sd_i8RV5lldmhmvCiU2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_i8RV5lldmhmvCiU2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/allAttendance']) {
      this.swaggerDocument['paths']['/allAttendance'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/allAttendance']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/allAttendance`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_U1slakrEEqjecLlF(bh);
          //appendnew_next_sd_Haq6tQvwk8eRIMDd
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Haq6tQvwk8eRIMDd');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/getaUserAttendance']) {
      this.swaggerDocument['paths']['/getaUserAttendance'] = {
        post: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/getaUserAttendance']['post'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['post'](
      `${this.serviceBasePath}/getaUserAttendance`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_cb838PRxNpNMCXzf(bh);
          //appendnew_next_sd_VjlUWfqPe4FawSom
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VjlUWfqPe4FawSom');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/updateAttendance/{email}']) {
      this.swaggerDocument['paths']['/updateAttendance/{email}'] = {
        put: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/updateAttendance/{email}']['put'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['put'](
      `${this.serviceBasePath}/updateAttendance/:email`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_WDZBO0XqBgcCfkLz(bh);
          //appendnew_next_sd_2ee35lwVo9zjlEAg
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_2ee35lwVo9zjlEAg');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/deleteAttendance/{id}']) {
      this.swaggerDocument['paths']['/deleteAttendance/{id}'] = {
        delete: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/deleteAttendance/{id}']['delete'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['delete'](
      `${this.serviceBasePath}/deleteAttendance/:id`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_h4jH5nYel3wIezYi(bh);
          //appendnew_next_sd_ZgWEfnnFUd8enBkL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ZgWEfnnFUd8enBkL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ssdCrudOperation_HttpIn
  }
  //   service flows_ssdCrudOperation

  //appendnew_flow_ssdCrudOperation_start

  async sd_FqQA0ZpblnluhSra(bh) {
    try {
      console.log(bh, 'SSD Data');
      bh = await this.sd_YBpyBuWzAvrrkaLK(bh);
      //appendnew_next_sd_FqQA0ZpblnluhSra
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FqQA0ZpblnluhSra');
    }
  }

  async sd_YBpyBuWzAvrrkaLK(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_naPyLi3EiZrXikbi',
        'users',
        bh.input.body,
        {}
      );
      await this.sd_QkCrLlG4ZMVsn2xZ(bh);
      //appendnew_next_sd_YBpyBuWzAvrrkaLK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YBpyBuWzAvrrkaLK');
    }
  }

  async sd_QkCrLlG4ZMVsn2xZ(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QkCrLlG4ZMVsn2xZ');
    }
  }

  async sd_I8WsmRLYsML3Dp6a(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
      };
      bh = await this.sd_t0HlnPMVaLIFZirt(bh);
      //appendnew_next_sd_I8WsmRLYsML3Dp6a
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_I8WsmRLYsML3Dp6a');
    }
  }

  async sd_t0HlnPMVaLIFZirt(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_naPyLi3EiZrXikbi',
        'users',
        bh.input.query,
        {}
      );
      await this.sd_vgrQOz4x6BD5buEm(bh);
      //appendnew_next_sd_t0HlnPMVaLIFZirt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_t0HlnPMVaLIFZirt');
    }
  }

  async sd_vgrQOz4x6BD5buEm(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_vgrQOz4x6BD5buEm');
    }
  }

  async sd_y2dEupVRWGWJGRjf(bh) {
    try {
      bh.input.filter = {
        email: bh.input.body.email,
        // _id: bh.input.body._id
      };
      delete bh.input.body._id;
      bh.updatedUser = { $set: bh.input.body };
      console.log(bh.input.body);
      bh = await this.sd_sGBlsagBfZ14gYDP(bh);
      //appendnew_next_sd_y2dEupVRWGWJGRjf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y2dEupVRWGWJGRjf');
    }
  }

  async sd_sGBlsagBfZ14gYDP(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_naPyLi3EiZrXikbi',
        'users',
        bh.input.filter,
        bh.updatedUser,
        {}
      );
      await this.sd_yNq1UppnXJu2SEv2(bh);
      //appendnew_next_sd_sGBlsagBfZ14gYDP
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sGBlsagBfZ14gYDP');
    }
  }

  async sd_yNq1UppnXJu2SEv2(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yNq1UppnXJu2SEv2');
    }
  }

  async sd_lkgAdWCuacF14m6Y(bh) {
    try {
      let objId = require('mongodb').ObjectId;
      let _id = new objId(bh.input.params.id);
      bh.input.filter = {
        _id,
      };
      console.log(bh);
      bh = await this.sd_9bzlPA96fi8tAA2H(bh);
      //appendnew_next_sd_lkgAdWCuacF14m6Y
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lkgAdWCuacF14m6Y');
    }
  }

  async sd_9bzlPA96fi8tAA2H(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_naPyLi3EiZrXikbi',
        'users',
        bh.input.filter,
        {}
      );
      await this.sd_F11ijbJ9VXTJ2aIN(bh);
      //appendnew_next_sd_9bzlPA96fi8tAA2H
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9bzlPA96fi8tAA2H');
    }
  }

  async sd_F11ijbJ9VXTJ2aIN(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F11ijbJ9VXTJ2aIN');
    }
  }

  async sd_EbmfHFtNb5OkJfKZ(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_naPyLi3EiZrXikbi',
        'users',
        bh.input.query,
        {}
      );
      await this.sd_zBKJGoBCoTWVJg74(bh);
      //appendnew_next_sd_EbmfHFtNb5OkJfKZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EbmfHFtNb5OkJfKZ');
    }
  }

  async sd_zBKJGoBCoTWVJg74(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zBKJGoBCoTWVJg74');
    }
  }

  async sd_6SZTNrPTQDzso1dG(bh) {
    try {
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      console.log(bh, 'BhBH BH BH');
      bh = await this.sd_Ncv1D3tOacvWtxkJ(bh);
      //appendnew_next_sd_6SZTNrPTQDzso1dG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6SZTNrPTQDzso1dG');
    }
  }

  async sd_Ncv1D3tOacvWtxkJ(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().insertOne(
        'sd_naPyLi3EiZrXikbi',
        bh.collection,
        bh.input.body,
        {}
      );
      await this.sd_fPtm7SEjdqULE5zV(bh);
      //appendnew_next_sd_Ncv1D3tOacvWtxkJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ncv1D3tOacvWtxkJ');
    }
  }

  async sd_fPtm7SEjdqULE5zV(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result.ops);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fPtm7SEjdqULE5zV');
    }
  }

  async sd_XybD1FjksoM3nn1Q(bh) {
    try {
      bh.collection = bh.input.body.collection;
      delete bh.input.body.collection;
      bh.input.filter = {
        email: bh.input.body.email,
        currentDate: bh.input.body.currentDate,
      };
      // check that the user has clock in
      console.log(22222222);
      bh = await this.sd_cNliZ7uf9LSC9vfm(bh);
      //appendnew_next_sd_XybD1FjksoM3nn1Q
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XybD1FjksoM3nn1Q');
    }
  }

  async sd_cNliZ7uf9LSC9vfm(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_naPyLi3EiZrXikbi',
        bh.collection,
        bh.input.filter,
        {}
      );
      await this.sd_H80vYO9geqGMtAU3(bh);
      //appendnew_next_sd_cNliZ7uf9LSC9vfm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cNliZ7uf9LSC9vfm');
    }
  }

  async sd_H80vYO9geqGMtAU3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H80vYO9geqGMtAU3');
    }
  }

  async sd_U1slakrEEqjecLlF(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_naPyLi3EiZrXikbi',
        'attendance',
        bh.input.query,
        {}
      );
      await this.sd_KZZeOxIJaugtwmMc(bh);
      //appendnew_next_sd_U1slakrEEqjecLlF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_U1slakrEEqjecLlF');
    }
  }

  async sd_KZZeOxIJaugtwmMc(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KZZeOxIJaugtwmMc');
    }
  }

  async sd_cb838PRxNpNMCXzf(bh) {
    try {
      bh.input.query = {
        email: bh.input.body.email,
      };
      bh = await this.sd_6AJBxEfcDLa6cevK(bh);
      //appendnew_next_sd_cb838PRxNpNMCXzf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_cb838PRxNpNMCXzf');
    }
  }

  async sd_6AJBxEfcDLa6cevK(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_naPyLi3EiZrXikbi',
        'attendance',
        bh.input.query,
        {}
      );
      await this.sd_VgTNjyKQ7ebA43l3(bh);
      //appendnew_next_sd_6AJBxEfcDLa6cevK
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6AJBxEfcDLa6cevK');
    }
  }

  async sd_VgTNjyKQ7ebA43l3(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VgTNjyKQ7ebA43l3');
    }
  }

  async sd_WDZBO0XqBgcCfkLz(bh) {
    try {
      bh.input.filter = {
        email: bh.input.body.email,
        // _id: bh.input.body._id
      };
      delete bh.input.body._id;
      bh.updatedUser = { $set: bh.input.body };
      console.log(bh.input.body);
      bh = await this.sd_0QNHUlb8Hd1VHsHc(bh);
      //appendnew_next_sd_WDZBO0XqBgcCfkLz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WDZBO0XqBgcCfkLz');
    }
  }

  async sd_0QNHUlb8Hd1VHsHc(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().updateOne(
        'sd_naPyLi3EiZrXikbi',
        'attendance',
        bh.input.filter,
        bh.updatedUser,
        {}
      );
      await this.sd_Yz4hBFoEyeEo9a23(bh);
      //appendnew_next_sd_0QNHUlb8Hd1VHsHc
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_0QNHUlb8Hd1VHsHc');
    }
  }

  async sd_Yz4hBFoEyeEo9a23(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Yz4hBFoEyeEo9a23');
    }
  }

  async sd_h4jH5nYel3wIezYi(bh) {
    try {
      let objId = require('mongodb').ObjectId;
      let _id = new objId(bh.input.params.id);
      bh.input.filter = {
        _id,
      };
      console.log(bh);
      bh = await this.sd_CLVFjqHxUHrbSHhe(bh);
      //appendnew_next_sd_h4jH5nYel3wIezYi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h4jH5nYel3wIezYi');
    }
  }

  async sd_CLVFjqHxUHrbSHhe(bh) {
    try {
      bh.local.result = await MongoPersistance.getInstance().findOneAndDelete(
        'sd_naPyLi3EiZrXikbi',
        'attendance',
        bh.input.filter,
        {}
      );
      await this.sd_YE4oEJD0M4pzBnUZ(bh);
      //appendnew_next_sd_CLVFjqHxUHrbSHhe
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CLVFjqHxUHrbSHhe');
    }
  }

  async sd_YE4oEJD0M4pzBnUZ(bh) {
    try {
      bh.web.res.status(200).send(bh.local.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YE4oEJD0M4pzBnUZ');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  //appendnew_flow_ssdCrudOperation_Catch
}
