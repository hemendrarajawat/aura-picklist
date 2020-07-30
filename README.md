# Aura Picklist
![Build and Deploy to Scratch Org](https://github.com/hemendrarajawat/aura-picklist/workflows/Build%20and%20Deploy%20to%20Scratch%20Org/badge.svg?branch=master)

Picklist is a Salesforce lightning aura component which let's you create single-select and multi-select picklist from a single component.

## Demo
Single select picklist: 

<kbd>
<img src="https://raw.githubusercontent.com/hemendrarajawat/aura-picklist/master/assets/images/single-select.gif" />
</kbd>

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
