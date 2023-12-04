
import { PropertyType } from "./ts_exp-enums";

export class ValueAndUnit {
    constructor(value: any | null, unit: string | null, error: string | null);
    readonly value: any | null;
    readonly unit: string | null;
    readonly error: string | null;
}

export class UserProperty {
    constructor(id: string, category: string, name: string, propertyType: PropertyType);
    readonly id: string;
    readonly category: string;
    readonly name: string;
    readonly propertyType: PropertyType;
    static readonly Null: UserProperty;
}

export class ComponentValues {
    constructor();
    valueCount(): number;
    getValue(prop: UserProperty): ValueAndUnit;
    setValue(prop: UserProperty, value: ValueAndUnit): void;
}