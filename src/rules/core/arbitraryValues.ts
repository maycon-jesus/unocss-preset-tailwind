import { Rule } from "@unocss/core";

export const ArbitraryPropertiesRules:Rule[] = [
    [/^\[(.+):(.+)\]$/, ([_,a,b])=> ({
        [a]: b
    })]
]