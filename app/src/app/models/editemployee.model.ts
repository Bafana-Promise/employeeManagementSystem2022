import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class editemployee {
  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('currentDate', Date, true)
  public currentDate: Date = undefined;

  @JsonProperty('attendance', Boolean, true)
  public attendance: boolean = undefined;

}