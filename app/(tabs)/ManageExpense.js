import { Ionicons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import IconButton from '../../assets/IconButton';
import Button from '../../assets/Button';
import { GlobalStyles } from '../../Styles/styles';

function ManageExpense({route, navigation}) {
    //checking whether expense is being added or edited
    const editedExpenseId = route.params?.expenseId;
    const isEditing =!!editedExpenseId;

    //making sure right page is opened based on whether we want to 
    //add an expense or edit an existing expense
    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        }); 
    }, [navigation, isEditing]);

    //adding functionality
    function delExpense(){
        navigation.goBack();
    }
    function cancel(){
        navigation.goBack();
    }
    function confirm(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <View style={styles.buttons}>
                <Button style={styles.button} mode="flat" onPress={cancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={confirm}>
                    {isEditing ? 'Update' : 'Add'}
                </Button>
            </View>
        {isEditing && (
            <View style={styles.deleteCont}> 
                <IconButton icon="trash" color={GlobalStyles.colors.error500} size={20} onPress={delExpense} 
                />
            </View>
        )}
        </View>
    );
}

export default ManageExpense; 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteCont: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
});

/*
{isEditing && (
            <View style={styles.deleteCont}> 
                <IconButton icon="trash" color={GlobalStyles.colors.error500} size={20} onPress={delExpense} 
                />
            </View>
        )}
*/