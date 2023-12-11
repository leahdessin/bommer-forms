

export declare namespace PropertyType {
    export type TrueFalse = {"_name": "TrueFalse", _hx_index: 2, __enum__: "bommer_platform.model.PropertyType"}
    export const TrueFalse: TrueFalse
    export type Text = {"_name": "Text", _hx_index: 1, __enum__: "bommer_platform.model.PropertyType"}
    export const Text: Text
    export type Number = {"_name": "Number", _hx_index: 6, __enum__: "bommer_platform.model.PropertyType"}
    export const Number: Number
    export type MultipleChoice = {"_name": "MultipleChoice", _hx_index: 3, values: string[], allowNewValues: boolean, __enum__: "bommer_platform.model.PropertyType"}
    export const MultipleChoice: (values: string[], allowNewValues: boolean) => PropertyType
    export type Decimal = {"_name": "Decimal", _hx_index: 5, __enum__: "bommer_platform.model.PropertyType"}
    export const Decimal: Decimal
}

export declare type PropertyType =
    | PropertyType.TrueFalse
    | PropertyType.Text
    | PropertyType.Number
    | PropertyType.MultipleChoice
    | PropertyType.Decimal

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