import { StyleSheet, Pressable, View, Text} from "react-native";
import { GlobalStyles } from "../../Styles/styles";
import { useNavigation } from "@react-navigation/native";

export function getFormattedDate(date){
    return '${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}' 
}

function ExpenseItem({ id, description, amount, date}){
    const navigation = useNavigation();

    function expensePress(){
        navigation.navigate('ManageExpense', {
            expenseId: id
        });

    }
    //making the expense items shown on screen
    return <Pressable
        onPress={expensePress}
        style={({pressed}) => pressed && styles.pressed}
        >
        <View style = {styles.expenseItem}>
            <View>
                <Text style = {[styles.text, styles.description]}>{description}</Text>
                <Text style = {styles.text}>{date.toString()}</Text>
            </View>
            <View style = {styles.amountCont}>
                <Text style = {styles.amount}>{amount}</Text>
            </View>
        </View>
    </Pressable>
}

export default ExpenseItem;

const styles = StyleSheet.create({
    expenseItem: {
        padding:12,
        marginVertical: 10, 
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection:'row',
        justifyContent: 'space-between',
        borderRadius:10,
    },
    text: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 14,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountCont: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },
    pressed: {
        opacity: 0.80
    }
});