import { random } from 'faker/locale/en';

export default () => [
    { uuid: random.uuid(), name: 'iPresence Awesome code/coffee' },
    { uuid: random.uuid(), name: 'Dublin Cafe' },
    { uuid: random.uuid(), name: 'The Silver Penny' },
    { uuid: random.uuid(), name: 'Acme Backery' },
];
