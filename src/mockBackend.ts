import { ComponentValues, UserProperty, ValueAndUnit, PropertyType } from "./lib/ts_exp";

const testProperties = [
    new UserProperty('default0', 'General', 'Item #', PropertyType.Text, true), //0
    new UserProperty('default1', 'General', 'Part Name', PropertyType.Text, false), //1
    new UserProperty('default2', 'General', 'Exclude?', PropertyType.TrueFalse, false), //2
    new UserProperty('default15', 'General', 'Part?', PropertyType.TrueFalse, false), //3
    new UserProperty('default3', 'General', 'Part Number', PropertyType.Text, false), //4
    new UserProperty('default4', 'General', 'Description', PropertyType.Text, false), //5
    new UserProperty('default5', 'General', 'Make/Buy', PropertyType.MultipleChoice(['Buy', 'Make'], false), false), //6
    new UserProperty('default6', 'General', 'Quantity', PropertyType.Number, true), //7
    new UserProperty('default7', 'General', 'Order Quantity', PropertyType.Number, false), //8
    new UserProperty('default16', 'General', 'Material', PropertyType.Text, true), //9
    new UserProperty('default8', 'Vendor 1', 'Vendor', PropertyType.Text, false), //10
    new UserProperty('default9', 'Vendor 1', 'Vendor Desc', PropertyType.Text, false), //11
    new UserProperty('default10', 'Vendor 1', 'Vendor P/N', PropertyType.Text, false), //12
    new UserProperty('default11', 'Vendor 1', 'Vendor URL', PropertyType.Text, false), //13
    new UserProperty('default12', 'Vendor 1', 'Vendor Price', PropertyType.Text, false), //14
    new UserProperty('default13', 'Vendor 1', 'Vendor Lot Size', PropertyType.Text, false), //15
    new UserProperty('default14', 'Vendor 1', 'Vendor Stock', PropertyType.Text, false), //16
]

export function loadPropertiesFromBackend(): Promise<UserProperty[]> {
    return new Promise<UserProperty[]>((resolve, reject) => {
        resolve(testProperties);
    });
}

function loadValuesFromBackend(): Promise<ComponentValues> {

    return new Promise<ComponentValues>((resolve, reject) => {
        const values = new ComponentValues();
        // General
        values.setValue(testProperties[0], new ValueAndUnit("1.1", null, null));
        values.setValue(testProperties[1], new ValueAndUnit("Fastener, Steel", null, null));
        values.setValue(testProperties[2], new ValueAndUnit(false, null, null));
        values.setValue(testProperties[3], new ValueAndUnit(false, null, null));
        values.setValue(testProperties[4], new ValueAndUnit("P-F-0214", null, null));
        values.setValue(testProperties[5], new ValueAndUnit("A standard steel fastener", null, null));
        values.setValue(testProperties[6], new ValueAndUnit("Buy", null, null));
        values.setValue(testProperties[7], new ValueAndUnit("4", null, null));
        values.setValue(testProperties[9], new ValueAndUnit("Steel, Carbon", null, null));
        // Vendor info
        values.setValue(testProperties[10], new ValueAndUnit("McMaster Carr", null, null));
        values.setValue(testProperties[11], new ValueAndUnit("Some overpriced screw, you know you want it", null, null));
        values.setValue(testProperties[12], new ValueAndUnit("915034D135", null, null));
        values.setValue(testProperties[13], new ValueAndUnit("", null, null));
        values.setValue(testProperties[14], new ValueAndUnit("1.0", null, null));
        values.setValue(testProperties[15], new ValueAndUnit("1", null, null));
        values.setValue(testProperties[16], new ValueAndUnit("always", null, null));
        resolve(values);
    });
}


function saveValuesToBackend(newValues: ComponentValues) {
    for (const p of testProperties) {
        console.log(`saving ${p.name}: ${(newValues.getValue(p) || new ValueAndUnit("null", null, null)).value}`)
    }
}