import cors from  'cors';
import parser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

export const handleCors = (Router) => {
    Router.use(cors({credentials: true, origin: true}));
};

export const handleBodyRequestParsing = (Router) => {
    Router.use(parser.urlencoded({extended: true}));
};

export const handleCompression = (Router) => {
    Router.use(compression());
};

export const handleMorgan = (Router) => {
    Router.use(morgan('tiny'));
};