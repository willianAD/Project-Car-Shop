const allCars = [
  {
    id: '64495632954562d93033d976',
    model: 'uno',
    year: 2008,
    color: 'Green',
    status: true,
    buyValue: 11.99,
    doorsQty: 2,
    seatsQty: 3,
  },
  {
    id: '64495686954562d93033d978',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '64495692954562d93033d97a',
    model: 'Golf',
    year: 2022,
    color: 'Black',
    status: true,
    buyValue: 95.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

const oneCar = {
  id: '64495692954562d93033d97a',
  model: 'Golf',
  year: 2022,
  color: 'Black',
  status: true,
  buyValue: 95.99,
  doorsQty: 4,
  seatsQty: 5,
};

const newCar = {
  model: 'Golf',
  year: 2022,
  color: 'Black',
  status: true,
  buyValue: 95.99,
  doorsQty: 4,
  seatsQty: 5,
};

const newCarOK = {
  id: undefined,
  model: 'Golf',
  year: 2022,
  color: 'Black',
  status: true,
  buyValue: 95.99,
  doorsQty: 4,
  seatsQty: 5,
};

const updateCar = {
  id: undefined,
  model: 'Golf',
  year: 2023,
  color: 'Blue',
  status: true,
  buyValue: 150.99,
  doorsQty: 4,
  seatsQty: 5,
};

export { allCars, oneCar, newCar, newCarOK, updateCar };
