# Aura Picklist

![Build and Deploy to Scratch Org](https://github.com/hemendrarajawat/aura-picklist/workflows/Build%20and%20Deploy%20to%20Scratch%20Org/badge.svg?branch=master)
![CodeQL](https://github.com/hemendrarajawat/aura-picklist/workflows/CodeQL/badge.svg?branch=master)

Picklist is a Salesforce lightning aura component which let's you create single-select and multi-select picklist from a single component.

## Demo

Single select picklist:

<kbd>
<img src="https://raw.githubusercontent.com/hemendrarajawat/aura-picklist/master/assets/images/single-select.gif" />
</kbd>

<br/>

Multi select picklist:

<kbd>
<img src="https://raw.githubusercontent.com/hemendrarajawat/aura-picklist/master/assets/images/multi-select.gif" />
</kbd>

## Installation

Deploy to Production/Sandbox:
<a href="https://githubsfdeploy.herokuapp.com">
<img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

Deploy to Scratch org: [![Deploy](https://deploy-to-sfdx.com/dist/assets/images/DeployToSFDX.svg)](https://deploy-to-sfdx.com)

## Screenshot(s)

<kbd>
<img src="https://raw.githubusercontent.com/hemendrarajawat/aura-picklist/master/assets/images/picklist-variants.png" />
</kbd>

## Sample Code

Single Select cmp code:

`<c:Picklist options="{!v.options}" label="{!v.label}" variant="label-stacked" onChange="{!c.handleOnChange}" />`

Multi Select cmp code:

`<c:Picklist options="{!v.options}" label="{!v.label}" variant="label-stacked" multiple="true" allOption="true" onChange="{!c.handleOnChange}" />`

Controller code to handle the change event:

```
handleOnChange: function (component, event, helper) {
   console.log(event.getParam('selectedValues'));
}
```

## API Specifications

Attributes

| NAME           | TYPE     | REQUIRED           | DEFAULT          | DESCRIPTION                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------- | :------------------: | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| label          | String   | :heavy_check_mark: |                  | Text label for the picklist.                                                                                                                                                                                                                                                                                                                                       |
| placeholder    | String   |                    | Select an Option | Text that is displayed before an option is selected, to prompt the user to select an option.                                                                                                                                                                                                                                                                       |
| options        | Object[] | :heavy_check_mark: |                  | A list of options that are available for selection. Each option has the following attributes: label and value.                                                                                                                                                                                                                                                     |
| selectedValues | String[] |                    |                  | This stores the list of all the selected option's value.                                                                                                                                                                                                                                                                                                           |
| variant        | String   |                    |                  | The variant changes the appearance of an input field. Accepted variants include label-inline, label-hidden, and label-stacked. This value defaults to label-stacked, which displays the label above the field. Use label-hidden to hide the label but make it available to assistive technology. Use label-inline to horizontally align the label and input field. |
| multiple       | Boolean  |                    | false            | This will handle the multi-select functionality. If true, multi-select will be enabled.                                                                                                                                                                                                                                                                            |
| allOption      | Boolean  |                    | true             | If true, 'All' option will be provided in multi-select picklist.                                                                                                                                                                                                                                                                                                   |
| onChange       | action   |                    |                  | The action triggered when the value is changed. The event will have an 'selectedValues' param which contains all the selected option's value. In case of single-select only one value will be there in the array.                                                                                                                                                  |

## Contributing to Aura Picklist

To contribute follow these steps:

1. Fork this repository.
2. Create a branch with your username: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push the changes to your forked branch: `git push origin <branch_name>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## License

This project is MIT licensed, as found in [LICENSE.md](LICENSE.md) file.
