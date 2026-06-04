import { afterEach, describe, expect, it } from 'vitest';
import { ExpressionParser, FunctionFactory, Workspace } from '@samatawy/rules';
import {
    CommonChemistryFunctionsProvider,
    PhysicsConstantsProvider,
    registerScienceProviders,
    unregisterScienceProviders,
} from '../src';

afterEach(() => {
    unregisterScienceProviders();
});

describe('@samatawy/rules-science', () => {

    it('registers science providers with the core function factory', () => {
        FunctionFactory.unregisterProvider(CommonChemistryFunctionsProvider);
        FunctionFactory.unregisterProvider(PhysicsConstantsProvider);

        registerScienceProviders();

        const reservedNames = FunctionFactory.getReservedNames();
        expect(reservedNames.has('atomic_number')).toBe(true);
        expect(reservedNames.has('avogadro')).toBe(true);
        expect(reservedNames.has('element_symbols')).toBe(true);
    });

    it('evaluates chemistry and physics functions through parsed expressions', () => {
        FunctionFactory.unregisterProvider(CommonChemistryFunctionsProvider);
        FunctionFactory.unregisterProvider(PhysicsConstantsProvider);
        registerScienceProviders();

        const workspace = new Workspace();
        const parser = new ExpressionParser({ workspace });
        const context = workspace.loadContext({});

        expect(parser.parse('atomic_number("O")').evaluate(context)).toBe(8);
        expect(parser.parse('molecular_weight("H2O")').evaluate(context)).toBeCloseTo(18.015, 3);
        expect(parser.parse('element_symbols()').evaluate(context)).toContain('H');
        expect(parser.parse('avogadro()').evaluate(context)).toBe(6.02214076e23);

        const elements = parser.parse('element_symbols()').evaluate(context);
        console.debug(elements.length + ' elements');
    });
});
