import { login } from '../src/app/models/login.model';
import { adduser } from '../src/app/models/adduser.model';
import { edituser } from '../src/app/models/edituser.model';
import { addemployee } from '../src/app/models/addemployee.model';
import { editemployee } from '../src/app/models/editemployee.model';
//IMPORT NEW DATAMODEL

export class NDataModel {
login: login;
adduser: adduser;
edituser: edituser;
addemployee: addemployee;
editemployee: editemployee;
//DECLARE NEW VARIABLE

constructor() {
this.login = new login();
this.adduser = new adduser();
this.edituser = new edituser();
this.addemployee = new addemployee();
this.editemployee = new editemployee();
//CREATE NEW DM INSTANCE
    }
}
