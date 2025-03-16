export class Flat {
  constructor(
    city,
    streetName,
    streetNumber,
    areaSize,
    yearBuilt,
    rentPrice,
    dateAvailable,
    hasAC,
    favourite,
    images = []
  ) {
    this._city = city;
    this._streetName = streetName;
    this._streetNumber = streetNumber;
    this._areaSize = areaSize;
    this._yearBuilt = yearBuilt;
    this._rentPrice = rentPrice;
    this._dateAvailable = dateAvailable;
    this._hasAC = hasAC;
    this._favourite = favourite;
    this._images = images;
  }

  // GETTERS
  get city() {
    return this._city;
  }
  get streetName() {
    return this._streetName;
  }
  get streetNumber() {
    return this._streetNumber;
  }
  get areaSize() {
    return this._areaSize;
  }
  get yearBuilt() {
    return this._yearBuilt;
  }
  get rentPrice() {
    return this._rentPrice;
  }
  get dateAvailable() {
    return this._dateAvailable;
  }
  get hasAC() {
    return this._hasAC;
  }
  get favourite() {
    return this._favourite;
  }
  get images() {
    return this._images;
  }

  // SETTERS
  set city(newCity) {
    this._city = newCity;
  }
  set streetName(newStreetName) {
    this._streetName = newStreetName;
  }
  set streetNumber(newStreetNumber) {
    this._streetNumber = newStreetNumber;
  }
  set areaSize(newAreaSize) {
    this._areaSize = newAreaSize;
  }
  set yearBuilt(newYearBuilt) {
    this._yearBuilt = newYearBuilt;
  }
  set rentPrice(newRentPrice) {
    this._rentPrice = newRentPrice;
  }
  set dateAvailable(newDateAvailable) {
    this._dateAvailable = newDateAvailable;
  }
  set hasAC(newHasAC) {
    this._hasAC = newHasAC;
  }
  set favourite(newFavourite) {
    this._favourite = newFavourite;
  }
  set images(newImages) {
    this._images = newImages;
  }
}
