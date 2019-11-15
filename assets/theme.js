const colors = {
    primary: '#1b2733',
    secondary: '#455060',
    tertiary: '#687588',
    green: '#65bf90',
    blue: '#4d43e0',
    pink: '#d431e2',
    greyBorder: '#687588',
    focus: '#0f62fa',
}

export default theme = {
    ...colors,
    fontFamily: '"Source Sans Pro", sans-serif',
    Button: {
        titleStyle: {
            primary: colors.primary
        },
        buttonStyle: {
            color: colors.green
        }
    }
}