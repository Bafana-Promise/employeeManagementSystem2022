import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class editemployee {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('rollOn', String, true)
  public rollOn: string = undefined;

  @JsonProperty('date', Date, true)
  public date: Date = undefined;

  @JsonProperty('section', String, true)
  public section: string = undefined;

}