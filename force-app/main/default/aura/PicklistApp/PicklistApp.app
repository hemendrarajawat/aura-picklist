<aura:application extends="force:slds">
    <aura:attribute name="options" type="Object[]" />
    <aura:attribute name="label" type="String" default="Industry" />

    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />

    <lightning:card title="Picklist Component Examples">
        <div class="slds-var-p-horizontal_small">
            <div class="slds-grid slds-wrap">
                <div class="slds-col slds-size_1-of-1">
                    <div class="slds-text-heading_medium">
                        Picklist with single select option
                    </div>
                    <div class="slds-text-body_small">
                        This example is of a single select picklist and very similar to lightning:combobox. Access the
                        selected value either by 'onChange' event or by accessing the 'selectedOptions' attribute. In
                        the case of single select picklist('multiple' attribute is set to false, which is default
                        value), the 'selectedOptions' attribute will only contain maximum of one value.
                    </div>
                </div>
                <div class="slds-col slds-size_1-of-1">
                    <c:Picklist options="{!v.options}" label="{!v.label}" variant="label-stacked" />

                    <c:Picklist options="{!v.options}" label="{!v.label}" variant="label-inline" />

                    <c:Picklist options="{!v.options}" label="{!v.label}" variant="label-hidden" />

                    <lightning:button variant="base" label="Change Options" onclick="{! c.changeOptions }" />
                </div>
            </div>
        </div>
    </lightning:card>
</aura:application>
