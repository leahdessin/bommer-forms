

export namespace PropertyType {
    var Text: { _hx_index: 1 };
    var TrueFalse: { _hx_index: 2 };
    function MultipleChoice(values: string[], allowNewValues: boolean): { _hx_index: 3, values: string[], allowNewValues: boolean };
    var Decimal: { _hx_index: 5 };
    var Number: { _hx_index: 6 };
}

export type PropertyType =  { _hx_index: 1 } | { _hx_index: 2 } | { _hx_index: 3, values: string[], allowNewValues: boolean } |  {  _hx_index: 5 } | { _hx_index: 6 }

export class ValueAndUnit {
    constructor(value: any | null, unit: string | null, error: string | null);
    readonly value: any | null;
    readonly unit: string | null;
    readonly error: string | null;
}

export class UserProperty {
    constructor(id: string, category: string, name: string, propertyType: PropertyType, isReadOnly: boolean);
    readonly id: string;
    readonly category: string;
    readonly name: string;
    readonly propertyType: PropertyType;
    readonly isReadOnly: boolean;
    static readonly Null: UserProperty;
}

export class ComponentValues {
    constructor();
    copy(): ComponentValues;
    valueCount(): number;
    getValue(prop: UserProperty): ValueAndUnit;
    setValue(prop: UserProperty, value: ValueAndUnit): void;
}