# @samatawy/rules-science

Science-oriented function providers for [@samatawy/rules](https://www.npmjs.com/package/@samatawy/rules).

This package is designed as an optional plugin. It keeps chemistry and physics helpers outside the core rules engine package while still integrating through the same `FunctionFactory.registerProvider(...)` API.

It currently exposes `37` functions in total (one of them being an alias). Data is provided for `118` periodic table elements.

To report any incorrect data or behaviour, or to request additional features, feel free to [post an issue on Github](https://github.com/samatawy/rules-science/issues).

This package can be used by:

- Node.js and browser runtimes
- ESM and CommonJS consumers

## Installation

```bash
npm install @samatawy/rules @samatawy/rules-science
```

`@samatawy/rules` is a peer dependency, so your application provides the core engine version.

## Usage

```ts
import { FunctionFactory, Workspace } from '@samatawy/rules';
import {
  CommonChemistryFunctionsProvider,
  PhysicsConstantsProvider,
} from '@samatawy/rules-science';

FunctionFactory.registerProvider(CommonChemistryFunctionsProvider);
FunctionFactory.registerProvider(PhysicsConstantsProvider);

const workspace = new Workspace();
workspace.addRule('if molecular_weight("H2O") > 18 then result.kind = "waterlike"');
workspace.addRule('if avogadro() > 1e23 then result.ready = true');
```

You can also register both providers together:

```ts
import { registerScienceProviders } from '@samatawy/rules-science';

registerScienceProviders();
```

The same package entry works in both Node.js and browser builds, with ESM and CommonJS output generated from the same source.

## Included Providers

- `CommonChemistryFunctionsProvider`
- `PhysicsConstantsProvider`

There are `20` chemistry-related functions and `17` physics-related constants (as functions: one of them being an alias).

## Common Chemistry Functions

- `element_symbols()`
- `short_formula(formula)`
- `molecular_weight(formula)`
- `atoms_of_element(element, formula)`
- `fractional_weight_of_element(element, formula)`
- `atomic_number(symbol)`
- `atomic_weight(symbol)`
- `element_name(symbol)`
- `electron_configuration(symbol)`
- `valence_electrons(symbol)`
- `common_oxidation_states(symbol)`
- `electronegativity(symbol)`
- `atomic_radius_pm(symbol)`
- `ionization_energy_kj_mol(symbol)`
- `electron_affinity_kj_mol(symbol)`
- `phase_at_stp(symbol)`
- `melting_point_k(symbol)`
- `boiling_point_k(symbol)`
- `density_g_cm3(symbol)`

## Physics Constants

- `c()` or `speed_of_light()`
- `g()`
- `golden_ratio()`
- `avogadro()`
- `planck()`
- `electron_mass()`
- `proton_mass()`
- `neutron_mass()`
- `boltzmann()`
- `gas_constant()`
- `faraday()`
- `gravitational_constant()`
- `molecular_mass_unit()`
- `bohr_radius()`
- `rydberg_constant()`
- `stefan_boltzmann_constant()`
- `elementary_charge()`
