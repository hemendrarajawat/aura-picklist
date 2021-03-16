({
    doInit: function (component, event, helper) {
        component.set('v.c_options', component.get('v.options'));
    },

    optionsChanged: function (component, event, helper) {
        helper.handleOptionsChanged(component, event);
    },

    togglePicklist: function (component, event, helper) {
        helper.changeFocusBackToInput(component, event);
        helper.togglePicklist(component, event);
    },

    handleFocusOut: function (component, event, helper) {
        setTimeout(() => {
            if (!helper.isInputFieldFocused(component, event)) {
                helper.closePicklist(component, event);
            }
        }, 200);
    },

    handleOptionClick: function (component, event, helper) {
        helper.changeFocusBackToInput(component, event);
        let clickedValue = event.currentTarget.getAttribute('data-value');
        let selectedValues = component.get('v.selectedValues');
        let multiple = component.get('v.multiple');
        if (!multiple) {
            helper.resetSelectedOptions(component, event, clickedValue);
        }

        let c_options = component.get('v.c_options');
        let selectedOption = c_options.find(
            (option) => option.value == clickedValue
        );

        if (selectedOption) {
            selectedOption.selected = !selectedOption.selected;
            component.set('v.c_options', c_options);

            if (!multiple) {
                selectedValues = [];
            }

            if (selectedOption.selected) {
                selectedValues.push(selectedOption.value);
            } else {
                selectedValues.splice(
                    selectedValues.indexOf(selectedOption.value),
                    1
                );
            }
        }

        component.set('v.selectedValues', selectedValues);
        helper.updateAllOptionsSelected(component, event);
        helper.updateFinalValue(component, event);
        if (!multiple) {
            helper.togglePicklist(component, event);
        }
        helper.fireOnChangeEvent(component, event);
    },

    handleAllOptionClick: function (component, event, helper) {
        helper.changeFocusBackToInput(component, event);
        let c_options = component.get('v.c_options');
        let selectedValues = [];
        c_options.forEach((c_option) => {
            c_option.selected = !component.get('v.allOptionsSelected');
            if (c_option.selected) {
                selectedValues.push(c_option.value);
            }
        });
        component.set('v.c_options', c_options);
        component.set('v.selectedValues', selectedValues);

        helper.updateAllOptionsSelected(component, event);
        helper.updateFinalValue(component, event);
        helper.fireOnChangeEvent(component, event);
    }
});
