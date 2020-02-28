import { random } from 'faker/locale/en';

export default () => [
    { uuid: random.uuid(), name: 'drinks' },
    { uuid: random.uuid(), name: 'food' },
    { uuid: random.uuid(), name: 'others' },
];
