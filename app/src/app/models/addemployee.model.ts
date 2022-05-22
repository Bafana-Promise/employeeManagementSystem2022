import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class addemployee {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('rollNo', String, true)
  public rollNo: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('section', String, true)
  public section: string = undefined;

}