export class Flat {
  city; //string
  streetName; //string
  streetNumber; //number
  areaSize; //number
  yearBuilt; //number
  rentPrice; //number
  dateAvailable; //date
  hasAC; // boolean
  favourite; //boolean

  constructor(
    city,
    streetName,
    streetNumber,
    areaSize,
    yearBuilt,
    rentPrice,
    dateAvailable,
    hasAC,
    favourite
  ) {
    this.city = city;
    this.streetName = streetName;
    this.streetNumber = streetNumber;
    this.areaSize = areaSize;
    this.yearBuilt = yearBuilt;
    this.rentPrice = rentPrice;
    this.dateAvailable = dateAvailable;
    this.hasAC = hasAC;
    this.favourite = favourite
  }

  //GETTER
  get city() {
    return this.city;
  }
  get streetName() {
    return this.streetName;
  }
  get streetNumber() {
    return this.streetNumber;
  }
  get areaSize() {
    return this.areaSize;
  }
  get yearBuilt() {
    return this.yearBuilt;
  }
  get rentPrice() {
    return this.rentPrice;
  }
  get dateAvailable() {
    return this.dateAvailable;
  }
  get hasAC() {
    return this.hasAC;
  }

  get favourite(){
    return this.favourite
  }

  





  //SETTER
  set city(newCity) {
    this.city = newCity;
  }
  set streetName(newStreetName) {
    this.streetName = newStreetName;
  }

  set streetNumber(newStreetNumber) {
    this.streetNumber = newStreetNumber;
  }

  set areaSize(newAreaSize) {
    this.areaSize = newAreaSize;
  }

  
  set yearBuilt(newYearBuilt) {
    this.yearBuilt = newYearBuilt;
  }
  
  set rentPrice(newRentPrice) {
    this.rentPrice = newRentPrice;
  }
  
  set dateAvailable(newDateAvailable) {
    this.dateAvailable = newDateAvailable;
  }
  set hasAC(newHasAC) {
    this.hasAC = newHasAC;
  }

  set favourite(newFavourite) {
    this.favourite = newFavourite
  }

}


