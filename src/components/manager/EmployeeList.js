import React, { Component } from 'react'
import { View, Text, ListView } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'
import { RSA_X931_PADDING } from 'constants';

class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()

        const ds = new ListView.DataSource({
            rowHasChanged: (RSA_X931_PADDING,r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(this.props.employees)
    }

    // * ABOUT TO RECEIVE NEW PROPS TO RENDER COMPONENT WITH *
    // "only gets called with new set of argumnts, which are nextProps"
    // "this.props is still the old set of props"
    componentWillReceiveProps(nextProps) {
        console.log('COMPONENTWILLRECEIVEPROPS...')
        this.createDataSource(nextProps)
    }

    // for when re-naviating back, already have employees in redux
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (RSA_X931_PADDING,r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }

    render() {


        return (
            <View>
                <Text>Emp List1</Text>
                <Text>Emp List2</Text>
                <Text>Emp List3</Text>
            </View>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    employees: state.employees
}
export default connect(null, { employeesFetch } )(EmployeeList)