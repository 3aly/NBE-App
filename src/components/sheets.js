import {registerSheet} from 'react-native-actions-sheet';
import emptycard from './Sheets/emptycard';
import fpsheet from './Sheets/fpsheet';
import otpsucess from './Sheets/otpsucess';
import successcard from './Sheets/successcard';
import {ExampleSheet} from './Warning/Warning';
import {WeakPassSheet} from './WeakPass/WeakPass';

registerSheet('example-sheet', ExampleSheet);
registerSheet('WeakPassSheet', WeakPassSheet);
registerSheet('successcard', successcard);
registerSheet('otpsucess', otpsucess);
registerSheet('emptycard', emptycard);
registerSheet('fpsheet', fpsheet);

export {};
