import { HttpHandler, HttpRequest, HttpResponse } from "@aws-sdk/protocol-http";
import { HttpHandlerOptions, Provider } from "@aws-sdk/types";
export interface NodeHttp2HandlerOptions {
  requestTimeout?: number;
  sessionTimeout?: number;
  disableConcurrentStreams?: boolean;
  maxConcurrentStreams?: number;
}
export declare class NodeHttp2Handler implements HttpHandler {
  private config?;
  private readonly configProvider;
  readonly metadata: {
    handlerProtocol: string;
  };
  private readonly connectionManager;
  constructor(
    options?: NodeHttp2HandlerOptions | Provider<NodeHttp2HandlerOptions | void>
  );
  destroy(): void;
  handle(
    request: HttpRequest,
    { abortSignal }?: HttpHandlerOptions
  ): Promise<{
    response: HttpResponse;
  }>;
  private destroySession;
}
