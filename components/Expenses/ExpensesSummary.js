import {StyleSheet, View, Text} from 'react-native';
import { GlobalStyles } from '../../Styles/styles';

/* Outputting the summary including details of all the expenses */
function ExpensesSummary({expenses, timePeriod}){
    const expensesSum = expenses.reduce((sum, expenses) => {
        return sum + expenses.amount
    }, 0);
    
    return (
        <View style={styles.container}>
            <Text style={styles.period}> {timePeriod} </Text>
            <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({
    container: {
        padding:8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 14,
        color: GlobalStyles.colors.primary400,
    }, 
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500
    }
});