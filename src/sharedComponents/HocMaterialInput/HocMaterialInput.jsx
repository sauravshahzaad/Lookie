import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import MaterialInput from '../../sharedComponents/materialComponents/MaterialInput/MaterialInput'
import { ADDRESS_ROUTE, BUSINESS_ROUTE, ETB_ROUTE, FAMILY_ROUTE, PERSONAL_INFO_ROUTE } from '../../configurations/routing/routeConstants';
import { convertStringDotNotationToArray, getObjectBasedOnPage, formikPageMapper } from "../../utilities/global"
import MaterialDropdown from '../../sharedComponents/materialComponents/Dropdown/MaterialDropdown'
import { PureComponent } from 'react';
import MaterialToggle from '../materialComponents/Toggle/MaterialToggle';
import MaterialAutocomplete from '../materialComponents/Autocomplete/MaterialAutocomplete'


class HocMaterialInput extends PureComponent {

  checkNameMatch = (name, compareJson) => {
    const nameString = (name === 'pan') ? 'panNumber' : name
    if (!compareJson || Object.keys(compareJson).length === 0) {
      return false
    }
    if (!nameString) {
      console.log('failing function', nameString, compareJson)
      return false
    }
    const nameArray = nameString.split(".");
    for (var i = 0; i < nameArray.length; i++) {
      if (compareJson[nameArray[i]]) {
        if (compareJson[nameArray[i]] === true) {
          return true
        } else {
          compareJson = compareJson[nameArray[i]]
        }
      } else {
        return false
      }
    }
    return false
  }

  // checkNameMatchFlag = (keyName, compareJson) => {
  //   const splitName = keyName.split(".");
  //   const keyname = splitName[splitName.length - 1]
  //   const result = this.findObjectByLabel(compareJson, keyname)
  //   return result;
  // }

  // findObjectByLabel = function (obj, label) {
  //   if (i === label) { return obj; }
  //   for (var i in obj) {
  //     if (i === label) return true
  //     var foundLabel = this.findObjectByLabel(obj[i], label);
  //     if (foundLabel) { return foundLabel; }
  //   }
  //   return null;
  // };

  returnChildren() {
    const { children, frontendMeta, pagePath } = this.props
    const { props } = children;
    const { name, disabled } = props;

    // frontendMeta
    // const { hidden, readOnly } = frontendMeta;
    const hidden = frontendMeta?.hidden
    const readOnly = frontendMeta?.readOnly
    const hiddenJson = convertStringDotNotationToArray(hidden)
    const readOnlyJson = convertStringDotNotationToArray(readOnly)

    const hiddenJsonAccordingToPage = getObjectBasedOnPage(formikPageMapper[pagePath], hiddenJson, pagePath)
    const disabledJsonAccordingToPage = getObjectBasedOnPage(formikPageMapper[pagePath], readOnlyJson, pagePath)


    // const nameMatchFlagHidden = this.checkNameMatchFlag(name, hiddenJsonAccordingToPage);
    // const nameMatchFlagDisabled = this.checkNameMatchFlag(name, disabledJsonAccordingToPage);

    const nameMatchFlagHidden = this.checkNameMatch(name, hiddenJsonAccordingToPage);
    const nameMatchFlagDisabled = this.checkNameMatch(name, disabledJsonAccordingToPage);

    if (nameMatchFlagHidden) {
      return null
    } else {
      let disabledFlag = disabled ? true : false;
      if (!disabled && disabledJsonAccordingToPage && nameMatchFlagDisabled) {
        disabledFlag = true
      }
      switch (this.props.type) {
        case "MaterialInput": {
          return <MaterialInput {...props} disabled={disabledFlag} />
        }

        case "MaterialDropdown": {
          return <MaterialDropdown {...props} disabled={disabledFlag} />
        }

        case "MaterialToggle": {
          return <MaterialToggle {...props} disabled={disabledFlag} />
        }

        case 'MaterialAutocomplete': {
          return <MaterialAutocomplete {...props} disabled={disabledFlag} />
        }

        default: {
          return { ...children }
        }

      }
    }
  }

  render() {
    return (
      <Box>
        {this.returnChildren()}
      </Box>
    );
  }
}

HocMaterialInput.propTypes = {
  frontendMeta: PropTypes.object,
  pagePath: PropTypes.string.isRequired,
  type: PropTypes.string
};

export default HocMaterialInput;
