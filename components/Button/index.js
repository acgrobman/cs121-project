

import React from "react"
import { Button } from 'react-native-elements';
import { styled } from 'styled-components'


export default class ButtonClass extends React.Component {
	render() {
		return <Button {...this.props} />
	}
}