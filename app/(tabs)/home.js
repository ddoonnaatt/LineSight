// File path: /linesight/app/(tabs)/home
// This is the Home page which acts as a hub to other pages
// From here the user can:
//      > Go to checklists
//      > Go to finance
//      > Go to profile

import { Text, View } from "react-native";
import { Link } from "expo-router";
import HomeHeader from "../../components/HomeHeader";

function Home(){
    return(
        <View>
            <HomeHeader />
            <Text>
                Home page
            </Text>

            <Text>
                ---
            </Text>

            <Link href="/(tabs)/finance">
                Go to /finance
            </Link>

            <Text>
                ---
            </Text>

            <Link href="/(tabs)/checklists">
                Go to /checklists
            </Link>

            <Text>
                ---
            </Text>

            <Link href="/(tabs)/profile">
                Go to /profile
            </Link>

            <Text>
                ---
            </Text>

            <Link href="/">
                Go back to sign in
            </Link>
        </View>
    )
}

export default Home;