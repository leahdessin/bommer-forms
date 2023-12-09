

export namespace PropertyType {
    var Text: { _hx_name: "Text" };
    var TrueFalse: { _hx_name: "TrueFalse" };
    function MultipleChoice(values: string[], allowNewValues: boolean): { _hx_name: "MultipleChoice", values: string[], allowNewValues: boolean };
    var Decimal: { _hx_name: "Decimal" };
    var Number: { _hx_name: "Number" };
}

export type PropertyType =  { _hx_name: "Text" } | { _hx_name: "TrueFalse" } | { _hx_name: "MultipleChoice", values: string[], allowNewValues: boolean } |  { _hx_name: "Decimal" } | { _hx_name: "Number" }

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