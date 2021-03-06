//
//  Counter.m
//  SwiftReactHybrid
//
//  Created by Radek Mezulanik on 14.03.2022.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(Counter, NSObject)

RCT_EXTERN_METHOD(getCount: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(increment)

RCT_EXTERN_METHOD(getDevice: (RCTResponseSenderBlock)callback)

RCT_EXTERN_METHOD(
  decrement: (RCTPromiseResolveBlock)resolve
  rejecter: (RCTPromiseRejectBlock)reject
)


@end
