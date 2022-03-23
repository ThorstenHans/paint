// general Azure Container App settings
param location string
param name string
param containerAppEnvironmentId string

// Container Image ref
param containerImage string

// Networking
param useExternalIngress bool = false
param containerPort int

param envVars array = []
param acr string
param acrUser string
@secure()
param acrPassword string

resource containerApp 'Microsoft.Web/containerApps@2021-03-01' = {
    name: name
    kind: 'containerapp'
    location: location
    properties: {
        kubeEnvironmentId: containerAppEnvironmentId
        configuration: {
            secrets: [
                {
                    name: 'container-registry-password'
                    value: acrPassword
                }
            ]
            registries: [
                {
                    server: acr
                    username: acrUser
                    passwordSecretRef: 'container-registry-password'
                }
            ]
            ingress: {
                external: useExternalIngress
                targetPort: containerPort
            }
        }
        template: {
            containers: [
                {
                    image: containerImage
                    name: name
                    env: envVars
                }
            ]
            scale: {
                minReplicas: 0
            }
        }
    }
}

output fqdn string = containerApp.properties.configuration.ingress.fqdn
