define({ 

  checkiOSCameraPermission: function(){

    kony.print("function: checkiOSPermissions for Camera");

    let result = kony.application.checkPermission(kony.os.RESOURCE_CAMERA);
    kony.print("iOS checkPermission result: " + JSON.stringify(result));
    if (result.status === kony.application.PERMISSION_DENIED) {
      kony.print("PERMISSION_DENIED");
      if(result.canRequestPermission === true){
        kony.application.requestPermission(kony.os.RESOURCE_CAMERA, this.requestCameraPermissionCallback.bind(this));
      } else{
        //TODO: Programmer shall alert the user to enable permissions via Settings
      }
    } else if (result.status === kony.application.PERMISSION_RESTRICTED) {
      kony.print("PERMISSION_RESTRICTED");
      //TODO: Programmer shall alert the user to enable permissions via Settings
    } else if (result.status === kony.application.PERMISSION_GRANTED){
      kony.print("PERMISSION_GRANTED");
      //TODO: Programmer can startScanning
      scanQRFromCameraiOS();
    }

  },

  requestCameraPermissionCallback: function(response){
    kony.print("requestCameraPermissionCallback result is: " + JSON.stringify(response));
    if(response.status == kony.application.PERMISSION_GRANTED) { 
      //TODO: Programmer can startScanning
      scanQRFromCameraiOS();
    } else if(response.status == kony.application.PERMISSION_DENIED) {
      //TODO: Return to the programmer
    } else {
      //TODO: Return to the programmer
    }
  },


  checkiOSGalleryPermission: function(){

    kony.print("function: checkiOSPermissions for Gallery");

    let result = kony.application.checkPermission(kony.os.RESOURCE_PHOTO_GALLERY);
    kony.print("iOS checkPermission result: " + JSON.stringify(result));
    if (result.status === kony.application.PERMISSION_DENIED) {
      kony.print("PERMISSION_DENIED");
      if(result.canRequestPermission === true){
        kony.application.requestPermission(kony.os.RESOURCE_PHOTO_GALLERY, this.requestGalleryPermissionCallback.bind(this));
      } else {
        //TODO: Programmer shall alert the user to enable permissions via Settings
      }
    } else if (result.status === kony.application.PERMISSION_RESTRICTED) {
      kony.print("PERMISSION_RESTRICTED");
      //TODO: Programmer shall alert the user to enable permissions via Settings
    } else if (result.status === kony.application.PERMISSION_GRANTED){
      kony.print("PERMISSION_GRANTED");
      //TODO: Programmer can startScanning
      scanQRFromGalleryiOS();
    }

  },

  requestGalleryPermissionCallback: function(response){
     kony.print("requestGalleryPermissionCallback result is: " + JSON.stringify(response));
    if(response.status == kony.application.PERMISSION_GRANTED) { 
      //TODO: Start Scanning
      scanQRFromGalleryiOS();
    } else if(response.status == kony.application.PERMISSION_DENIED) {
       //TODO: Programmer shall alert the user to enable permissions via Settings
    } else {
       //TODO: Programmer shall alert the user to enable permissions via Settings
    }
  },

  scanQRFromCameraiOS: function(){

    kony.print("function: scanQRFromCameraiOS");
    NSWrapper.NSQRWrapperWithCallBack("","",this.scanQRFromCameraiOSCallback);

  },

  scanQRFromCameraiOSCallback(result){

    kony.print("function: scanQRFromCameraiOSCallback");
    kony.print(JSON.stringify(result));
    //var resultString = JSON.stringify(result);
    //this.view.lblResult.text = resultString;

  },

  scanQRFromGalleryiOS: function(){

    NSWrapper.NSQRFromGalleryWrapperWithCallBack("","",this.scanQRFromGalleryiOSCallback);

  },

  scanQRFromGalleryiOSCallback(result){

    kony.print("function: scanQRFromGalleryiOSCallback");
    var resultString = JSON.stringify(result);
    kony.print(JSON.stringify(result));
    //this.view.lblResult.text = resresultString;


  }

});
