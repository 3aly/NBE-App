import ExampleSheet from './Warning/Warning';
import {registerSheet} from 'react-native-actions-sheet';
import {WeakPassSheet} from './WeakPass/WeakPass';

registerSheet('example-sheet', ExampleSheet);
registerSheet('WeakPassSheet', WeakPassSheet);

export {};
