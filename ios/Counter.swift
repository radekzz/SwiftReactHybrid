//
//  Counter.swift
//  SwiftReactHybrid
//
//  Created by Radek Mezulanik on 14.03.2022.
//

import Foundation

@objc(Counter)
class Counter: NSObject {
  
  @objc
    static func requiresMainQueueSetup() -> Bool {
      return true
    }
  
  @objc
  func getDevice(_ callback: RCTResponseSenderBlock) {
    getDeviceInfo()
    callback([
      myString,               // variable
      123.9,               // int or float
      "third argument",    // string
      [1, 2.2, "3"],       // array
      ["a": 1, "b": 2]     // object
    ])
  }
  
  private var myString = "no way"
  @objc
  func getDeviceInfo(){
    myString = "hell yeah!"
      }
  
  @objc
   func getCount(_ callback: RCTResponseSenderBlock) {
     callback([
       count,               // variable
       123.9,               // int or float
       "third argument",    // string
       [1, 2.2, "3"],       // array
       ["a": 1, "b": 2]     // object
     ])
   }
  
  private var count = 0
  @objc
    func increment() {
      count += 1
      print("Swift say: Counter is \(count)")
    }
  
  @objc
    func decrement(
      _ resolve: RCTPromiseResolveBlock,
      rejecter reject: RCTPromiseRejectBlock
    ) -> Void {
      if (count == 0) {
        let error = NSError(domain: "", code: 200, userInfo: nil)
        reject("E_COUNT", "Swift say: Count cannot be negative", error)
      } else {
        count -= 1
        resolve("Swift say: Count was decremented")
      }
    }
  
}
