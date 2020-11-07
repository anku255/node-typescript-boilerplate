import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';

console.log('path', path.join(__dirname, '../../../src/schema/types'));

const typesArray = loadFilesSync(path.join(__dirname, '../../../src/schema/types'));

export default mergeTypeDefs(typesArray);
