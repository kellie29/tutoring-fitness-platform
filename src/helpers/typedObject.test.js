// @flow

import uuidv4 from 'uuid/v4';
import invariant from 'invariant';

import {
  type TypedObject,
  type AbstractTypedObject,
  abstractConcreteTypedObject,
  concreteAbstractTypedObject,
  createTypedObjectFactory,
} from './typedObject';

type TypedObjectOneBaseData = {| id: string |};
type TypedObjectOneA = TypedObject<'oneA', {| oneADataProp: boolean |}, TypedObjectOneBaseData>;
type TypedObjectOneB = TypedObject<'oneB', {| oneBDataProp: boolean |}, TypedObjectOneBaseData>;
type TypedObjectOneTypeToObject = {|
  oneA: TypedObjectOneA,
  oneB: TypedObjectOneB,
|};
type TypedObjectOne = $Values<TypedObjectOneTypeToObject>;
type AbstractTypedObjectOne = AbstractTypedObject<TypedObjectOneTypeToObject>;

test('can abstract concrete object', () => {
  const typedObjectOne: TypedObjectOne = {
    id: uuidv4(),
    type: 'oneA',
    data: {
      oneADataProp: true,
    },
  };

  const abstractTypedObjectOne: AbstractTypedObjectOne = abstractConcreteTypedObject<TypedObjectOneTypeToObject>(
    typedObjectOne,
  );

  const { type, data, ...baseData } = typedObjectOne;

  expect(abstractTypedObjectOne.baseData).toEqual(baseData);
  expect(abstractTypedObjectOne.type).toEqual(type);
  expect(abstractTypedObjectOne.typeToData[type]).toEqual(data);
});

test('can concrete abstract object', () => {
  const abstractTypedObjectOne: AbstractTypedObjectOne = {
    baseData: {
      id: uuidv4(),
    },
    type: 'oneA',
    typeToData: {
      oneA: {
        oneADataProp: true,
      },
    },
  };

  const maybeTypedObjectOne = concreteAbstractTypedObject(abstractTypedObjectOne);

  expect(maybeTypedObjectOne).not.toBe(null);
  invariant(maybeTypedObjectOne, 'Expected "maybeTypedObjectOne"');

  const typedObjectOne: TypedObjectOne = maybeTypedObjectOne;

  const { baseData, type, typeToData } = abstractTypedObjectOne;
  invariant(type, 'Expected "type"');

  Object.keys(baseData).forEach((baseDataKey) => {
    expect(typedObjectOne[baseDataKey]).toEqual(baseData[baseDataKey]);
  });
  expect(typedObjectOne.type).toEqual(type);
  expect(typedObjectOne.data).toEqual(typeToData[type]);
});

test('can create factory', () => {
  const typedObjectOneFactory = createTypedObjectFactory<TypedObjectOneTypeToObject>();

  expect(typedObjectOneFactory).toMatchSnapshot();
});

test('factory can create', () => {
  const typedObjectOneFactory = createTypedObjectFactory<TypedObjectOneTypeToObject>();

  const createOptions = {
    type: ('oneA': 'oneA'),
    data: {
      oneADataProp: true,
    },
    baseData: {
      id: uuidv4(),
    },
  };
  const typedObjectOne: TypedObjectOne = typedObjectOneFactory.create(
    createOptions.type,
    createOptions.data,
    createOptions.baseData,
  );
  const { type, data, ...baseData } = typedObjectOne;

  expect(type).toEqual(createOptions.type);
  expect(data).toEqual(createOptions.data);
  expect(baseData).toEqual(createOptions.baseData);
});

test('factory can create abstract', () => {
  const typedObjectOneFactory = createTypedObjectFactory<TypedObjectOneTypeToObject>();

  const createOptions = {
    type: ('oneA': 'oneA'),
    typeToData: {
      oneA: { oneADataProp: true },
    },
    baseData: {
      id: uuidv4(),
    },
  };

  const abstractTypedObjectOne: AbstractTypedObjectOne = typedObjectOneFactory.createAbstract(
    createOptions.type,
    createOptions.typeToData,
    createOptions.baseData,
  );
  const { type, typeToData, baseData } = abstractTypedObjectOne;

  expect(type).toEqual(createOptions.type);
  expect(typeToData).toEqual(createOptions.typeToData);
  expect(baseData).toEqual(createOptions.baseData);
});

test('factory can abstract', () => {
  const typedObjectOneFactory = createTypedObjectFactory<TypedObjectOneTypeToObject>();

  const typedObjectOne: TypedObjectOne = {
    id: uuidv4(),
    type: 'oneA',
    data: {
      oneADataProp: true,
    },
  };
  const { type, data, ...baseData } = typedObjectOne;

  const abstractTypedObjectOne: AbstractTypedObjectOne = typedObjectOneFactory.abstract(
    typedObjectOne,
  );

  expect(abstractTypedObjectOne.type).toEqual(type);
  expect(abstractTypedObjectOne.typeToData[type]).toEqual(data);
  expect(abstractTypedObjectOne.baseData).toEqual(baseData);
});

test('factory can concrete', () => {
  const typedObjectOneFactory = createTypedObjectFactory<TypedObjectOneTypeToObject>();

  const abstractTypedObjectOne: AbstractTypedObjectOne = {
    baseData: {
      id: uuidv4(),
    },
    type: 'oneA',
    typeToData: {
      oneA: {
        oneADataProp: true,
      },
    },
  };

  const maybeTypedObjectOne = typedObjectOneFactory.concrete(abstractTypedObjectOne);

  expect(maybeTypedObjectOne).not.toBe(null);
  invariant(maybeTypedObjectOne, 'Expected "maybeTypedObjectOne"');

  const typedObjectOne: TypedObjectOne = maybeTypedObjectOne;

  const { baseData, type, typeToData } = abstractTypedObjectOne;
  invariant(type, 'Expected "type"');

  Object.keys(baseData).forEach((baseDataKey) => {
    expect(typedObjectOne[baseDataKey]).toEqual(baseData[baseDataKey]);
  });
  expect(typedObjectOne.type).toEqual(type);
  expect(typedObjectOne.data).toEqual(typeToData[type]);
});

// type TypedObjectTwoA = TypedObject<'twoA', {| twoADataProp: boolean |}>;
// type TypedObjectTwoB = TypedObject<'twoB', {| twoBDataProp: boolean |}>;
// type TypedObjectTwoTypeToObject = {|
//   twoA: TypedObjectTwoA,
//   twoB: TypedObjectTwoB,
// |};
// type TypedObjectTwo = $Values<TypedObjectTwoTypeToObject>;
// // type AbstractTypedObjectTwo = AbstractTypedObject<TypedObjectTwoTypeToObject>;

// test('can create factory without base data', () => {
//   const typedObjectTwoFactory = createTypedObjectFactory<TypedObjectTwoTypeToObject>();

//   expect(typedObjectTwoFactory).toMatchSnapshot();
// });

// test('factory without base data can create', () => {
//   const typedObjectTwoFactory = createTypedObjectFactory<TypedObjectTwoTypeToObject>();

//   const createOptions = {
//     type: 'twoA',
//     data: {
//       twoADataProp: true,
//     },
//   };
//   const typedObjectTwo: TypedObjectTwo = typedObjectTwoFactory.create(
//     createOptions.type,
//     createOptions.data,
//   );
//   const { type, data, ...baseData } = typedObjectTwo;

//   expect(type).toEqual(createOptions.type);
//   expect(data).toEqual(createOptions.data);
//   expect(baseData).toEqual({});
// });
