import Helper from '../utils/Helper';

const hashed = Helper.hashPassword('vvvvvv');

const createUser = `
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    address)
  VALUES('viola1@mail.com',
    'Viola',
    'Violet',
    '${hashed}',
    'No 42, Anfield Road, Liverpool, England')
  RETURNING *;
  
  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    address,
    is_admin)
  VALUES('viola2@mail.com',
    'Georgina',
    'Violet',
    '${hashed}',
    'No 42, Anfield Road, Liverpool, England',
    true)
  RETURNING *;

  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    address)
  VALUES('viola3@mail.com',
    'Alexa',
    'Violet',
    '${hashed}',
    'No 42, Anfield Road, Liverpool, England')
  RETURNING *;

  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    address)
  VALUES('viola4@mail.com',
    'Alexis',
    'Violet',
    '${hashed}',
    'No 42, Anfield Road, Liverpool, England')
  RETURNING *;

  INSERT INTO users(email,
    first_name,
    last_name,
    password,
    address)
  VALUES('viola5@mail.com',
    'John',
    'Violet',
    '${hashed}',
    'No 42, Anfield Road, Liverpool, England')
  RETURNING *;
`;

const createCar = `
  INSERT INTO cars(owner,
    state,
    price,
    manufacturer,
    model,
    body_type)
  VALUES(1,
    'used',
    349956.45,
    'Toyota',
    'Yaris',
    'Sedan')
  RETURNING *;
  
  INSERT INTO cars(owner,
    state,
    status,
    price,
    manufacturer,
    model,
    body_type)
  VALUES(2,
    'new',
    'sold',
    757644.44,
    'Porsche',
    '911 Carrera',
    'Sedan')
  RETURNING *;

  INSERT INTO cars(owner,
    state,
    price,
    manufacturer,
    model,
    body_type)
  VALUES(2,
    'new',
    222990.65,
    'McLaren',
    '720 S',
    'Convertible')
  RETURNING *;
  `;

const createSeedsQuery = `${createUser}${createCar}`;

export default createSeedsQuery;
