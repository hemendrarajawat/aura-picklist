({
    doInit: function (component, event, helper) {
        let options = [
            {
                label: 'Automobiles and Components',
                value: 'Automobiles_and_Components'
            },
            { label: 'Banks', value: 'Banks' },
            {
                label: 'Commercial and Professional Services',
                value: 'Commercial_and_Professional_Services'
            },
            {
                label: 'Communication Services',
                value: 'Communication_Services'
            },
            { label: 'Consumer Services', value: 'Consumer_Services' },
            { label: 'Energy', value: 'Energy' },
            {
                label: 'Food, Beverage, and Tobacco',
                value: 'Food_Beverage_and_Tobacco'
            }
        ];

        component.set('v.options', options);
    },

    changeOptions: function (component, event, helper) {
        let options = [
            {
                label: 'Automobiles and Components',
                value: 'Automobiles_and_Components'
            },
            { label: 'Banks', value: 'Banks' },
            {
                label: 'Commercial and Professional Services',
                value: 'Commercial_and_Professional_Services'
            },
            {
                label: 'Communication Services',
                value: 'Communication_Services'
            },
            { label: 'Consumer Services', value: 'Consumer_Services' }
        ];

        component.set('v.options', options);
    },

    handleOnChange: function (component, event, helper) {
        console.log(event.getParam('selectedValues'));
    }
});
