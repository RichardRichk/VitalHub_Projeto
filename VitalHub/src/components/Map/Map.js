import { ActivityIndicator, StyleSheet } from "react-native";
import { Container } from "../Container/Style";
import { MapView, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useEffect, useState } from "react";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { mapskey } from "../../utils/mapsApiKey";

export const Map = () => {

    const  [initialPosition, setInitialPosition] = useState(null)
    // const [finalPosition, setFinalPosition] = useState({
    //     latitude: -23.671776,
    //     longitude: -46.617512
    // })

    async function CaptureLocation() {
        const {granted} = await requestForegroundPermissionsAsync()

        if (granted) {
            const captureLocation = await getCurrentPositionAsync()

            setInitialPosition(captureLocation);
        }
    }

    useEffect(() => {
        CaptureLocation()
    }, [1000])

    return(
        <>
        {
            initialPosition != null
            ? (<MapView
                initialRegion={{
                    latitudeDelta: 1,
                    longitudeDelta: 1,
                    latitude: -23.615057,
                    longitude: -46.570819
                }}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
            >

                <Marker
                    coordinate={{
                        latitude: initialPosition.coords.latitude,
                        longitude: initialPosition.coords.longitude,
                    }}
                    title="Initial Position"
                    description="Description"
                    pinColor={"purple"}
                />

                {/* <MapViewDirections
                    origin={initialPosition.coords}
                    destination={finalPosition}
                    strokeWidth={5}
                    strokeColor="#496BBA"
                    apikey={mapskey}
                />

                <Marker
                    coordinate={finalPosition}
                    title="Destiny"
                    description="place to go"
                    pinColor={'red'}
                /> */}

            </MapView>
            ) : (
                <Container>
                    <ActivityIndicator  />
                </Container>
            )
        }
        </>
    )
}

const styles = StyleSheet.create({
    map : {
      flex : 1,
      width : '100%'
    }
  });