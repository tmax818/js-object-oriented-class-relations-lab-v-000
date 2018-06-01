let store = {
  drivers: [],
  passengers: [],
  trips: []
};

let userId = 0;

class Driver {
  constructor (name) {
    this.id = ++userId;
    this.name = name;
    
    store.drivers.push(this);
  }
  
  trips() {
    console.log(store.trips.filter(x => x.driverId === this.id));
  }
}

class Passenger {
  constructor (name) {
    this.id = ++userId;
    this.name = name;
    
    store.passengers.push(this);
  }
}

class Trip {
  constructor (driver, passenger) {
    this.id = ++userId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;
    
    store.trips.push(this)
  }
  
  passenger() {
    return store.passengers.filter(x => { return x.id === this.passengerId})[0];
   } 
  driver() {
    return store.drivers.filter(x => { return x.id === this.driverId})[0];
   }
}