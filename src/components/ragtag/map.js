import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { loginUserRagTag } from '../../actions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from '../../markers'
import { RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD} from 'react-native-dotenv'
import { SpinnerCustom } from '../common'

class Map extends Component {

    state = {
        markers: markers,
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    componentWillMount() {
        this.props.loginUserRagTag({ RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD })
    }

    // * ABOUT TO RECEIVE NEW PROPS TO RENDER COMPONENT WITH *
    // "only gets called with new set of argumnts, which are nextProps"
    // "this.props is still the old set of props"
    componentWillReceiveProps(nextProps) {
        // this.createDataSource(nextProps)
    }

    handleOnPress(nativeEvent) {
        // console.log('handleOnPress...', nativeEvent)
        /*
            action:"marker-press"
            coordinate:{longitude: -122.4324, latitude: 37.78825}
            id:"100"
            target:2
        */
       // Firebase call(sender, receiver)
    }

    onRegionChange(region) {
        // this.setState({ region }); // keeps re-firing re-focusing
        // so do nothing...for now...nothing needed
    }

    renderMarker(data) {
        // return <ListItem employee={employee} />
    }

    renderSpinnerOrNot() {
        if (this.props.loading) {
            return <SpinnerCustom size="large" />
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.state.region}
                    onRegionChange={this.onRegionChange.bind(this)}
                >
                    {this.state.markers.map((marker, idx) => (
                        <Marker
                            identifier={marker.id}
                            key={idx}
                            coordinate={marker.latlng}
                            title={marker.title}
                            description={marker.description}
                            onPress={e => this.handleOnPress(e.nativeEvent)}
                        />
                    ))}
                </MapView>
                {this.renderSpinnerOrNot()}
                {/* {this.renderError()} */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
})

const mapStateToProps = (state, ownProps) => {
    console.log('map.js STATE', state)
    return {
        loading: state.auth.loading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, { loginUserRagTag })(Map)