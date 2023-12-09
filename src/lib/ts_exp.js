
var $estr = function() { return JSON.stringify(this); },$_

export var PropertyType = { __ename__:"bommer_platform.model.PropertyType",__constructs__:null
  ,Text: {_hx_name:"Text",_hx_index:1,__enum__:"bommer_platform.model.PropertyType",toString:$estr}
  ,TrueFalse: {_hx_name:"TrueFalse",_hx_index:2,__enum__:"bommer_platform.model.PropertyType",toString:$estr}
  ,MultipleChoice: ($_=function(values,allowNewValues) { return {_hx_index:3,values:values,allowNewValues:allowNewValues,__enum__:"bommer_platform.model.PropertyType",toString:$estr}; },$_._hx_name="MultipleChoice",$_.__params__ = ["values","allowNewValues"],$_)
  ,Decimal: {_hx_name:"Decimal",_hx_index:5,__enum__:"bommer_platform.model.PropertyType",toString:$estr}
  ,Number: {_hx_name:"Number",_hx_index:6,__enum__:"bommer_platform.model.PropertyType",toString:$estr}
};
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
    other._values = this._values.copy();
    return other;
  }
}
