# Grandchild - Grandparent LWC Communication

1. Track a property on the Grandparent
2. Pass that property to an @api decorated property (can be a getter/setter) on the Parent (the Grandparent's child)
3. Pass that property to an @api decorated property (can be a getter/setter) on the Grandchild (the Parent's child)

# Deploy the Demo

To deploy this Grandparent to Grandchild reactive component demo to your org, use the provided [manifest](/manifest/package.xml). This repo contains the LWCs and the Tab in a completely self-contained package. After deploying, open the tab named `Grandparent Grandchild Demo` by searching for it in the App Menu in Salesforce.

[`manifest/package.xml`](/manifest/package.xml)
