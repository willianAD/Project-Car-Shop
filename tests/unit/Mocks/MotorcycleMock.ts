const modelName = 'Honda Cb 600f Hornet';

const allMotorcycles = [
  {
    id: '64495632954562d93033d976',
    model: modelName,
    year: 2014,
    color: 'Red',
    status: true,
    buyValue: 45.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '64495686954562d93033d978',
    model: 'Yamaha Fazer 250',
    year: 2022,
    color: 'Preta',
    status: true,
    buyValue: 25.000,
    category: 'Street',
    engineCapacity: 250,
  },
  {
    id: '64495692954562d93033d97a',
    model: 'Honda Cb 1000f',
    year: 2018,
    color: 'Captão America',
    status: true,
    buyValue: 50.000,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const oneMotorcycles = {
  id: '64495692954562d93033d97a',
  model: modelName,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const newMotorcycles = {
  model: modelName,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const newMotorcyclesOK = {
  id: undefined,
  model: modelName,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

const updateMotorcycles = {
  id: undefined,
  model: 'Honda Cb 1000f',
  year: 2019,
  color: 'Yellow',
  status: true,
  buyValue: 54.000,
  category: 'Street',
  engineCapacity: 1000,
};

export { allMotorcycles, oneMotorcycles, newMotorcycles, newMotorcyclesOK, updateMotorcycles };
