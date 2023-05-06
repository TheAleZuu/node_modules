import { EndpointParameterInstructions } from "@aws-sdk/middleware-endpoint";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer, MiddlewareStack } from "@aws-sdk/types";
import { StartDeviceAuthorizationRequest, StartDeviceAuthorizationResponse } from "../models/models_0";
import { ServiceInputTypes, ServiceOutputTypes, SSOOIDCClientResolvedConfig } from "../SSOOIDCClient";
/**
 * @public
 *
 * The input for {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandInput extends StartDeviceAuthorizationRequest {
}
/**
 * @public
 *
 * The output of {@link StartDeviceAuthorizationCommand}.
 */
export interface StartDeviceAuthorizationCommandOutput extends StartDeviceAuthorizationResponse, __MetadataBearer {
}
/**
 * @public
 * <p>Initiates device authorization by requesting a pair of verification codes from the
 *       authorization service.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, StartDeviceAuthorizationCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, StartDeviceAuthorizationCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const input = { // StartDeviceAuthorizationRequest
 *   clientId: "STRING_VALUE", // required
 *   clientSecret: "STRING_VALUE", // required
 *   startUrl: "STRING_VALUE", // required
 * };
 * const command = new StartDeviceAuthorizationCommand(input);
 * const response = await client.send(command);
 * // { // StartDeviceAuthorizationResponse
 * //   deviceCode: "STRING_VALUE",
 * //   userCode: "STRING_VALUE",
 * //   verificationUri: "STRING_VALUE",
 * //   verificationUriComplete: "STRING_VALUE",
 * //   expiresIn: Number("int"),
 * //   interval: Number("int"),
 * // };
 *
 * ```
 *
 * @param StartDeviceAuthorizationCommandInput - {@link StartDeviceAuthorizationCommandInput}
 * @returns {@link StartDeviceAuthorizationCommandOutput}
 * @see {@link StartDeviceAuthorizationCommandInput} for command's `input` shape.
 * @see {@link StartDeviceAuthorizationCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for SSOOIDCClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a
 *       request.</p>
 *
 * @throws {@link InvalidClientException} (client fault)
 *  <p>Indicates that the <code>clientId</code> or <code>clientSecret</code> in the request is
 *       invalid. For example, this can occur when a client sends an incorrect <code>clientId</code> or
 *       an expired <code>clientSecret</code>.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a required
 *       parameter might be missing or out of range.</p>
 *
 * @throws {@link SlowDownException} (client fault)
 *  <p>Indicates that the client is making the request too frequently and is more than the
 *       service can handle. </p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>Indicates that the client is not currently authorized to make the request. This can happen
 *       when a <code>clientId</code> is not issued for a public client.</p>
 *
 * @throws {@link SSOOIDCServiceException}
 * <p>Base exception class for all service exceptions from SSOOIDC service.</p>
 *
 */
export declare class StartDeviceAuthorizationCommand extends $Command<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput, SSOOIDCClientResolvedConfig> {
    readonly input: StartDeviceAuthorizationCommandInput;
    static getEndpointParameterInstructions(): EndpointParameterInstructions;
    /**
     * @public
     */
    constructor(input: StartDeviceAuthorizationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSOOIDCClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartDeviceAuthorizationCommandInput, StartDeviceAuthorizationCommandOutput>;
    /**
     * @internal
     */
    private serialize;
    /**
     * @internal
     */
    private deserialize;
}
