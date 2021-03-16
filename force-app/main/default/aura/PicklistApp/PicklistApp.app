<aura:application extends="force:slds">
    <aura:attribute name="options" type="Object[]" />
    <aura:attribute name="label" type="String" default="Industry" />

    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />

    <lightning:card>
        <div class="slds-var-p-horizontal_small">
            <div class="slds-text-heading_large slds-var-p-vertical_medium">Picklist Component Examples</div>
            <div class="slds-grid slds-wrap slds-var-p-bottom_medium">
                <div class="slds-col slds-size_1-of-1">
                    <div class="slds-section-title--divider">Picklist with single select option</div>
                    <div class="slds-text-body_small slds-var-p-horizontal_small">
                        This example is of a single select picklist and very similar to lightning:combobox. Access the
                        selected value either by 'onChange' event or by accessing the 'selectedOptions' attribute. In
                        the case of single select picklist('multiple' attribute is set to false, which is default
                        value), the 'selectedOptions' attribute will only contain maximum of one value.
                    </div>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-p-horizontal_small">
                    <div class="slds-var-p-vertical_small">
                        <div class="slds-text-heading_small">Label Stacked</div>
                        <div class="slds-var-p-vertical_small">
                            <c:Picklist
                                options="{!v.options}"
                                label="{!v.label}"
                                variant="label-stacked"
                                onChange="{!c.handleOnChange}"
                            />
                        </div>
                    </div>

                    <div class="slds-var-p-vertical_small">
                        <div class="slds-text-heading_small">Label Inline</div>
                        <div class="slds-var-p-vertical_small">
                            <c:Picklist
                                options="{!v.options}"
                                label="{!v.label}"
                                variant="label-inline"
                                onChange="{!c.handleOnChange}"
                            />
                        </div>
                    </div>

                    <div class="slds-var-p-vertical_small">
                        <div class="slds-text-heading_small">Label Hidden</div>
                        <div class="slds-var-p-vertical_small">
                            <c:Picklist
                                options="{!v.options}"
                                label="{!v.label}"
                                variant="label-hidden"
                                onChange="{!c.handleOnChange}"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div class="slds-grid slds-wrap" style="margin-bottom: 250px">
                <div class="slds-col slds-size_1-of-1">
                    <div class="slds-section-title--divider">Picklist with multi select option</div>
                    <div class="slds-text-body_small slds-var-p-horizontal_small">
                        This example is of a multi select picklist. Access the selected values either by 'onChange'
                        event or by accessing the 'selectedOptions' attribute. In the case of multi select
                        picklist('multiple' attribute is set to true), the 'selectedOptions' attribute will contain
                        multi values.
                    </div>
                </div>
                <div class="slds-col slds-size_1-of-1 slds-var-p-horizontal_small">
                    <div class="slds-var-p-vertical_small">
                        <div class="slds-text-heading_small">Multi Select with 'allOption' attribute set to true</div>
                        <div class="slds-var-p-vertical_small">
                            <c:Picklist
                                options="{!v.options}"
                                label="{!v.label}"
                                variant="label-stacked"
                                multiple="true"
                                allOption="true"
                                onChange="{!c.handleOnChange}"
                            />
                        </div>
                    </div>

                    <div class="slds-var-p-vertical_small">
                        <div class="slds-text-heading_small">Multi Select with 'allOption' attribute set to false</div>
                        <div class="slds-var-p-vertical_small">
                            <c:Picklist
                                options="{!v.options}"
                                label="{!v.label}"
                                variant="label-inline"
                                multiple="true"
                                allOption="false"
                                onChange="{!c.handleOnChange}"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </lightning:card>
</aura:application>
