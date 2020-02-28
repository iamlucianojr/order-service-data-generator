import { random, lorem, commerce, image } from 'faker/locale/en';

import { randomFloat, weightedBoolean } from './utils';

export default db => {
    return db.categories.reduce(
        (acc, category) => [
            ...acc,
            ...Array.from(Array(10).keys()).map(index => {
                const imageUrl = image.food();
                return {
                    uuid: random.uuid(),
                    category_uuid: category.uuid,
                    reference: commerce.productName(),
                    price: randomFloat(0, 20),
                    thumbnail: imageUrl,
                    image: imageUrl,
                    description: lorem.paragraph(),
                    stock: weightedBoolean(20)
                        ? 0
                        : random.number({ min: 0, max: 250 }),
                };
            }),
        ],
        []
    );
};
