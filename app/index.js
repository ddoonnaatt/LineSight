// File path: /linesight/app/index.js
// This is the Login page, and the first page that a user will see.
// From here, a user can:
//      > sign in with their username and password which will be matched with the database
//          > This will lead them to the Home page
//      > register if they do not have an account yet
//          > This will lead them to the Register page


import { Text, View } from "react-native"
import { Link } from "expo-router"

function Login(){
    return(
        <View>
            <Text>
                Login page
            </Text>

            <Text>
                ---
            </Text>

            <Link href="/register">
                Go to /register
            </Link>

            <Text>
                ---
            </Text>

            <Link href="/(tabs)/home">
                Go to /home
            </Link>
        </View>
    )
}

export default Login;