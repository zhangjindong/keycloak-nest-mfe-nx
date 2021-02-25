import { HttpService } from '@nestjs/common';
import { Agent, RequestArgs } from './agent';

export default class Resource<ParamType = {}> {
  private agent: Agent;
  constructor(
    settings: {
      path?: string;
      getUrlParams?: () => Record<string, any>;
      getBaseUrl?: () => string;
    } = {},
    httpService: HttpService
  ) {
    this.agent = new Agent(
      {
        ...settings,
      },
      httpService
    );
  }

  public makeRequest = <PayloadType = any, ResponseType = any>(
    args: RequestArgs
  ): ((payload?: PayloadType & ParamType) => Promise<ResponseType>) => {
    return this.agent.request(args);
  };

  // update request will take three types: query, payload and response
  public makeUpdateRequest = <
    QueryType = any,
    PayloadType = any,
    ResponseType = any
  >(
    args: RequestArgs
  ): ((
    query: QueryType & ParamType,
    payload: PayloadType
  ) => Promise<ResponseType>) => {
    return this.agent.updateRequest(args);
  };
}
