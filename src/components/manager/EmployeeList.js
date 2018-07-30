import React, { Component } from 'react'
import { ListView, View } from 'react-native'
import { connect } from 'react-redux'
import _ from 'lodash'
import { employeesFetch } from '../../actions'
import ListItem from './ListItem'


class EmployeeList extends Component {

    componentWillMount() {
        this.props.employeesFetch()

        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(this.props.employees)
    }

    // * ABOUT TO RECEIVE NEW PROPS TO RENDER COMPONENT WITH *
    // "only gets called with new set of argumnts, which are nextProps"
    // "this.props is still the old set of props"
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps)
    }

    // for when re-naviating back, already have employees in redux
    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.dataSource = ds.cloneWithRows(employees)
    }

    renderRow(employee) {
        return <ListItem employee={employee} />
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid } // { uid, shift, name, phone } * END RESULT *
    })

    return { employees }
}
export default connect(mapStateToProps, { employeesFetch } )(EmployeeList)