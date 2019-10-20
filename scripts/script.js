//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules


const Diagnostics = require('Diagnostics');
const Patches = require('Patches');
const NativeUI = require('NativeUI');
const Textures = require('Textures'); 
const Networking = require('Networking');
const Scene = require('Scene');
const Time = require('Time');


const index = 0;

// Create a configuration object
const configuration = {

  // The index of the selected item in the picker
  selectedIndex: index,

  // The image textures to use as the items in the picker
  items: [
    {image_texture: Textures.get('1')},
    {image_texture: Textures.get('2')},
    {image_texture: Textures.get('3')},
    {image_texture: Textures.get('4')},
    {image_texture: Textures.get('5')},
    {image_texture: Textures.get('6')}
  ]

};

// const pickedNumber = Patches.getScalarValue('pickedNumber');

// Diagnostics.log('pickedNumber');
// Diagnostics.log(pickedNumber);


const picker = NativeUI.picker;
picker.configure(configuration);
picker.visible = true;


var pickedNumber = -1

// var pickedNumber
picker.selectedIndex.monitor().subscribe(function(val) {
  //We are sending the "index" variable to the patch editor.
  //It is a number, so we are using a "Scalar" type of value.
  //The name of the variable that will appear in the patch editor is "texturePick"

  //We pass the value of the picked item (0  - 4 in this case)
  //to the "texturePick" variable inside of the "Variables From Script" patch.
  //You can set "texturePick" to be any name you want on the "From Script" area on
  //the inspector panel of the script file.
  // var pickedNumber = val.newValue
  // var picked
  pickedNumber = val.newValue
  Diagnostics.log(val.newValue);

  
  Patches.setScalarValue("texturePick", val.newValue);

  // TODO:
  intervalTimer = Time.setInterval(update, 1000);
});

// Diagnostics.log('subscribe pickedNumber');
// Diagnostics.log(pickedNumber);

// TODO:
// ============================================================ 
// getUV
// ============================================================
const getUV = () => {

  return 2.5348
  // const url = 'https://api.openuv.io/api/v1/uv?lat=40.73&lng=-73.99&dt=2018-01-24T10:50:52.283Z'
  
  // const appid = 'b67f4389794acb88cb241435da789eaf'
  // const lat = 40.73
  // const lon = -73.99
  // const url = `https://api.openweathermap.org/data/2.5/uvi?appid=b6907d289e10d714a6e88b30761fae2&lat=40.73&lon=-73.99`
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=London'
  // const url = 'https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22'
  

  // var bearer = 'Bearer ' + '9b7e0969efe474e7a1a374193ce546bb';



  // const request = {
    
  //   method: 'GET',
    

  //   // headers: {
  //   //   // withCredentials: true,
  //   //   // credentials: 'include',      
  //   //   // 'Content-type': 'application/json; charset=UTF-8', 
  //   //   'Content-Type': 'text/plain',
  //   //   // 'Authorization': '9b7e0969efe474e7a1a374193ce546bb'
  //   //   'x-access-token': '4479784b1ced6aa6c7f0e2ca168eeb4c'
  //   //   // 'Authorization': bearer,
  //   // }
  
  // }; 

  
  // request
  // Networking.fetch(url, request).then(((result) => {

  //   Diagnostics.log('result.status');
  //   Diagnostics.log(result.status);
  //   // Check the status of the result
  //   // (https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
  //   if ((result.status >= 200) && (result.status < 300)) {
  
  //     // If the request was successful, chain the JSON forward
  //     Diagnostics.log('Successfully request');
  //     Diagnostics.log(JSON.stringify(result));
  //     // Diagnostics.log(result);
  //     // Diagnostics.log(result.json());
  //     // TODO: why no response ... it works for POSTMAN
  //     Diagnostics.log(result.json());
  //     // return result.json()
      

  //     Diagnostics.log('uvIndex 139');
  //     Diagnostics.log(JSON.stringify(result));

  //     // return result
  //     return result.json();
      
  
  //   }
  
  //   // If the request was not successful, throw an error
  //   // throw new Error('HTTP status code - ' + result.status);  
  // }))
  // .then(function(json) {

  //   // Log the JSON obtained by the successful request
  //   Diagnostics.log('Successfully sent - ');
  //   // Diagnostics.log(json);
  // })
  // .catch(function(error) {
  
  //   // Log any errors that may have happened with the request
  //   Diagnostics.log('Error - ' + error);
  
  // });   

  // return 5
  
}



// getUV formula

// TODO:
// ============================================================ 
// tanningLevel
// ============================================================

var uvIndex = getUV()

Diagnostics.log('uvIndex 139');
Diagnostics.log(uvIndex);
Diagnostics.log('pickedNumber 179');
Diagnostics.log(pickedNumber);


const tanningLevel = () => {
  // const uv = xxx
  const levels = [5,10,15,25,45,90]
  
  const spf = 50
  const uvi = uvIndex

  Diagnostics.log('uvi 155');
  Diagnostics.log(uvi);

  Diagnostics.log('pickedNumber');
  Diagnostics.log(pickedNumber);
  var num = pickedNumber
  
  // const skipType = "Fair"
  
  // const maxTanningTime = (8 * levels[num] * spf) / uvi
  const maxTanningTime = (8 * levels[num] * spf) / uvi
  Diagnostics.log('maxTanningTime 110');
  Diagnostics.log(maxTanningTime);
  // const maxTanningTime = (8 * 100 * spf) / uvi

  
  if(isNaN(maxTanningTime)){
    return -1
  }

  Diagnostics.log('maxTanningTime 116');
  Diagnostics.log(maxTanningTime);
  
  
  // in minutes
  return maxTanningTime
  // return uvi
}

let i = 0.0
const maxTanningTime = tanningLevel()
  

function update(){

  Diagnostics.log('UPDATE')
  // TODO: replace with maxTanningTime
  if(i > 0.95){
    Time.clearInterval(intervalTimer);
    i = 0.95
  }

  i += Math.abs(1 / maxTanningTime / 20)
  // i = 1

  // DID:
  // update Value
  Scene.root.find('text0').text = i.toFixed(2).toString()
  Patches.setScalarValue('hotMeterValue', i)
}  

let intervalTimer
Diagnostics.log('maxTanningTime')
Diagnostics.log(maxTanningTime)

// intervalTimer = Time.setInterval(update, 1000);




// DID:
// update Value
// TODO: QUICK CHANGE
// Patches.setScalarValue('uvIndex', uvIndex)
Patches.setScalarValue('uvIndex', 1)

// const isOpened = Patches.getBooleanValue('isOpened');

// Diagnostics.log('isOpened')
// Diagnostics.log(isOpened)