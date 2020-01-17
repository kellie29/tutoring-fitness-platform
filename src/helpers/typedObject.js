// @flow

export type TypedObject<
  TObjectType: string,
  TObjectData: {},
  TObjectBaseData: {} = {||},
> = $ReadOnly<{|
  ...TObjectBaseData,
  type: TObjectType,
  data: TObjectData,
|}>;

type TypedObjectBaseData<TObjectTypeToObject: {}> = $Rest<
  $Values<TObjectTypeToObject>,
  {|
    type: mixed,
    data: mixed,
  |},
>;

type TypedObjectTypeToData<TObjectTypeToObject: {}> = $ObjMap<
  TObjectTypeToObject,
  <TObject>(TObject) => $PropertyType<TObject, 'data'>,
>;

export type AbstractTypedObject<TObjectTypeToObject: {}> = {|
  baseData: $Shape<TypedObjectBaseData<TObjectTypeToObject>>,
  type: $Keys<TObjectTypeToObject> | null,
  typeToData: $Shape<TypedObjectTypeToData<TObjectTypeToObject>>,
|};

export function abstractConcreteTypedObject<TObjectTypeToObject: {}>(
  typedObject: $Values<TObjectTypeToObject>,
): AbstractTypedObject<TObjectTypeToObject> {
  const { type, data, ...baseData } = typedObject;

  return {
    baseData,
    type,
    typeToData: {
      [type]: data,
    },
  };
}

export function concreteAbstractTypedObject<TObjectTypeToObject: {}>(
  abstractTypedObject: AbstractTypedObject<TObjectTypeToObject>,
): $Values<TObjectTypeToObject> | null {
  const { baseData, type, typeToData } = abstractTypedObject;

  if (!type) return null;

  const data = typeToData[type];

  return {
    ...baseData,
    type,
    data,
  };
}

export type TypedObjectTypeFactory<
  TObjectTypeToObject: {},
  TObjectType: $Keys<TObjectTypeToObject>,
> = {|
  create: (
    data: $PropertyType<$ElementType<TObjectTypeToObject, TObjectType>, 'data'>,
    baseData: TypedObjectBaseData<TObjectTypeToObject>,
  ) => $ElementType<TObjectTypeToObject, TObjectType>,
  createAbstract: (
    typeToData?: $Shape<TypedObjectTypeToData<TObjectTypeToObject>>,
    baseData?: $Shape<TypedObjectBaseData<TObjectTypeToObject>>,
  ) => AbstractTypedObject<TObjectTypeToObject>,
|};

export function createTypedObjectTypeFactory<
  TObjectTypeToObject: {},
  TObjectType: $Keys<TObjectTypeToObject>,
>(type: TObjectType): TypedObjectTypeFactory<TObjectTypeToObject, TObjectType> {
  const create = (data, baseData) => {
    return {
      ...baseData,
      type,
      data,
    };
  };

  const createAbstract = (typeToData = {}, baseData = {}) => {
    return {
      baseData,
      type,
      typeToData,
    };
  };

  return {
    create,
    createAbstract,
  };
}

export type TypedObjectFactory<TObjectTypeToObject: {}> = {|
  create: <TObjectType: $Keys<TObjectTypeToObject>>(
    type: TObjectType,
    data: $PropertyType<$ElementType<TObjectTypeToObject, TObjectType>, 'data'>,
    baseData: TypedObjectBaseData<TObjectTypeToObject>,
  ) => $ElementType<TObjectTypeToObject, TObjectType>,
  createAbstract: (
    type?: $Keys<TObjectTypeToObject> | null,
    typeToData?: $Shape<TypedObjectTypeToData<TObjectTypeToObject>>,
    baseData?: $Shape<TypedObjectBaseData<TObjectTypeToObject>>,
  ) => AbstractTypedObject<TObjectTypeToObject>,
  abstract: (typedObject: $Values<TObjectTypeToObject>) => AbstractTypedObject<TObjectTypeToObject>,
  concrete: <TObjectType>(
    abstractTypedObject: AbstractTypedObject<TObjectTypeToObject>,
  ) => $Values<TObjectTypeToObject> | null,
|};

export function createTypedObjectFactory<
  TObjectTypeToObject: {},
>(): TypedObjectFactory<TObjectTypeToObject> {
  const create = (type, data, baseData = {}) => {
    return {
      ...baseData,
      type,
      data,
    };
  };

  const createAbstract = (type = null, typeToData = {}, baseData = {}) => {
    return {
      baseData,
      type,
      typeToData,
    };
  };

  const abstract = (typedObject) => {
    return abstractConcreteTypedObject(typedObject);
  };

  const concrete = (abstractTypedObject) => {
    return concreteAbstractTypedObject(abstractTypedObject);
  };

  return {
    create,
    createAbstract,
    abstract,
    concrete,
  };
}
