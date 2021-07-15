import React, { PureComponent } from 'react'
import { Accordion, AccordionDetails, AccordionSummary, withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  root: {
    backgroundColor: '#fff',
    boxShadow: 'none',
    marginTop: 0,
    '& .MuiAccordionSummary-root': {
      padding: 0
    },
    '& .MuiAccordionDetails-root': {
      padding: 0
    },
    '& .MuiAccordion-root.Mui-expanded': {
      margin: 0,
      minHeight: '45px'
    },
    '& .MuiAccordionSummary-content': {
      marginTop: 0,
      marginBottom: 0
    }
  }
})

class MaterialAccordion extends PureComponent {
  render () {
    const { children, accordionLabel, ...restProps } = this.props
    return (
      <Accordion {...restProps}>
        <AccordionSummary>
          {accordionLabel}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    )
  }
}

MaterialAccordion.propTypes = {
  accordionLabel: PropTypes.string.isRequired
}

MaterialAccordion.default = {

}

export default withStyles(styles, { withTheme: true })(MaterialAccordion)
