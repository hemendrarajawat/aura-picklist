({
    handleOptionsChanged: function (component, event) {
        let newOptions = JSON.parse(JSON.stringify(event.getParam('value')));
        if (newOptions == null || newOptions.length == 0) {
            this.resetPicklist(component, event);
            return;
        }

        let c_options = component.get('v.c_options');
        let newSelectedValues = [];

        c_options.forEach((c_option) => {
            let newOption = newOptions.find(
                (option) => option.value == c_option.value
            );

            if (newOption) {
                newOption.selected = c_option.selected;
                if (newOption.selected) {
                    newSelectedValues.push(newOption.value);
                }
            }
        });

        component.set('v.c_options', newOptions);
        component.set('v.selectedValues', newSelectedValues);
        this.updateFinalValue(component, event);
    },
    togglePicklist: function (component, event) {
        let picklist = component.find('picklist').getElement();
        if (picklist.classList.contains('slds-is-open')) {
            picklist.classList.remove('slds-is-open');
        } else {
            picklist.classList.add('slds-is-open');
        }
    },

    fireOnChangeEvent: function (component, event) {
        var onChangeEvent = component.getEvent('onChange');
        onChangeEvent.setParams({
            selectedValues: component.get('v.selectedValues')
        });
        onChangeEvent.fire();
    },

    updateFinalValue: function (component, event) {
        let selectedOptions = component
            .get('v.c_options')
            .filter((c_option) => c_option.selected);

        let noOfSelectedOptions = selectedOptions.length;

        component.set(
            'v.picklistFinalValue',
            noOfSelectedOptions > 0
                ? noOfSelectedOptions > 1
                    ? `${noOfSelectedOptions} options selected`
                    : selectedOptions[0].label
                : null
        );
    },

    resetPicklist: function (component, event) {
        component.set('v.c_options', []);
        component.set('v.selectedValues', []);
        component.set('v.picklistFinalValue', null);
    },

    resetSelectedOptions: function (component, event, clickedValue) {
        let c_options = component.get('v.c_options');
        c_options.forEach((c_option) => {
            if (c_option.value != clickedValue) {
                c_option.selected = false;
            }
        });
        component.set('v.c_options', c_options);
    }
});
