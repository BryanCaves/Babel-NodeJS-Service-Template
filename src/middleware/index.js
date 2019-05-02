import { handleCors, handleBodyRequestParsing, handleCompression, handleMorgan } from './common';

export default [handleCors, handleBodyRequestParsing, handleCompression, handleMorgan];