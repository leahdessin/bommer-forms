
var $estr = function() { return JSON.stringify(this); },$_

export var PropertyType = {
  __ename__: "bommer_platform.model.PropertyType",

  Text: {_hx_name: "Text", _hx_index: 1, __enum__: "bommer_platform.model.PropertyType", "_name": "Text"},
  TrueFalse: {_hx_name: "TrueFalse", _hx_index: 2, __enum__: "bommer_platform.model.PropertyType", "_name": "TrueFalse"},
  MultipleChoice: Object.assign((values, allowNewValues) => ({_hx_index: 3, __enum__: "bommer_platform.model.PropertyType", "values": values, "allowNewValues": allowNewValues, "_name": "MultipleChoice"}), {_hx_name: "MultipleChoice", __params__: ["values", "allowNewValues"]}),
  Decimal: {_hx_name: "Decimal", _hx_index: 5, __enum__: "bommer_platform.model.PropertyType", "_name": "Decimal"},
  Number: {_hx_name: "Number", _hx_index: 6, __enum__: "bommer_platform.model.PropertyType", "_name": "Number"},
}

export class ValueAndUnit {
  constructor(value, unit, error) {
    this.value = value
    this.unit = unit
    this.error = error
  }
}

export class UserProperty {
  constructor(id, category, name, propertyType, isReadOnly) {
    this.id = id
    this.category = category
    this.name = name
    this.propertyType = propertyType
    this.isReadOnly = isReadOnly
  }
  static Null = new UserProperty("", "", "", PropertyType.Text, true)
}

export class ComponentValues {
  constructor() {
    this._values = new Map()
  }

  valueCount() {
    return this._values.entries.length
  }

  getValue(prop) {
    let key = prop.id
    let value = this._values.get(key)
    if (value != null) {
      return value
    }
    return null
  }

  setValue(prop, value) {
    let k = prop.id
    if (value == null) {
      this._values.delete(k)
      return
    } else {
      let v = new ValueAndUnit(value.value, value.unit, null)
      this._values.set(k, v)
    }
  }

  copy() {
    let other = new ComponentValues();
    other._values = new Map(this._values);
    return other;
  }
}
