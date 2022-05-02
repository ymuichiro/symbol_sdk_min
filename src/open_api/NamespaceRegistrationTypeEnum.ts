/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Type of namespace:
 * * 0 - Root namespace.
 * * 1 - Subnamespace.
 * @export
 * @enum {string}
 */
export declare enum NamespaceRegistrationTypeEnum {
    NUMBER_0 = 0,
    NUMBER_1 = 1
}
export declare function NamespaceRegistrationTypeEnumFromJSON(json: any): NamespaceRegistrationTypeEnum;
export declare function NamespaceRegistrationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTypeEnum;
export declare function NamespaceRegistrationTypeEnumToJSON(value?: NamespaceRegistrationTypeEnum | null): any;