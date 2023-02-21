export function stringOrVariable(val: string) {
    if (val.startsWith('$')) {
        return `var(--theme-${val.slice(1)})`
    }
    return val
}