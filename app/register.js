// File path: /linesight/app/register.js
// This is the Register page, where the user can make an account if they don't have one yet.
// From here the user can enter their data and the app will send it to the database.
// Once submitted, user will be redirected to Login page (?)

import { Text, View } from "react-native"
import { Link } from "expo-router"

function Register(){
    return(
        <View>
            <Text>
                Register page
            </Text>

            <Link href="/">
                Go back to /index
            </Link>
        </View>
    )
}

export default Register;