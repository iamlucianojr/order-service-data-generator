import { random } from 'faker/locale/en';

export default () => [
    { uuid: random.uuid(), version: 2 },
    { uuid: random.uuid(), version: 3 },
    { uuid: random.uuid(), version: 5 },
];
