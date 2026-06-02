export * from './periodic.table';
export * from './common.chemistry.functions';
export * from './constant.physics.functions';

import { FunctionFactory } from '@samatawy/rules';
import { CommonChemistryFunctionsProvider } from './common.chemistry.functions';
import { PhysicsConstantsProvider } from './constant.physics.functions';

export function registerScienceProviders(): void {
    FunctionFactory.registerProvider(CommonChemistryFunctionsProvider);
    FunctionFactory.registerProvider(PhysicsConstantsProvider);
}

export function unregisterScienceProviders(): void {
    FunctionFactory.unregisterProvider(CommonChemistryFunctionsProvider);
    FunctionFactory.unregisterProvider(PhysicsConstantsProvider);
}
