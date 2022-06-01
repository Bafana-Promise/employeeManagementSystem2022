import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class addemployee {
  @JsonProperty('fullName', String, true)
  public fullName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('attandence', Boolean, true)
  public attandence: boolean = undefined;

  @JsonProperty('currentDate', Date, true)
  public currentDate: Date = undefined;

}