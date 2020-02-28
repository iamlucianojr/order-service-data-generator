import generateCategories from './categories';
import generateProducts from './products';
import generateEstablishments from './establishments';

export default (options = { serializeDate: true }) => {
    const db = {};
    db.categories = generateCategories(db, options);
    db.products = generateProducts(db, options);
    db.establishments = generateEstablishments(db, options);
    db.settings = [
        {
            id: 1,
            configuration: {
                url: 'http://localhost:3000/',
                mail: {
                    sender: 'luciano@lucianojr.dev',
                    transport: {
                        service: 'fakemail',
                        auth: {
                            user: 'fake@lucianojr.dev',
                            pass: 'foobar',
                        },
                    },
                },
                file_type_whiltelist: [
                    'txt',
                    'doc',
                    'docx',
                    'xls',
                    'xlsx',
                    'pdf',
                    'png',
                    'jpg',
                ],
            },
        },
    ];

    return db;
};
