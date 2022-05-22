import {JsonProperty, JsonObject} from '../lib/tj.deserializer'

@JsonObject
export class adduser {
  @JsonProperty('firstName', String, true)
  public firstName: string = undefined;

  @JsonProperty('lastName', String, true)
  public lastName: string = undefined;

  @JsonProperty('email', String, true)
  public email: string = undefined;

  @JsonProperty('password', String, true)
  public password: string = undefined;

  @JsonProperty('qualification', String, true)
  public qualification: string = undefined;

  @JsonProperty('date', String, true)
  public date: string = undefined;

}