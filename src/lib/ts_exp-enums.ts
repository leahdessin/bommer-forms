
/* tslint:disable */// Generated by Haxe TypeScript Declaration Generator :)

export const PropertyType = {
    Text: { _hx_name: "Text" },
    TrueFalse: { _hx_name: "TrueFalse" },
    MultipleChoice: function(values: string[], allowNewValues: boolean) { return ({ _hx_name: "MultipleChoice", values: values, allowNewValues: allowNewValues }) as { _hx_name: "MultipleChoice", values: string[], allowNewValues: boolean }; },
    Decimal: { _hx_name: "Decimal" },
    Number: { _hx_name: "Number" },
} as const;
export type PropertyType =  { _hx_name: "Text" } | { _hx_name: "TrueFalse" } | { _hx_name: "MultipleChoice", values: string[], allowNewValues: boolean } |  { _hx_name: "Decimal" } | { _hx_name: "Number" }