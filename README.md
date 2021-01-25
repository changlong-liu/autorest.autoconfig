# Autorest Test

See documentation [here](GUIDE.md)

``` yaml

az:
  autoconfig: true

try-require:
  - ./readme.python.md
  - ./readme.cli.md
  - ./readme.az.md

use-extension:
  # "@autorest/clicommon": "0.6.0"
  "@autorest/modelerfour": 4.15.421

pipeline:
    autoconfig:
        input: openapi-document/multi-api/identity  
        output-artifact: source-file
    autoconfig/emitter:
        input: autoconfig
        scope: scope-autoconfig/emitter

cli:
    naming:
        m4:
            parameter: 'snake'
            property: 'snake'
            operation: 'snake'
            operationGroup:  'snake'
            choice:  'pascal'
            choiceValue:  'pascal'
            constant:  'snake'
            type:  'snake'

modelerfour:
    lenient-model-deduplication: true
    group-parameters: true
    flatten-models: true
    flatten-payloads: true

# pipeline:
#     # python/m2r:
#     #     input: clicommon/cli-m4namer
#     autoconfig:
#         input:  clicommon/identity
#     autoconfig/emitter:
#         input: autoconfig
#         scope: scope-autoconfig/emitter

scope-autoconfig/emitter:
  input-artifact: source-file
  output-uri-expr: $key

output-artifact:
- source-file
```
