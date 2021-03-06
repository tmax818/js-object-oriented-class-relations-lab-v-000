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
    return store.trips.filter(x => {return x.driverId === this.id});
  }  
  passengers() {
    return store.passengers
  }
}

class Passenger {
  constructor (name) {
    this.id = ++userId;
    this.name = name;
    
    store.passengers.push(this);
  }
    trips() {
    return store.trips.filter(x => {return x.passengerId === this.id});
  }
  
    drivers() {
      return store.drivers
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