/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function (array) {
array.forEach(x => console.log(x))

};


/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function (temperatures) {

let array = temperatures.map(x => (x -32) * 5 / 9)
return array
}


/**************************************
* hottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
* - Accepts a threshold temperature
* - Returns an array of temperatures
*   that exceed the threshold
***************************************/
const hottestDays = function (temperatures, threshold) {


let array = temperatures.filter(x => {

    if (x > threshold) {
      return x
    }
  })
  return array
}


/******************************************
* logHottestDays(temperatures, threshold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function (temperatures, threshold) {

temperatures.forEach(x => {

  if (x > threshold){
  let    c = (x -32) * 5 / 9
    console.log(c);
  }
})


}


export { logger, toCelsius, hottestDays, logHottestDays }
