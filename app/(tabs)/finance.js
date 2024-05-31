// File path: /linesight/app/(tabs)/finance.js
// This is the page where the user can see all their expenses.
// (pls comment what can be done here this is so prof understands the purpose of each file)

import { Text} from 'react-native';
import ExpensesOutput from '../../components/Expenses/Expenses';

function Finance() {
    return <ExpensesOutput expensesTime='Total' />;
}

export default Finance;