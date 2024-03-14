import {Camera} from 'expo-camera'
import { Container } from '../Container/Style'
import { StyleSheet } from 'react-native'
import { useEffect } from 'react'

export const CameraComp = ({visible}) => { 

    useEffect(() => {
        if (visible) {
            (async ()=>{
                const {status:cameraStatus} = await Camera.requestCameraPermissionsAsync();
            })();    
        }
    }, [visible])

    return(
        <Container>
            <Camera
                style={styles.camera}
                ratio={'16:9'}
            />

            
        </Container>
    )
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        height: "80%",
        width: "100%",
    },
})