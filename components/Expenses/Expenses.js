import { StyleSheet, View, Pressable, Text } from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../Styles/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e01',
        description: 'glock',
        amount: 100.333,
        date: new Date('2024-5-5')
    },
    {
        id: 'e02',
        description: 'sweet treat',
        amount: 1.0,
        date: new Date('2024-5-5')
    },
    {
        id: 'e03',
        description: 'rock',
        amount: 0.0,
        date: new Date('2024-5-5')
    }
];

//Displaying the manually made dummy expenses  
function ExpensesOutput({expenses, expensesTime}){
    return (
        <>
        <View style={styles.container}>
            <ExpensesSummary expenses={DUMMY_EXPENSES} timePeriod={expensesTime} />
            <ExpensesList expenses={DUMMY_EXPENSES} />
        </View>
        
        </>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
    flex:1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700
    },
});