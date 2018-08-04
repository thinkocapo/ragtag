import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { loginUserRagTag } from '../../actions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from '../../markers'
import { RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD} from 'react-native-dotenv'
import { SpinnerCustom } from '../common'
import { watchPosition } from '../../modules'
import { getCurrentPosition } from '../../actions'

class Map extends Component {

    state = {
        markers: markers,
        initialPosition: '',

        // MOVING TO REDUX...

        // region: getCurrentPosition()

        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    }

    componentDidMount() {
        this.props.getCurrentPosition()

        // watchPosition()
    }

    componentWillMount() {
        this.props.loginUserRagTag({ RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD })
    }

    // * ABOUT TO RECEIVE NEW PROPS TO RENDER COMPONENT WITH * "only gets called with new set of argumnts, which are nextProps" "this.props is still the old set of props" this.createDataSource(nextProps)
    componentWillReceiveProps(nextProps) {
        console.log('-- nextProps --', nextProps)
        // this.setState({ region: nextProps.latlng });
        // this.props.getCurrentPosition()
    }

    handleOnPress(nativeEvent) {
        console.log('marker pressed', nativeEvent)
        const { actions, coordinate, id, target } = nativeEvent
        // TODO Firebase call(sender, receiver)
    }

    onRegionChange(region) {
        //this.setState({ region }); // keeps re-firing re-focusing // so do nothing...for now...nothing needed
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                </View>
            )
        }
    }

    // renderMarker(data) {
        // return <ListItem employee={employee} />
    // }

    renderSpinnerOrNot() {
        if (this.props.loading) {
            return <SpinnerCustom size="large" />
        }
    }

    render() {
        console.log('map.js render()...navigator', this.props)
        if (this.props.navigator.loading === true) {
            return <SpinnerCustom size="large" />
        }
        console.log()
        return (
            <View style={{flex: 1}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.props.navigator.latlng}
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
                {this.renderError()}
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
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
})

const mapStateToProps = (state, ownProps) => {
    return {
        navigator: state.navigator,
        loading: state.auth.loading,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, { getCurrentPosition, loginUserRagTag })(Map)