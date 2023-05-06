import { HttpResponse } from "@aws-sdk/types";
import { IncomingMessage, Server as HttpServer, ServerResponse } from "http";
import { Http2Server } from "http2";
import { Server as HttpsServer } from "https";
export declare const createResponseFunction: (
  httpResp: HttpResponse
) => (request: IncomingMessage, response: ServerResponse) => void;
export declare const createResponseFunctionWithDelay: (
  httpResp: HttpResponse,
  delay: number
) => (request: IncomingMessage, response: ServerResponse) => void;
export declare const createContinueResponseFunction: (
  httpResp: HttpResponse
) => (request: IncomingMessage, response: ServerResponse) => void;
export declare const createMockHttpsServer: () => HttpsServer;
export declare const createMockHttpServer: () => HttpServer;
export declare const createMockHttp2Server: () => Http2Server;
