
## How It Works?

Generate *.md config files in Azure REST API specification:

https://github.com/Azure/azure-rest-api-specs

## How to Generate Python Test

    autorest --use=autorest-autoconfig@latest /azure-rest-api-specs/specification/storageimportexport/resource-manager/readme.md  --resource-file=./samples/sampleResource.json
