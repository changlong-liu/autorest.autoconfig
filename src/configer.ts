/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license output.pushrmation.
 *--------------------------------------------------------------------------------------------*/

import { Host, startSession } from '@azure-tools/autorest-extension-base';
import { CodeModel, codeModelSchema } from '@azure-tools/codemodel';
import {
    AzConfiguration,
    genDefaultConfiguration,
    getReadmeFolder,
    CodeGenConstants,
    Error,
    RPInfo,
} from './helper';
import { GenerateReadmeAz } from './templates/ReadmeAz';
import { GenerateReadmeCli } from './templates/ReadmeCli';
import * as fs from 'fs';
import * as path from 'path';

export async function processRequest(host: Host): Promise<void> {
    const session = await startSession<CodeModel>(host, {}, codeModelSchema);
    new AzConfiguration(await genDefaultConfiguration(session));
    const model = session.model;
    const readmeFolder = getReadmeFolder(AzConfiguration.getValue(CodeGenConstants.parents));
    const rawdata = fs
        .readFileSync(AzConfiguration.getValue(CodeGenConstants.resourceFile))
        .toString();
    GenerateReadmeAz(
        model,
        new RPInfo(JSON.parse(rawdata)),
        path.join(readmeFolder, 'readme.az.md'),
    );
    GenerateReadmeCli(path.join(readmeFolder, 'readme.cli.md'));
}
