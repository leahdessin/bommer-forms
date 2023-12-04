
import { PropertyType } from "./ts_exp-enums";

export class ValueAndUnit {
    constructor(value: any | null, unit: string | null, error: string | null) {
        this.value = value;
        this.unit = unit;
        this.error = error;
    }
    readonly value: any | null;
    readonly unit: string | null;
    readonly error: string | null;
}

export class UserProperty {
    constructor(id: string, category: string, name: string, propertyType: PropertyType, isReadOnly: boolean) {
        this.id = id;
        this.category = category;
        this.name = name;
        this.propertyType = propertyType;
        this.isReadOnly = isReadOnly;
    }
    readonly id: string;
    readonly category: string;
    readonly name: string;
    readonly propertyType: PropertyType;
    readonly isReadOnly: boolean;
    static readonly Null: UserProperty = new UserProperty('', '', '', PropertyType.Text, true);
}

export class ComponentValues {
    constructor() {
        this._values = new Map<string, ValueAndUnit>();
    }

    valueCount() {
        return this._values.entries.length;
    }

    getValue(prop:UserProperty) {
        let key = prop.id;
        let value = this._values[key];
        if(value != null) {
            return value;
        }
        return null;
    }

    setValue(prop:UserProperty, value: ValueAndUnit) {
        let k = prop.id;
        if(value == null) {
            this._values.delete(k);
            return;
        } else {
            let v = new ValueAndUnit(value.value,value.unit,null);
            this._values[k] = v;
        }
    }
    private readonly _values: Map<string, ValueAndUnit>;
}