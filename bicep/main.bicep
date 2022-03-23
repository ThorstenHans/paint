param location string = resourceGroup().location
param envName string = 'jsdays'

param containerImage string
param containerPort int = 80
param acr string
param acrUser string

@secure()
param acrPassword string

module law 'log-analytics.bicep' = {
	name: 'log-analytics-workspace'
	params: {
      location: location
      name: 'law-${envName}'
	}
}

module containerAppEnvironment 'aca-environment.bicep' = {
  name: 'container-app-environment'
  params: {
    name: envName
    location: location
    lawClientId:law.outputs.clientId
    lawClientSecret: law.outputs.clientSecret
  }
}

module containerApp 'aca.bicep' = {
  name: 'paint'
  params: {
    name: 'paint'
    location: location
    containerAppEnvironmentId: containerAppEnvironment.outputs.id
    acr: acr
    acrUser: acrUser
    acrPassword: acrPassword
    containerImage: containerImage
    containerPort: containerPort
    useExternalIngress: true

  }
}

output fqdn string = containerApp.outputs.fqdn
