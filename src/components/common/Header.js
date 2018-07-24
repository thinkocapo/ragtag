import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { prependOnceListener } from 'cluster'; from autocomplete when i was doing props.headerText...

const Header = (props) => {
    // destructuring to reerence our style
    // <View> is for positioning the <Text>
    // FLEXBOX is for Positioning - how we will position elements. similar/different to css flexbox
    // Positining within a container
    // <Text> appears at top-left by default of View container
    /*
    justifyContent - vertical direction
        flex-start
        center pushes to center middle
        flex-end pushes text to bottom
        space-between - maximize and equalize the amount of space between each item *
        space-around - space atop first item and space below last item *
    alignItems - horizontal direction
        flex-start
        center
        flex-end

    justifyContent can apply to vertical or horizontal layout,
    depends on what flex-direction is set to
    flex-direction: row
    flex-direction: column

    "Image will not Expand to fill its space by default" flex:1 width: null
    (TextInput does the same)
    flex:1 takes all, nothing else to add it to, like one-third if its 1 + 2

    * IMPORTANT *
    flex: 1, flex: 2 "when we have siblings, flex is how we allocation/proportion available space to teach one"
    "for each sibling, add up the values of flex, 2 + 1"

    "By default, tall components will not scroll, unlike a Browser" SrollView instead of View
    Scroll might bounce back to top, or wasted/unviewable space at bottom, so go to parent View of ScrollView and add flex: 1
    it means "expand this component to fit entire content area of the device [i.e. parent container]"


    import Button from 'react-native' or define your own and use touchable*
    "touchable is fancy name for button"
    "difference is how they provide feedback to the user"

    alignSelf is for flexbox
        "tells element to position itself using flexbox rules"

    */
    const { textStyle, viewStyle } = style
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

// it is not css selectors
// camelCase instead of dash-case
const style = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',

        height: 60,
        paddingTop: 15,

        // IOS
        // shadows only on iOS https://github.com/styled-components/styled-components/issues/709
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // elevation: 2,
        position: 'relative',

        // Android - maybe code in /android directory to leverage this? https://developer.android.com/training/material/shadows-clipping#Elevation
        // elevation: 2,
        // elevationColor: '#000', // no
        // elevationOffset: { width: 0, height: 2 }, // no


        // borderWidth: 1,
        // borderRadius: 2,
        // borderColor: '#ddd',
        // borderBottomWidth: 0
    },
    textStyle: {
        fontSize: 20
        // paddingBottom: 10
    }
}

export { Header }