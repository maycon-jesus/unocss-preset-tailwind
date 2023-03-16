import { describe, expect } from '@jest/globals';
import { ArbitraryPropertiesRules } from '../../../src/rules/core/arbitraryValues';

describe('Test rule arbitraryValues', () => {
    for (const rule of ArbitraryPropertiesRules) {
        const matcher = rule[0] as RegExp;
        const executor = rule[1] as any;
        
        test('Matcher', () => {
            expect(matcher.test('[alo:teste]')).toEqual(true);
            expect(matcher.test('[d8_&9t7e5461g:23r4f1w6&8*5s]')).toEqual(true);
            expect(matcher.test('[d8_&9t7e5461g-23r4f1w6&8*5s]')).toEqual(
                false
            );
            expect(matcher.test('d8_&9t7e5461g:23r4f1w6&8*5s')).toEqual(false);
        });

        test('Executor', () => {
            const exec = matcher.exec('[teste:alo]') as any;
            expect(exec).toBeTruthy();
            expect(executor([exec[0], exec[1], exec[2]])).toMatchObject({
                teste: 'alo',
            });
        });
    }
});
