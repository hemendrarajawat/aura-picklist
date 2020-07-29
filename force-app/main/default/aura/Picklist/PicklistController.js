({
    doInit: function (component, event, helper) {
        component.set('v.c_options', component.get('v.options'));
    },

    optionsChanged: function (component, event, helper) {
        helper.handleOptionsChanged(component, event);
    },

    togglePicklist: function (component, event, helper) {
        helper.togglePicklist(component, event);
    },

    handleFocusOut: function (component, event, helper) {
        console.log(event);
    },

    handleOptionClick: function (component, event, helper) {
        let clickedValue = event.currentTarget.getAttribute('data-value');
        helper.resetSelectedOptions(component, event, clickedValue);

        let c_options = component.get('v.c_options');
        let selectedOption = c_options.find(
            (option) => option.value == clickedValue
        );

        if (selectedOption) {
            selectedOption.selected = !selectedOption.selected;
            component.set('v.c_options', c_options);
            component.set('v.selectedValues', [selectedOption.value]);
        }

        helper.togglePicklist(component, event);
        helper.updateFinalValue(component, event);
        helper.fireOnChangeEvent(component, event);
    }
});
