#import <Foundation/Foundation.h>
#import "ASPObject.h"

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

#import "ASPAnnotation.h"


@protocol ASPAnnotationResponse
@end

@interface ASPAnnotationResponse : ASPObject


@property(nonatomic) ASPAnnotation* annotation;

@property(nonatomic) NSString* code;

@property(nonatomic) NSString* status;

@end