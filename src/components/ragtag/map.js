import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { getAndSetCurrentPosition, fetchAndPlotUsers, loginUserRagTag } from '../../actions'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { markers } from '../../markers'
import { RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD} from 'react-native-dotenv'
import { SpinnerCustom } from '../common'

// region moved from state to redux via getAndSetPosition
class Map extends Component {

    state = {
        markers: markers,
    }
        
    // TODO make one renderSpinnerOrNot for both of these
    async componentWillMount() {
        // TODO - Try firebase mounting here? because needs to finish before loginUserRagTag can work, and loginUserRagTag was executing before firebase initialization was done...
        // TODO - though, its finishing early enough for now, before the getAndSetPosition
        
        await this.props.loginUserRagTag({ RAGTAG_YOUR_EMAIL, RAGTAG_YOUR_PASSWORD })
        await this.props.fetchAndPlotUsers()
        this.props.getAndSetCurrentPosition()
    }

    // CAN USE? - About to receive new props to render component with "only gets called with new set of argumnts, which are nextProps" "this.props is still the old set of props" this.createDataSource(nextProps)
    componentWillReceiveProps(nextProps) {
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

    renderSpinnerOrNot() {
        if (this.props.loading) { // || this.props.navigator.loading === true
            return <SpinnerCustom size="large" />
        }
    }

    render() {
        if (this.props.navigator.loading === true) { // remove and use renderSpinnerOrNot, maybe put renderSpinnerorNot at top before the Markers?
            return <SpinnerCustom size="large" />
        }
        return (
            <View style={{flex: 1}}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.props.navigator.latlng}
                    onRegionChange={this.onRegionChange.bind(this)}
                >
                    {/* {this.state.markers.map((marker, idx) => ( */}
                    {this.props.users.map((marker, idx) => (
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
    console.log('state.firebase', state.firebase)
    console.log('state.firebase.users', state.firebase.users)

    // const employees = _.map(state.employees, (val, uid) => {
    //     return { ...val, uid } // { uid, shift, name, phone } * END RESULT *
    // })

    // return { employees }

    // const users = state.firebase.users.map((user, idx) => {
    //     return {
    //         latlng: {
    //             latitude: '',
    //             longitude: ''
    //         },
    //         id: idx
    //     }
    // })

    return {
        navigator: state.navigator,
        loading: state.auth.loading,
        error: state.auth.error,
        users: markers
    }
}
export default connect(mapStateToProps, 
    { 
        getAndSetCurrentPosition,
        loginUserRagTag,
        fetchAndPlotUsers 
    })
    (Map)

// TODO - import { watchPosition } from '../../modules'
// componentWillUnmount() {
//     navigator.geolocation.clearWatch(this.watchId);
// }

// renderMarker(data) {
    // return <ListItem employee={employee} />
// }